import resourceController from "./resourceController.js";

const getAll = async (req, res) => {
    const resources = await resourceController.getAll();
    res.json({ data: resources });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const resource = await resourceController.getById(id);
    res.json({ data: resource });
}

const getByUser = async (req, res) => {
    const userId = req.params.userId;
    const resources = await resourceController.getByUser(userId);
    res.json({ data: resources });
}

const create = async (req, res) => {
    const userId = req.user.id; // Se asume que tienes el usuario en el token JWT
    const resource = await resourceController.create(req.body, userId);
    res.json({ data: resource });
}

const update = async (req, res) => {
    const id = req.params.id;
    const resource = await resourceController.update(id, req.body);
    res.json({ data: resource });
}

const remove = async (req, res) => {
    const id = req.params.id;
    const resource = await resourceController.remove(id);
    res.json({ data: resource });
}

const requestParticipation = async (req, res) => {
    const { resourceId, userId } = req.params;
    const result = await resourceController.requestParticipation(resourceId, userId);
    res.json({ data: result });
}

const acceptParticipation = async (req, res) => {
    const { resourceId, userId } = req.params;
    const result = await resourceController.acceptParticipation(resourceId, userId);
    res.json({ data: result });
}

const rejectParticipation = async (req, res) => {
    const { resourceId, userId } = req.params;
    const result = await resourceController.rejectParticipation(resourceId, userId);
    res.json({ data: result });
}

export default {
    getAll,
    getById,
    getByUser,
    create,
    update,
    remove,
    requestParticipation,
    acceptParticipation,
    rejectParticipation
}
