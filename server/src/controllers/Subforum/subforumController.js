import subforumModel from "../../models/subforumModel.js";
import userModel from "../../models/userModel.js"; // Importa el modelo de usuario

const getAll = async () => {
    try {
        const subforums = await subforumModel.find();
        return subforums;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener subforos", status: 500 };
    }
}

const getById = async (id) => {
    try {
        const subforum = await subforumModel.findById(id);
        if (!subforum) {
            return { error: "Subforo no encontrado", status: 404 };
        }
        return subforum;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener subforo", status: 500 };
    }
}

const create = async (subforumData) => {
    try {
        const subforum = await subforumModel.create(subforumData);
        const userId = subforumData.user;

        // Agregar el ID del subforo creado a la lista de subforos del usuario
        await userModel.findByIdAndUpdate(userId, { $push: { subforums: subforum._id } });

        return subforum;
    } catch (error) {
        console.error(error);
        return { error: "Error al crear el subforo", status: 500 };
    }
}

const update = async (id, data) => {
    try {
        const subforum = await subforumModel.findByIdAndUpdate(id, data, { new: true });
        if (!subforum) {
            return { error: "Subforo no encontrado", status: 404 };
        }
        return subforum;
    } catch (error) {
        console.error(error);
        return { error: "Error al actualizar el subforo", status: 500 };
    }
}

const remove = async (id) => {
    try {
        const subforum = await subforumModel.findByIdAndDelete(id);
        if (!subforum) {
            return { error: "Subforo no encontrado", status: 404 };
        }

        // También debes quitar el subforo de la lista de subforos del usuario
        await userModel.updateMany({}, { $pull: { subforums: id } });

        return subforum;
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar el subforo", status: 500 };
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}
