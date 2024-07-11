import resourceController from "./resourceController.js";

const getAll = async (req, res) => {
    const resources = await resourceController.getAll();
    res.json( resources );
}

const barraDeBusqueda = async (req, res) => {
    const busquedaData = req.params.busquedaData;
    console.log("BusquedaData received:", busquedaData);
    const { error, data } = await resourceController.barraDeBusqueda(busquedaData);
    console.log("Data to be sent:", { error, data });
    res.json({ error, data });
  };

const getById = async (req, res) => {
    const id = req.params.id;
    const resource = await resourceController.getById(id);
    res.json({ data: resource });
}

const getByUser = async (req, res) => {
    const userId = req.user._id;
    const resources = await resourceController.getByUser(userId);
    res.json(resources);
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
    rejectParticipation,
    barraDeBusqueda
}
