import resourceController from "./resourceController.js";
/**
 * @module controllers/Resources/resourceApiController
 */

/**
 * Recupera todos los recursos del resourceController y los envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getAll = async (req, res) => {
    const resources = await resourceController.getAll();
    res.json({ data: resources });
}

/**
 * Recupera datos del resourceController basándose en la consulta de búsqueda y los envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const barraDeBusqueda = async(req,res)=>{
    const busquedaData = req.params.busquedaData
    console.log("BusquedaData es:",busquedaData)
    const {error,data} = await resourceController.barraDeBusqueda(busquedaData);
    res.json({error,data});
}

/**
 * Recupera un recurso por su ID y lo envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getById = async (req, res) => {
    const id = req.params.id;
    const resource = await resourceController.getById(id);
    res.json({ data: resource });
}

/**
 * Recupera recursos por ID de usuario y los envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getByUser = async (req, res) => {
    const userId = req.params.userId;
    const resources = await resourceController.getByUser(userId);
    res.json({ data: resources });
}

/**
 * Crea un nuevo recurso para un usuario.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando el recurso es creado y se envía la respuesta.
 */

const create = async (req, res) => {
    const userId = req.user.id; // Se asume que tienes el usuario en el token JWT
    const resource = await resourceController.create(req.body, userId);
    res.json({ data: resource });
}

/**
 * Actualiza un recurso basado en el ID proporcionado y los datos del cuerpo de la solicitud.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando el recurso es actualizado y se envía la respuesta.
 */

const update = async (req, res) => {
    const id = req.params.id;
    const resource = await resourceController.update(id, req.body);
    res.json({ data: resource });
}

/**
 * Elimina un recurso basado en el ID proporcionado.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando el recurso es eliminado y se envía la respuesta.
 */

const remove = async (req, res) => {
    const id = req.params.id;
    const resource = await resourceController.remove(id);
    res.json({ data: resource });
}

/**
 * Solicita participación en un recurso para un usuario dado.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se realiza la solicitud de participación y se envía la respuesta.
 */

const requestParticipation = async (req, res) => {
    const { resourceId, userId } = req.params;
    const result = await resourceController.requestParticipation(resourceId, userId);
    res.json({ data: result });
}

/**
 * Acepta la solicitud de participación de un usuario para un recurso específico.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se acepta la solicitud de participación y se envía la respuesta.
 */

const acceptParticipation = async (req, res) => {
    const { resourceId, userId } = req.params;
    const result = await resourceController.acceptParticipation(resourceId, userId);
    res.json({ data: result });
}

/**
 * Rechaza la participación en un recurso para un usuario dado.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se rechaza la participación y se envía la respuesta.
 */

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
