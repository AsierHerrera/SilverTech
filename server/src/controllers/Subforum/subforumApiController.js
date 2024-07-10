import subforumController from "./subforumController.js"

/**
 * @module controllers/Subforum/subforumApiController
 */

/**
 * Recupera todos los subforos.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Object} La lista de todos los subforos.
 */

const getAll = async (req, res) => {
    const subforums = await subforumController.getAll();
    res.json({ data: subforums });
}

/**
 * Recupera un subforo por su ID.
 *
 * @param {Object} req - El objeto de solicitud que contiene el parámetro ID.
 * @param {Object} res - El objeto de respuesta para enviar los datos del subforo.
 * @return {Object} Los datos del subforo recuperados por ID.
 */

const getById = async (req, res) => {
    const id = req.params.id;
    const subforum = await subforumController.getById(id);
    res.json({ data: subforum });
}

/**
 * Crea un nuevo subforo con el título y texto dados, asociado con el usuario actual.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID del usuario y los datos del subforo.
 * @param {Object} res - El objeto de respuesta para enviar los datos del subforo creado.
 * @return {Promise<void>} - Una promesa que se resuelve cuando el subforo es creado y se envía la respuesta.
 */

const create = async (req, res) => {
    const user = req.user._id;
    const { title, text } = req.body;  // Extraer directamente el título del cuerpo de la solicitud
    const subforumData = {
        user,
        title,
        text
    };
    const subforum = await subforumController.create(subforumData);
    res.json({ data: subforum });
}

/**
 * Actualiza un subforo con el ID proporcionado usando los datos del cuerpo de la solicitud.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID y los datos actualizados del subforo.
 * @param {Object} res - El objeto de respuesta para enviar los datos del subforo actualizado.
 * @return {Promise<void>} - Una promesa que se resuelve cuando el subforo es actualizado y se envía la respuesta.
 */

const update = async (req, res) => {
    const id = req.params.id;
    const subforum = await subforumController.update(id, req.body);
    res.json({ data: subforum });
}

/**
 * Elimina un subforo con el ID especificado y devuelve el subforo eliminado como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID del subforo a eliminar.
 * @param {Object} res - El objeto de respuesta utilizado para enviar el subforo eliminado como una respuesta JSON.
 * @return {Promise<void>} - Una promesa que se resuelve cuando el subforo es eliminado y se envía la respuesta.
 */

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
