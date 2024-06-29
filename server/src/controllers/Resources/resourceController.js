import resourceModel from "../../models/resourceModel.js";

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
        const resources = await resourceModel.find({ user: userId });
        return resources;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener recursos por usuario", status: 500 };
    }
}

const create = async (data) => {
    try {
        const resource = await resourceModel.create(data);
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
        return resource;
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar el recurso", status: 500 };
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
