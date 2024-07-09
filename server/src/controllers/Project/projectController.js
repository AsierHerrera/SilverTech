import Project from '../../models/projectModel.js';
import userModel from '../../models/userModel.js';

// Lógica para crear un nuevo proyecto asociado a un usuario
const create = async (data, userId) => {
    const {
        title,
        category,
        contactInfo,
        description,
        beneficiaries,
        startDate,
        endDate,
        expectedEconomicImpact,
        expectedSocialImpact,
        expectedEnvironmentalImpact,
        email // El email ahora viene dentro del objeto data
    } = data;

    try {
        const project = new Project({
            title,
            category,
            professionalReference: userId,
            contactInfo,
            description,
            beneficiaries,
            startDate,
            endDate,
            expectedResults: {
                economicImpact: expectedEconomicImpact,
                socialImpact: expectedSocialImpact,
                environmentalImpact: expectedEnvironmentalImpact
            },
            createdBy: userId,
            users: [userId] // Inicialmente solo el creador es parte del proyecto
        });

        const savedProject = await project.save();

        // Asociar el proyecto al usuario creador
        await userModel.findByIdAndUpdate(
            userId,
            { $addToSet: { projects: savedProject._id } },
            { new: true }
        );

        // Enviar invitación al usuario especificado por email
        await inviteUserToProject(savedProject._id, email);

        return savedProject;
    } catch (error) {
        console.error(error);
        throw new Error(`Error al crear el proyecto: ${error.message}`);
    }
};

const getAll = async () => {
    try {
        return await Project.find().populate('users', 'username email');
    } catch (error) {
        throw new Error(`Error al obtener todos los proyectos: ${error.message}`);
    }
};

const getById = async (id) => {
    try {
        return await Project.findById(id).populate('users', 'username email');
    } catch (error) {
        throw new Error(`Error al obtener el proyecto: ${error.message}`);
    }
};

const update = async (id, data) => {
    try {
        const project = await Project.findById(id);
        if (!project) throw new Error('Proyecto no encontrado');

        const {
            title,
            category,
            professionalReference,
            contactInfo,
            description,
            beneficiaries,
            startDate,
            endDate,
            expectedEconomicImpact,
            expectedSocialImpact,
            expectedEnvironmentalImpact
        } = data;

        project.title = title || project.title;
        project.category = category || project.category;
        project.professionalReference = professionalReference || project.professionalReference;
        project.contactInfo = contactInfo || project.contactInfo;
        project.description = description || project.description;
        project.beneficiaries = beneficiaries || project.beneficiaries;
        project.startDate = startDate || project.startDate;
        project.endDate = endDate || project.endDate;
        project.expectedResults = {
            economicImpact: expectedEconomicImpact || project.expectedResults.economicImpact,
            socialImpact: expectedSocialImpact || project.expectedResults.socialImpact,
            environmentalImpact: expectedEnvironmentalImpact || project.expectedResults.environmentalImpact
        };

        return await project.save();
    } catch (error) {
        throw new Error(`Error al actualizar el proyecto: ${error.message}`);
    }
};

const remove = async (id) => {
    try {
        const project = await Project.findByIdAndDelete(id);
        if (!project) throw new Error('Proyecto no encontrado');

        // Eliminar referencia del proyecto en todos los usuarios
        await userModel.updateMany(
            { projects: id }, // Busca usuarios que tengan este proyecto en su lista
            { $pull: { projects: id } } // Elimina el ID del proyecto de la lista de proyectos del usuario
        );

        return project;
    } catch (error) {
        throw new Error(`Error al eliminar el proyecto: ${error.message}`);
    }
};

const addUserToProject = async (projectId, userEmail) => {
    try {
        // Buscar usuario por correo electrónico
        const user = await userModel.findOne({ email: userEmail });
        if (!user) throw new Error('Usuario no encontrado');

        // Añadir usuario al proyecto
        const project = await Project.findByIdAndUpdate(
            projectId,
            { $addToSet: { users: user._id } },
            { new: true }
        );

        if (!project) throw new Error('Proyecto no encontrado');

        // Asociar proyecto al usuario
        await userModel.findByIdAndUpdate(
            user._id,
            { $addToSet: { projects: projectId } },
            { new: true }
        );

        return project;
    } catch (error) {
        throw new Error(`Error al añadir usuario al proyecto: ${error.message}`);
    }
};

const removeUserFromProject = async (projectId, userEmail) => {
    try {
        // Buscar usuario por correo electrónico
        const user = await userModel.findOne({ email: userEmail });
        if (!user) throw new Error('Usuario no encontrado');

        // Eliminar usuario del proyecto
        const project = await Project.findByIdAndUpdate(
            projectId,
            { $pull: { users: user._id } },
            { new: true }
        );

        if (!project) throw new Error('Proyecto no encontrado');

        // Eliminar referencia del proyecto en el usuario
        await userModel.findByIdAndUpdate(
            user._id,
            { $pull: { projects: projectId } },
            { new: true }
        );

        return project;
    } catch (error) {
        throw new Error(`Error al eliminar usuario del proyecto: ${error.message}`);
    }
};

const getByUserId = async (userId) => {
    try {
        return await Project.find({ users: userId }).populate('users', 'username email');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Lógica para enviar invitación a un proyecto
const inviteUserToProject = async (projectId, userMail) => {
    try {
        const project = await Project.findById(projectId);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }
        const user = await userModel.findOne({ email: userMail });

        const userId = user._id

        // Verificar si el usuario ya ha sido invitado
        if (project.invitations.some(inv => inv.userId.toString() === userId)) {
            throw new Error('El usuario ya ha sido invitado');
        }

        project.invitations.push({ userId });
        await project.save();
        return project;
    } catch (error) {
        throw new Error(`Error al invitar al usuario: ${error.message}`);
    }
};

// Lógica para responder a una invitación
const respondToInvitation = async (projectId, userId, response) => {
    try {
        if (!response) {
            throw new Error('Respuesta no especificada');
        }

        const project = await Project.findById(projectId);
        if (!project) {
            throw new Error('Proyecto no encontrado');
        }

        // Usamos findById para asegurar que los objetos ObjectId se manejen correctamente
        const invitation = project.invitations.find(inv => inv.userId.equals(userId));
        if (!invitation) {
            throw new Error('Invitación no encontrada');
        }

        invitation.status = response;
        if (response === 'accepted') {
            project.users.push(userId);
            // Asociar proyecto al usuario
            await userModel.findByIdAndUpdate(
                userId,
                { $addToSet: { projects: projectId } },
                { new: true }
            );
        }

        await project.save();
        return project;
    } catch (error) {
        throw new Error(`Error al responder a la invitación: ${error.message}`);
    }
};


// Obtener invitaciones por usuario
const getUserInvitations = async (userId) => {
    try {
        const projects = await Project.find({ 'invitations.userId': userId, 'invitations.status': 'pending' })
        return projects.map(project => ({
            projectId: project._id,
            projectTitle: project.title
        }));
    } catch (error) {
        throw new Error(`Error al obtener las invitaciones del usuario: ${error.message}`);
    }
};

export default {
    create,
    getAll,
    getById,
    update,
    remove,
    addUserToProject,
    removeUserFromProject,
    getByUserId,
    inviteUserToProject,
    respondToInvitation,
    getUserInvitations
};
