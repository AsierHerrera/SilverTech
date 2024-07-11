import projectController from './projectController.js';

const getAll = async (req, res) => {
    try {
        const projects = await projectController.getAll();
        res.json({ data: projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectController.getById(id);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const create = async (req, res) => {
    try {
        const userId = req.user._id; // Asumiendo que obtienes el userId de la autenticación
        //console.log("USER ID EN CREATE", userId)
        const project = await projectController.create(req.body, userId);
        res.status(201).json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectController.update(id, req.body.data);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectController.remove(id);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addUserToProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const userEmail = req.body.email;

        const project = await projectController.addUserToProject(projectId, userEmail);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const removeUserFromProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const userEmail = req.body.email;

        const project = await projectController.removeUserFromProject(projectId, userEmail);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProjectByUserId = async (req, res) => {
    try {
        const projects = await projectController.getByUserId(req.user._id);
        res.status(200).json(  projects );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const inviteUserToProject = async (req, res) => {
    try {
        const projectId = req.params.id;
        const userMail = req.body.email;
        //console.log("USERMAIL", userMail)

        const project = await projectController.inviteUserToProject(projectId, userMail);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const respondToInvitation = async (req, res) => {
    try {
        const projectId = req.params.id;
        //console.log("PROJECTID BACK", projectId)
        const userId = req.user._id; // Asumiendo que obtienes el userId de la autenticación
        //console.log("UserID BACK", userId)
        const response = req.body.response;
        //console.log("RESPUESTA BACK", response)


        const project = await projectController.respondToInvitation(projectId, userId, response);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserInvitations = async (req, res) => {
    try {
        const userId = req.user._id; // Asumiendo que obtienes el userId de la autenticación
        const invitations = await projectController.getUserInvitations(userId);
        res.json({ data: invitations });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    addUserToProject,
    removeUserFromProject,
    getProjectByUserId,
    inviteUserToProject,
    respondToInvitation,
    getUserInvitations
};
