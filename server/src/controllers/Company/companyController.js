import Company from '../../models/companyModel.js';
import User from '../../models/userModel.js';

// Crear una nueva empresa
const create = async (data, userId) => {
    const { name, cif, address, postalCode, website, phone, sector, description, imageUrl } = data;

    try {
        const newCompany = new Company({
            name,
            cif,
            address,
            postalCode,
            website,
            phone,
            sector,
            description,
            imageUrl,
            userId
        });

        const savedCompany = await newCompany.save();

        // Asociar la empresa al usuario
        await User.findByIdAndUpdate(userId, { company: savedCompany._id });

        return savedCompany;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener todas las empresas
const getAll = async () => {
    try {
        return await Company.find().populate('userId', 'username email');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Obtener una empresa por ID
const getById = async (id) => {
    try {
        return await Company.findById(id).populate('userId', 'username email');
    } catch (error) {
        throw new Error(error.message);
    }
};

// Actualizar una empresa
const update = async (id, data) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(
            id,
            data,
            { new: true, runValidators: true }
        ).populate('userId', 'username email');

        if (!updatedCompany) throw new Error("Empresa no encontrada");

        return updatedCompany;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Eliminar una empresa
const remove = async (id) => {
    try {
        const company = await Company.findById(id);
        if (!company) throw new Error("Empresa no encontrada");

        // Desasociar la empresa del usuario
        await User.findByIdAndUpdate(company.userId, { company: null });

        const deletedCompany = await Company.findByIdAndDelete(id);

        return deletedCompany;
    } catch (error) {
        throw new Error(error.message);
    }
};

export default {
    create,
    getAll,
    getById,
    update,
    remove
};
