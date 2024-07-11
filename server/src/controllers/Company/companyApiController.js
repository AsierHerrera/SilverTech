import companyController from './companyController.js';

/**
 * @module controllers/Company/companyApiController
 */


/**
 * Crea una nueva empresa basada en el cuerpo de la solicitud y el ID del usuario.
 *
 * @param {Object} req - El objeto de solicitud que contiene el cuerpo de la solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar la respuesta.
 * @return {Promise<void>} - Una promesa que se resuelve cuando la empresa es creada y la respuesta es enviada.
 */

const createCompany = async (req, res) => {
    console.log('Datos recibidos:', req.body);
    try {
        const company = await companyController.create(req.body, req.user._id);
        res.status(201).json(company);
    } catch (error) {
        console.error('Error al crear la empresa:', error.message);
        res.status(400).json({ error: error.message });
    }
};
/**
 * Recupera todas las empresas y envía una respuesta JSON con la lista de empresas.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} - Una promesa que se resuelve cuando las empresas son recuperadas y la respuesta es enviada.
 */

const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyController.getAll();
        res.status(200).json(companies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Recupera una empresa por su ID y envía una respuesta JSON con los datos de la empresa.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} - Una promesa que se resuelve cuando los datos de la empresa son recuperados y la respuesta es enviada.
 */

const getCompanyById = async (req, res) => {
    try {
        const company = await companyController.getById(req.params.id);
        if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Actualiza una empresa por su ID con nuevos datos.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID y los datos actualizados.
 * @param {Object} res - El objeto de respuesta utilizado para enviar la empresa actualizada o un mensaje de error.
 * @return {Promise<void>} - Una promesa que se resuelve cuando la empresa es actualizada y la respuesta es enviada.
 */

const updateCompany = async (req, res) => {
    try {
        const company = await companyController.update(req.params.id, req.body);
        if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Elimina una empresa basándose en los objetos de solicitud y respuesta proporcionados.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar mensajes de éxito o de error.
 * @return {Promise<void>} - Una promesa que se resuelve cuando la empresa es eliminada y se envía la respuesta correspondiente.
 */

const deleteCompany = async (req, res) => {
    try {
        const company = await companyController.remove(req.params.id);
        if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
        res.status(200).json({ message: "Empresa eliminada con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

/**
 * Recupera una empresa asociada a un usuario por su ID.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve con el objeto de la empresa o un error.
 */

const getCompanyByUserId = async (req, res) => {
    try {
        const company = await companyController.getByUserId(req.user._id);
        if (!company) {
            return res.status(404).json({ error: "No se encontró la empresa asociada al usuario" });
        }
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
    getCompanyByUserId
};
