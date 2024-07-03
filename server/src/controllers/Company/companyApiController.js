import companyController from './companyController.js';

const getAll = async (req, res) => {
    const companies = await companyController.getAll();
    res.json({ data: companies });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const company = await companyController.getById(id);
    res.json({ data: company });
}

const create = async (req, res) => {
    const company = await companyController.create(req.body);
    res.json({ data: company });
}

const update = async (req, res) => {
    const id = req.params.id;
    const company = await companyController.update(id, req.body);
    res.json({ data: company });
}

const remove = async (req, res) => {
    const id = req.params.id;
    const company = await companyController.remove(id);
    res.json({ data: company });
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}
