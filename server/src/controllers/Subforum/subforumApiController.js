import subforumController from "./subforumController.js"

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
    const user = req.user;
    const { title } = req.body;  // Extraer directamente el título del cuerpo de la solicitud
    const subforumData = {
        user,
        title
    };
    const subforum = await subforumController.create(subforumData);
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
