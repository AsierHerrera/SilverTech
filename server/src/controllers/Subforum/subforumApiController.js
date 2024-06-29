import subforumController from "./subforumController.js";

const getAll = async (req, res) => {
    const subforums = await subforumController.getAll();
    res.json({ data: subforums });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const subforum = await subforumController.getById(id);
    res.json({ data: subforum });
}

const create = async (req, res) => {
    const subforum = await subforumController.create(req.body);
    res.json({ data: subforum });
}

const update = async (req, res) => {
    const id = req.params.id;
    const subforum = await subforumController.update(id, req.body);
    res.json({ data: subforum });
}

const remove = async (req, res) => {
    const id = req.params.id;
    const subforum = await subforumController.remove(id);
    res.json({ data: subforum });
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}
