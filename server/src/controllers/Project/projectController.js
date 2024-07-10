import Project from '../../models/projectModel.js';
import userModel from '../../models/userModel.js';


/**
 * Función para crear un nuevo proyecto asociado con un usuario.
 *
 * @param {object} data - Un objeto que contiene los datos del proyecto.
 * @param {string} userId - El ID del usuario que crea el proyecto.
 * @return {object} El objeto del proyecto guardado.
 */

const create = async (data, userId) => {
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

    try {
        const project = new Project({
            title,
            category,
            professionalReference:userId,
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
            users: userId
        });

        const savedProject = await project.save();

        // Asociar el proyecto al usuario creador
        await userModel.findByIdAndUpdate(
            userId,
            { $addToSet: { projects: savedProject._id } },
            { new: true }
        );

        return savedProject;
    } catch (error) {
        console.error(error);
        throw new Error(`Error al crear el proyecto: ${error.message}`);
    }
};

/**
 * Recupera todos los proyectos de la base de datos y llena el campo 'users'.
 *
 * @return {Promise<Array>} Un array de proyectos con el campo 'users' lleno.
 */

const getAll = async () => {
    try {
        return await Project.find().populate('users');
    } catch (error) {
        throw new Error(`Error al obtener todos los proyectos: ${error.message}`);
    }
};

/**
 * Recupera un proyecto por su ID y llena el campo 'users'.
 *
 * @param {string} id - El ID del proyecto a recuperar.
 * @return {Promise<Object>} El objeto del proyecto con el campo 'users' lleno.
 * @throws {Error} Si hay un error al recuperar el proyecto.
 */

const getById = async (id) => {
    try {
        return await Project.findById(id).populate('users');
    } catch (error) {
        throw new Error(`Error al obtener el proyecto: ${error.message}`);
    }
};


/**
 * Actualiza un proyecto con el ID dado con los datos proporcionados.
 *
 * @param {string} id - El ID del proyecto a actualizar.
 * @param {Object} data - Los datos para actualizar el proyecto.
 * @param {string} data.title - El nuevo título del proyecto (opcional).
 * @param {string} data.category - La nueva categoría del proyecto (opcional).
 * @param {string} data.professionalReference - La nueva referencia profesional del proyecto (opcional).
 * @param {string} data.contactInfo - La nueva información de contacto del proyecto (opcional).
 * @param {string} data.description - La nueva descripción del proyecto (opcional).
 * @param {string} data.beneficiaries - Los nuevos beneficiarios del proyecto (opcional).
 * @param {Date} data.startDate - La nueva fecha de inicio del proyecto (opcional).
 * @param {Date} data.endDate - La nueva fecha de finalización del proyecto (opcional).
 * @param {string} data.expectedEconomicImpact - El nuevo impacto económico esperado del proyecto (opcional).
 * @param {string} data.expectedSocialImpact - El nuevo impacto social esperado del proyecto (opcional).
 * @param {string} data.expectedEnvironmentalImpact - El nuevo impacto ambiental esperado del proyecto (opcional).
 * @return {Promise<Project>} El proyecto actualizado.
 * @throws {Error} Si el proyecto no se encuentra o si hay un error al actualizar el proyecto.
 */

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


/**
 * Elimina un proyecto por su ID y lo borra de la lista de proyectos de todos los usuarios.
 *
 * @param {string} id - El ID del proyecto a eliminar.
 * @return {Promise<Project>} El proyecto eliminado.
 * @throws {Error} Si el proyecto no se encuentra.
 */

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


/**
 * Una función para agregar un usuario a un proyecto basado en el ID del proyecto y el correo electrónico del usuario proporcionados.
 *
 * @param {string} projectId - El ID del proyecto al que agregar el usuario.
 * @param {string} userEmail - El correo electrónico del usuario a agregar al proyecto.
 * @return {Promise} El proyecto con el usuario agregado.
 */

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


/**
 * Elimina a un usuario de un proyecto por su correo electrónico.
 *
 * @param {string} projectId - El ID del proyecto.
 * @param {string} userEmail - El correo electrónico del usuario a eliminar.
 * @return {Promise<Object>} El objeto del proyecto actualizado.
 * @throws {Error} Si el usuario no se encuentra o el proyecto no se encuentra.
 */

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

/**
 * Recupera proyectos por ID de usuario y llena el campo de usuarios con nombre de usuario y correo electrónico.
 *
 * @param {String} userId - El ID del usuario para recuperar proyectos.
 * @return {Promise<Array>} Un array de proyectos asociados con el usuario especificado.
 */

const getByUserId = async (userId) => {
    try {
        return await Project.find({ users:userId }).populate('users', 'username email');
    } catch (error) {
        throw new Error(error.message);
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
    getByUserId
};
