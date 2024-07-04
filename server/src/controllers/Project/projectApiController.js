// projectApiController.js

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
        const project = await projectController.create(req.body.data, userId);
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

// Añadir usuario a un proyecto por correo electrónico
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

// Eliminar usuario de un proyecto por correo electrónico
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

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    addUserToProject,
    removeUserFromProject
};
