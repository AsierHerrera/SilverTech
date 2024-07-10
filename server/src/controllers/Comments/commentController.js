import commentModel from "../../models/commentModel.js";
import subforumModel from "../../models/subforumModel.js";
import userModel from "../../models/userModel.js"; // Importa el modelo de usuario

/**
 * Recupera todos los comentarios de la base de datos.
 *
 * @return {Promise<Array<Object>>} Un array de objetos de comentarios.
 * @throws {Object} Un objeto de error con el mensaje "Error al obtener comentarios" y el código de estado 500 si hay un error al recuperar los comentarios.
 */
const getAll = async () => {
    try {
        const comments = await commentModel.find();
        return comments;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener comentarios", status: 500 };
    }
}

/**
 * Recupera un comentario por su ID.
 *
 * @param {string} id - El ID del comentario a recuperar.
 * @return {Promise<Object>} El objeto del comentario recuperado.
 */
const getById = async (id) => {
    try {
        const comment = await commentModel.findById(id);
        if (!comment) {
            return { error: "Comentario no encontrado", status: 404 };
        }
        return comment;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener comentario", status: 500 };
    }
}

/**
 * Recupera todos los comentarios realizados por un usuario específico.
 *
 * @param {string} userId - El ID del usuario cuyos comentarios se están recuperando.
 * @return {Promise<Array<Object>>} Un array de objetos de comentarios realizados por el usuario especificado.
 * @throws {Object} Un objeto de error con el mensaje "Error al obtener comentarios por usuario" y el código de estado 500 si hay un error al recuperar los comentarios.
 */
const getByUser = async (userId) => {
    try {
        const comments = await commentModel.find({ user: userId });
        return comments;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener comentarios por usuario", status: 500 };
    }
}

/**
 * Crea de forma asíncrona un nuevo comentario asociado a un subforo.
 *
 * @param {Object} data - Los datos para el nuevo comentario.
 * @param {string} subforumId - El ID del subforo con el que se asociará el comentario.
 * @param {Object} user - El usuario que crea el comentario.
 * @return {Promise<Object>} El comentario recién creado.
 */
const create = async (data, subforumId, user) => {
    try {
        const subforum = await subforumModel.findById(subforumId); // Busca el subforo por ID
        if (!subforum) {
            return { error: "Subforo no encontrado", status: 404 };
        }
        data.user = user
        data.subforum = subforum._id; // Asocia el comentario al subforo
        const comment = await commentModel.create(data);

        await userModel.findByIdAndUpdate(user, { $push: { comments: comment._id } });
        await subforumModel.findByIdAndUpdate(subforumId, { $push: { comments: comment._id } });
        return comment;
    } catch (error) {
        console.error(error);
        return { error: "Error al crear el comentario", status: 500 };
    }
}



/**
 * Actualiza un comentario por su ID con nuevos datos.
 *
 * @param {string} id - El ID del comentario a actualizar.
 * @param {Object} data - Los nuevos datos para actualizar el comentario.
 * @return {Object} El comentario actualizado o un objeto de error.
 */
const update = async (id, data) => {
    try {
        const comment = await commentModel.findByIdAndUpdate(id, data, { new: true });
        if (!comment) {
            return { error: "Comentario no encontrado", status: 404 };
        }
        return comment;
    } catch (error) {
        console.error(error);
        return { error: "Error al actualizar el comentario", status: 500 };
    }
}

/**
 * Elimina un comentario basado en el ID proporcionado y el ID del usuario después de verificar los permisos.
 *
 * @param {string} id - El ID del comentario a eliminar.
 * @param {string} userId - El ID del usuario que intenta eliminar el comentario.
 * @return {Object} Un objeto que indica el éxito o el fracaso de la operación de eliminación.
 */

const remove = async (id, userId) => {
    try {
        const comment = await commentModel.findById(id).populate('user');
        if (!comment) {
            return { error: "Comentario no encontrado", status: 404 };
        }

        // Verificar si el usuario es el autor del comentario o un administrador
        if (comment.user._id.toString() !== userId) {
            const user = await userModel.findById(userId);
            if (!user || user.role !== 'admin') {
                return { error: "No tienes permisos para eliminar este comentario", status: 403 };
            }
        }

        await commentModel.findByIdAndDelete(id);
        return { message: "Comentario eliminado con éxito" };
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar el comentario", status: 500 };
    }
};

/**
 * Recupera los comentarios asociados con un ID de foro dado.
 *
 * @param {string} forumId - El ID del foro.
 * @return {Promise<Array<Object>>} Una promesa que se resuelve en un array de objetos de comentarios.
 */

const getByForumId = async (forumId) => {
    return await commentModel.find({ subforum: forumId }).populate('user').exec();
}

/**
 * Da "like" a un comentario actualizando el documento del comentario en la base de datos.
 *
 * @param {string} commentId - El ID del comentario al que se le va a dar "like".
 * @param {string} userId - El ID del usuario que da "like" al comentario.
 * @return {Promise<Object|{error: string, status: number}>} El documento del comentario actualizado o un objeto de error.
 */

const likeComment = async (commentId, userId) => {
    try {
        const comment = await commentModel.findById(commentId);
        if (!comment) {
            return { error: "Comment not found", status: 404 };
        }

        if (comment.likes.includes(userId)) {
            return { error: "You have already liked this comment", status: 400 };
        }

        if (comment.dislikes.includes(userId)) {
            comment.dislikes.pull(userId);
        }

        comment.likes.push(userId);
        comment.likesCount = comment.likes.length;
        comment.dislikesCount = comment.dislikes.length;

        await comment.save();
        return comment;
    } catch (error) {
        console.error(error);
        return { error: "Error liking the comment", status: 500 };
    }
};

/**
 * Da "dislike" a un comentario por un usuario y actualiza el conteo de "dislike" del comentario.
 *
 * @param {string} commentId - El ID del comentario al que se le va a dar "dislike".
 * @param {string} userId - El ID del usuario que da "dislike" al comentario.
 * @return {Promise<Object>} El comentario actualizado después de dar "dislike" o un objeto de error.
 */

const dislikeComment = async (commentId, userId) => {
    try {
        const comment = await commentModel.findById(commentId);
        if (!comment) {
            return { error: "Comment not found", status: 404 };
        }

        if (comment.dislikes.includes(userId)) {
            return { error: "You have already disliked this comment", status: 400 };
        }

        if (comment.likes.includes(userId)) {
            comment.likes.pull(userId);
        }

        comment.dislikes.push(userId);
        comment.likesCount = comment.likes.length;
        comment.dislikesCount = comment.dislikes.length;

        await comment.save();
        return comment;
    } catch (error) {
        console.error(error);
        return { error: "Error disliking the comment", status: 500 };
    }
};


export default {
    getAll,
    getById,
    getByUser,
    create,
    update,
    remove,
    getByForumId,
    likeComment,
    dislikeComment
}
