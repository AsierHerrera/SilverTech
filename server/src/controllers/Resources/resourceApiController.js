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
    const resource = await resourceController.create(req.body);
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

export default {
    getAll,
    getById,
    getByUser,
    create,
    update,
    remove
}
