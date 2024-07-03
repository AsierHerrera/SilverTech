import Company from '../../models/companyModel.js';
import User from '../../models/userModel.js';

const getAll = async () => {
    try {
        const companies = await Company.find().populate('users');
        return companies;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener empresas", status: 500 };
    }
}

const getById = async (id) => {
    try {
        const company = await Company.findById(id).populate('users');
        if (!company) {
            return { error: "Empresa no encontrada", status: 404 };
        }
        return company;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener empresa", status: 500 };
    }
}

const create = async (data) => {
    try {
        const company = await Company.create(data);
        return company;
    } catch (error) {
        console.error(error);
        return { error: "Error al crear empresa", status: 500 };
    }
}

const update = async (id, data) => {
    try {
        const company = await Company.findByIdAndUpdate(id, data, { new: true });
        if (!company) {
            return { error: "Empresa no encontrada", status: 404 };
        }
        return company;
    } catch (error) {
        console.error(error);
        return { error: "Error al actualizar empresa", status: 500 };
    }
}

const remove = async (id) => {
    try {
        const company = await Company.findByIdAndDelete(id);
        if (!company) {
            return { error: "Empresa no encontrada", status: 404 };
        }

        // Actualizar usuarios que pertenecen a esta empresa
        await User.updateMany(
            { company: id },
            { $unset: { company: "" } }
        );

        return company;
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar empresa", status: 500 };
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}
