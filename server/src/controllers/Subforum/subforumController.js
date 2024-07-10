import subforumModel from "../../models/subforumModel.js";
import userModel from "../../models/userModel.js"; // Importa el modelo de usuario

/**
 * Recupera todos los subforos de la base de datos.
 *
 * @return {Promise<Array<Object>>} Un array de objetos de subforos.
 * @throws {Object} Un objeto con un mensaje de error y un código de estado si hay un error al recuperar los subforos.
 */

const getAll = async () => {
    try {
        const subforums = await subforumModel.find();
        return subforums;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener subforos", status: 500 };
    }
}

/**
 * Recupera un subforo por su ID.
 *
 * @param {string} id - El ID del subforo a recuperar.
 * @return {Promise<Object>} El subforo recuperado.
 */

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

/**
 * Crea un nuevo subforo y lo asocia con el usuario.
 *
 * @param {Object} subforumData - Los datos para el nuevo subforo.
 * @return {Promise<Object>} El subforo creado.
 * @throws {Object} Un objeto de error con un mensaje y un código de estado si hubo un error al crear el subforo.
 */

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

/**
 * Actualiza un subforo basado en el ID y los datos proporcionados.
 *
 * @param {string} id - El ID del subforo a actualizar.
 * @param {Object} data - Los datos para actualizar el subforo.
 * @return {Object} El subforo actualizado o un objeto de error.
 */

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

/**
 * Elimina un subforo por su ID. También elimina el subforo de la lista de subforos de todos los usuarios.
 *
 * @param {string} id - El ID del subforo a eliminar.
 * @return {Promise<Object|{error: string, status: number}>} El subforo eliminado o un objeto de error.
 */

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
