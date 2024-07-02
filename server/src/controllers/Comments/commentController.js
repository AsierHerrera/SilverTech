import commentModel from "../../models/commentModel.js";
import subforumModel from "../../models/subforumModel.js";
import userModel from "../../models/userModel.js"; // Importa el modelo de usuario

const getAll = async () => {
    try {
        const comments = await commentModel.find();
        return comments;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener comentarios", status: 500 };
    }
}

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

const getByUser = async (userId) => {
    try {
        const comments = await commentModel.find({ user: userId });
        return comments;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener comentarios por usuario", status: 500 };
    }
}

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

        return comment;
    } catch (error) {
        console.error(error);
        return { error: "Error al crear el comentario", status: 500 };
    }
}

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

const remove = async (id) => {
    try {
        const comment = await commentModel.findByIdAndDelete(id);
        if (!comment) {
            return { error: "Comentario no encontrado", status: 404 };
        }
        return comment;
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar el comentario", status: 500 };
    }
}

export default {
    getAll,
    getById,
    getByUser,
    create,
    update,
    remove
}
