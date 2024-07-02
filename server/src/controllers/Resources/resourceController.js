import resourceModel from "../../models/resourceModel.js";
import userModel from "../../models/userModel.js";

const getAll = async () => {
    try {
        const resources = await resourceModel.find();
        return resources;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener recursos", status: 500 };
    }
}

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

const getByUser = async (userId) => {
    try {
        const resources = await resourceModel.find({ "users.user": userId });
        return resources;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener recursos por usuario", status: 500 };
    }
}

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

const acceptParticipation = async (resourceId, userId) => {
    try {
        const resource = await resourceModel.findById(resourceId);
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }

        // Encontrar la solicitud de participación del usuario
        const participation = resource.participations.find(participation =>
            participation.user.toString() === userId && participation.status === "pending"
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

const rejectParticipation = async (resourceId, userId) => {
    try {
        const resource = await resourceModel.findById(resourceId);
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }

        // Encontrar la solicitud de participación del usuario
        const participation = resource.participations.find(participation =>
            participation.user.toString() === userId && participation.status === "pending"
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
    rejectParticipation
}
