import companyController from './companyController.js';

const createCompany = async (req, res) => {
    try {
        const company = await companyController.create(req.body, req.user._id);
        res.status(201).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getAllCompanies = async (req, res) => {
    try {
        const companies = await companyController.getAll();
        res.status(200).json(companies);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCompanyById = async (req, res) => {
    try {
        const company = await companyController.getById(req.params.id);
        if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateCompany = async (req, res) => {
    try {
        const company = await companyController.update(req.params.id, req.body);
        if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
        res.status(200).json(company);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCompany = async (req, res) => {
    try {
        const company = await companyController.remove(req.params.id);
        if (!company) return res.status(404).json({ error: "Empresa no encontrada" });
        res.status(200).json({ message: "Empresa eliminada con éxito" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export default {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany
};
