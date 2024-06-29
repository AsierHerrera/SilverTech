import commentController from "./commentController.js";

const getAll = async (req, res) => {
    const comments = await commentController.getAll();
    res.json({ data: comments });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.getById(id);
    res.json({ data: comment });
}

const getByUser = async (req, res) => {
    const userId = req.params.userId;
    const comments = await commentController.getByUser(userId);
    res.json({ data: comments });
}

const create = async (req, res) => {
    const comment = await commentController.create(req.body);
    res.json({ data: comment });
}

const update = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.update(id, req.body);
    res.json({ data: comment });
}

const remove = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.remove(id);
    res.json({ data: comment });
}

export default {
    getAll,
    getById,
    getByUser,
    create,
    update,
    remove
}
