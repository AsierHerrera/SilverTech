import commentController from "./commentController.js";

/**
 * @module controllers/Comments/commentApiController
 */


/**
 * Recupera todos los comentarios del commentController y los envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Retorna una promesa que se resuelve cuando se envía la respuesta.
 */

const getAll = async (req, res) => {
    const comments = await commentController.getAll();
    res.json({ data: comments });
}

/**
 * Recupera un comentario por ID del commentController y lo envía como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Retorna una promesa que se resuelve cuando se envía la respuesta.
 */

const getById = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.getById(id);
    res.json({ data: comment });
}

/**
 * Recupera comentarios realizados por un usuario específico.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Retorna una promesa que se resuelve cuando se envía la respuesta.
 */

const getByUser = async (req, res) => {
    const userId = req.params.userId;
    const comments = await commentController.getByUser(userId);
    res.json({ data: comments });
}

/**
 * Crea un nuevo comentario de forma asíncrona.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID del usuario y el ID del foro.
 * @param {Object} res - El objeto de respuesta para enviar el comentario creado.
 * @return {Promise<void>} Una promesa que se resuelve cuando el comentario es creado y enviado como una respuesta JSON.
 */

const create = async (req, res) => {
    const user = req.user._id
    const subFormId = req.params.forumid
    
    const comment = await commentController.create(req.body, subFormId, user);
    res.json({ data: comment });
}

/**
 * Actualiza un comentario basado en el ID proporcionado y el cuerpo de la solicitud.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando el comentario es actualizado y enviado como una respuesta JSON.
 */

const update = async (req, res) => {
    const id = req.params.id;
    const comment = await commentController.update(id, req.body);
    res.json({ data: comment });
}

/**
 * Elimina un comentario por su ID y el ID del usuario.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID del comentario y el ID del usuario.
 * @param {Object} res - El objeto de respuesta para enviar el comentario eliminado.
 * @return {Promise<void>} Una promesa que se resuelve cuando el comentario es eliminado y enviado como una respuesta JSON.
 */

const remove = async (req, res) => {
    const id = req.params.id;
    const userid = req.user._id
    const comment = await commentController.remove(id,userid);
    res.json({ data: comment });
}
/**
 * Recupera comentarios asociados con un ID de foro específico.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID del foro.
 * @param {Object} res - El objeto de respuesta para enviar los comentarios recuperados.
 * @return {Object} Los comentarios recuperados en formato JSON.
 */

const getByForumId = async (req, res) => {
    const forumId = req.params.forumid;
    const comments = await commentController.getByForumId(forumId);
    res.json({ data: comments });
}
/**
 * Da "me gusta" a un comentario por un usuario.
 *
 * @param {Object} req - El objeto de solicitud que contiene el commentId.
 * @param {Object} res - El objeto de respuesta para enviar el resultado.
 * @return {Promise<void>} Una promesa que se resuelve cuando se da "me gusta" al comentario y se envía el resultado como JSON.
 */

const likeComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user._id; 
    const result = await commentController.likeComment(commentId, userId);
    res.json({ data: result });
};

/**
 * Da "no me gusta" a un comentario por un usuario.
 *
 * @param {Object} req - El objeto de solicitud que contiene el commentId.
 * @param {Object} res - El objeto de respuesta para enviar el resultado.
 * @return {Promise<void>} Una promesa que se resuelve cuando se da "no me gusta" al comentario y se envía el resultado como JSON.
 */

const dislikeComment = async (req, res) => {
    const { commentId } = req.params;
    const userId = req.user._id; 
    const result = await commentController.dislikeComment(commentId, userId);
    res.json({ data: result });
};

export default {
    getAll,
    getById,
    getByUser,
    create,
    update,
    remove,
    getByForumId,
    dislikeComment,
    likeComment
}
