import Company from '../../models/companyModel.js';
import User from '../../models/userModel.js';



/**
 * Crea una nueva empresa con los datos proporcionados y la asocia con el usuario.
 *
 * @param {Object} data - Datos para la nueva empresa que incluyen nombre, CIF, dirección, código postal, sitio web, teléfono, sector, descripción, URL de imagen.
 * @param {string} userId - El ID del usuario asociado con la empresa.
 * @return {Promise} El objeto de la empresa guardada.
 */

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


/**
 * Recupera todas las empresas con la información de usuario poblada.
 *
 * @return {Promise} Array de empresas con los campos de usuario poblados (nombre de usuario, correo electrónico).
 */

const getAll = async () => {
    try {
        return await Company.find().populate('userId', 'username email');
    } catch (error) {
        throw new Error(error.message);
    }
};


/**
 * Recupera una empresa por su ID con la información de usuario poblada (nombre de usuario, correo electrónico).
 *
 * @param {string} id - El ID de la empresa que se desea recuperar.
 * @return {Promise} El objeto de la empresa con los campos de usuario poblados.
 */

const getById = async (id) => {
    try {
        return await Company.findById(id).populate('userId', 'username email');
    } catch (error) {
        throw new Error(error.message);
    }
};


/**
 * Actualiza una empresa por su ID con los datos proporcionados.
 *
 * @param {string} id - El ID de la empresa que se desea actualizar.
 * @param {Object} data - Los datos con los que se desea actualizar la empresa.
 * @return {Promise<Object>} El objeto de la empresa actualizado con el campo userId poblado.
 * @throws {Error} Si no se encuentra la empresa.
 */

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


/**
 * Elimina una empresa por su ID.
 *
 * @param {string} id - El ID de la empresa que se desea eliminar.
 * @return {Promise<Object>} La empresa eliminada.
 */
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

/**
 * Recupera una empresa por el ID de usuario.
 *
 * @param {string} userId - El ID del usuario.
 * @return {Promise<Object>} El objeto de la empresa con los detalles del usuario poblados.
 */

const getByUserId = async (userId) => {
    try {
        return await Company.findOne({ userId }).populate('userId', 'username email');
    } catch (error) {
        throw new Error(error.message);
    }
};

export default{
    create,
    getAll,
    getById,
    update,
    remove,
    getByUserId
};