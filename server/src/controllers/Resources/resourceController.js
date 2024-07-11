import resourceModel from "../../models/resourceModel.js";
import userModel from "../../models/userModel.js";
import subforumModel from "../../models/subforumModel.js";

/**
 * @module controllers/Resources/resourceController
 */


/**
 * Recupera todos los recursos de la base de datos.
 *
 * @return {Promise<Array<Object>>} Un array de objetos de recursos.
 * @throws {Object} Un objeto con el mensaje de error "Error al obtener recursos" y el código de estado 500 si hay un error al recuperar los recursos.
 */

const getAll = async () => {
    try {
        const resources = await resourceModel.find();
        return resources;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener recursos", status: 500 };
    }
}

/**
 * Busca de forma asíncrona subforos y recursos basándose en los datos de búsqueda proporcionados.
 *
 * @param {string} busquedaData - Los datos de búsqueda para buscar en subforos y recursos.
 * @return {Promise<Object>} Un objeto que contiene los subforos y recursos encontrados.
 */

async function barraDeBusqueda(busquedaData) {
    try {
        if (busquedaData.length > 2) {
            const subforos = await subforumModel.find({
                $or: [
                    { name: { $regex: busquedaData, $options: 'i' } },
                    { description: { $regex: busquedaData, $options: 'i' } }
                ]
            });

            const recursos = await resourceModel.find({
                $or: [
                    { name: { $regex: busquedaData, $options: 'i' } },
                    { description: { $regex: busquedaData, $options: 'i' } },
                    { resourceType: { $regex: busquedaData, $options: 'i' } }
                ]
            });

            console.log("SUBFOROS ENCONTRADOS:", subforos);
            console.log("RECURSOS ENCONTRADOS:", recursos);

            return { data: { subforos, recursos } };
        } else {
            return { data: [], message: 'La búsqueda debe tener más de 3 caracteres' };
        }
    } catch (error) {
        console.error("Error al buscar subforos y recursos:", error);
        return { error: error.message };
    }
}

/**
 * Recupera un recurso por su ID.
 *
 * @param {string} id - El ID del recurso a recuperar.
 * @return {Object} El recurso recuperado o un objeto de error.
 */

const getById = async (id) => {
    try {
        const resource = await resourceModel.findById(id);
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }
        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener recurso", status: 500 };
    }
}

/**
 * Recupera todos los recursos asociados con un usuario dado.
 *
 * @param {string} userId - El ID del usuario.
 * @return {Promise<Array<Object>>} Una promesa que se resuelve en un array de objetos de recursos.
 * @throws {Error} Si hay un error al recuperar los recursos.
 */

const getByUser = async (userId) => {
    try {
        const resources = await resourceModel.find({ "participations.user": userId });
        console.log("RECURSOS POR USUARIO", resources)
        return resources;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener recursos por usuario", status: 500 };
    }
}

/**
 * Crea un nuevo recurso y lo asocia con el usuario especificado.
 *
 * @param {Object} data - Los datos para el nuevo recurso.
 * @param {string} userId - El ID del usuario.
 * @return {Promise<Object>} Una promesa que se resuelve con el recurso creado.
 */

const create = async (data, userId) => {
    try {
        const resource = await resourceModel.create(data);
        
        // Asociar el recurso al usuario
        await userModel.findByIdAndUpdate(
            userId,
            { $push: { resources: resource._id } },
            { new: true }
        );

        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al crear el recurso", status: 500 };
    }
}

/**
 * Actualiza un recurso por su ID con nuevos datos.
 *
 * @param {string} id - El ID del recurso a actualizar.
 * @param {Object} data - Los nuevos datos para actualizar el recurso.
 * @return {Promise<Object>} El recurso actualizado o un objeto de error.
 */

const update = async (id, data) => {
    try {
        const resource = await resourceModel.findByIdAndUpdate(id, data, { new: true });
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }
        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al actualizar el recurso", status: 500 };
    }
}

/**
 * Elimina un recurso de forma asíncrona por su ID.
 *
 * @param {string} id - El ID del recurso a eliminar.
 * @return {Promise<Object>} El recurso eliminado o un objeto de error.
 */

const remove = async (id) => {
    try {
        const resource = await resourceModel.findByIdAndDelete(id);
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }

        // Eliminar referencia del recurso en todos los usuarios
        await userModel.updateMany(
            { "resources": id },
            { $pull: { resources: id } }
        );

        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar el recurso", status: 500 };
    }
}

/**
 * Solicita participación de un usuario en un recurso específico.
 *
 * @param {string} resourceId - El ID del recurso para la participación.
 * @param {string} userId - El ID del usuario que solicita la participación.
 * @return {Promise<object>} El recurso actualizado con los detalles de la participación.
 */

const requestParticipation = async (resourceId, userId) => {
    try {
        const resource = await resourceModel.findById(resourceId);
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }

        // Verificar si el usuario ya solicitó participar
        const existingParticipation = resource.participations.find(participation =>
            participation.user.toString() === userId && participation.status !== "rejected"
        );

        if (existingParticipation) {
            return { error: "Ya has solicitado participar en este recurso", status: 400 };
        }

        // Crear una nueva solicitud de participación
        resource.participations.push({ user: userId, status: "pending" });
        await resource.save();

        // Registrar la acción en el usuario
        await userModel.findByIdAndUpdate(
            userId,
            { $push: { participations: { resource: resourceId, status: "pending" } } },
            { new: true }
        );

        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al solicitar participación en el recurso", status: 500 };
    }
}

/**
 * Acepta la solicitud de participación de un usuario en un recurso específico.
 *
 * @param {string} resourceId - El ID del recurso para la participación.
 * @param {string} userId - El ID del usuario que solicita la participación.
 * @return {Promise<object>} El recurso con los detalles de participación actualizados.
 */

const acceptParticipation = async (resourceId, userId) => {
    try {
        const resource = await resourceModel.findById(resourceId);
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }

        // Encontrar la solicitud de participación del usuario
        const participation = resource.participations.find(participation =>
            participation.user.toString() === userId
        );

        if (!participation) {
            return { error: "No se encontró solicitud de participación pendiente para este usuario", status: 404 };
        }

        // Actualizar el estado de la participación a aceptado
        participation.status = "accepted";
        await resource.save();

        // Registrar la acción en el usuario
        await userModel.findOneAndUpdate(
            { _id: userId, "participations.resource": resourceId },
            { $set: { "participations.$.status": "accepted", "participations.$.actionDate": new Date() } },
            { new: true }
        );

        // Asociar el recurso al usuario
        await userModel.findByIdAndUpdate(
            userId,
            { $push: { resources: resourceId } },
            { new: true }
        );

        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al aceptar la participación en el recurso", status: 500 };
    }
}

/**
 * Una función que rechaza la participación de un usuario en un recurso.
 *
 * @param {string} resourceId - El ID del recurso para el rechazo de la participación.
 * @param {string} userId - El ID del usuario cuya participación está siendo rechazada.
 * @return {Promise<object>} El recurso actualizado con los detalles de la participación.
 */

const rejectParticipation = async (resourceId, userId) => {
    try {
        const resource = await resourceModel.findById(resourceId);
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }

        // Encontrar la solicitud de participación del usuario
        const participation = resource.participations.find(participation =>
            participation.user.toString() === userId
        );

        if (!participation) {
            return { error: "No se encontró solicitud de participación pendiente para este usuario", status: 404 };
        }

        // Actualizar el estado de la participación a rechazado
        participation.status = "rejected";
        await resource.save();

        // Registrar la acción en el usuario
        await userModel.findOneAndUpdate(
            { _id: userId, "participations.resource": resourceId },
            { $set: { "participations.$.status": "rejected", "participations.$.actionDate": new Date() } },
            { new: true }
        );

        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al rechazar la participación en el recurso", status: 500 };
    }
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
