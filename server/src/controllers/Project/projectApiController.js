import projectController from './projectController.js';

/**
 * @module controllers/Project/projectApiController
 */


/**
 * Recupera todos los proyectos y los envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getAll = async (req, res) => {
    try {
        const projects = await projectController.getAll();
        res.json({ data: projects });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Recupera un proyecto por su ID y lo envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID del proyecto.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectController.getById(id);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Crea un nuevo proyecto basado en el cuerpo de la solicitud y el ID del usuario autenticado.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const create = async (req, res) => {
    try {
        const userId = req.user._id; // Asumiendo que obtienes el userId de la autenticación
        console.log("USER ID EN CREATE", userId)
        const project = await projectController.create(req.body, userId);
        res.status(201).json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Actualiza un proyecto basado en el ID proporcionado y los datos del cuerpo de la solicitud.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const update = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectController.update(id, req.body.data);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

/**
 * Elimina un proyecto basado en el ID proporcionado en los parámetros de la solicitud.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await projectController.remove(id);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


/**
 * Agrega un usuario a un proyecto basado en el ID del proyecto y el correo electrónico del usuario proporcionados.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

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


/**
 * Elimina a un usuario de un proyecto por su correo electrónico.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<Object>} El objeto del proyecto actualizado.
 */

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


/**
 * Recupera el proyecto asociado con el ID del usuario.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Object} El proyecto asociado con el ID del usuario.
 */

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
        console.log("USERMAIL", userMail)

        const project = await projectController.inviteUserToProject(projectId, userMail);
        res.json({ data: project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const respondToInvitation = async (req, res) => {
    try {
        const projectId = req.params.id;
        console.log("PROJECTID BACK", projectId)
        const userId = req.user._id; // Asumiendo que obtienes el userId de la autenticación
        console.log("UserID BACK", userId)
        const response = req.body.response;
        console.log("RESPUESTA BACK", response)


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
