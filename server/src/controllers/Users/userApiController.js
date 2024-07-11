import userController from "./userController.js";

const getAll = async (req, res) => {
    const users = await userController.getAll();
    res.json({ data: users });
}

const getById = async (req, res) => {
    const id = req.params.id;
    const user = await userController.getById(id);
    res.json({ data: user });
}

const getByProperty = async (req, res) => {
    const { property, value } = req.query;
    const users = await userController.getByProperty(property, value);
    res.json({ data: users });
}

const getByToken = async (req,res) =>{
    const id = req.user._id;
    const user = await userController.getById(id);
    res.json({data:user});
}

const getByResource = async (req, res) => {
    const resourceId = req.params.resourceId;
    const users = await userController.getByResource(resourceId);
    res.json({ data: users });
}

const register = async (req, res) => {
    const user = await userController.register(req.body);
    if (user.error) {
        return res.json({ error: user.error });
    }
    //console.log("USER EN API CONTROLLER", user);
    res.json({ data: user });
}

const login = async (req, res) => {
    const data = await userController.login(req.body);
    if (data.error) {
        return res.status(data.status).json({ error: data.error });
    }
    res.json({ token: data.token, user: data.user._id, username: data.user.username });
}

const create = async (req, res) => {
    const user = await userController.create(req.body);
    res.json({ data: user });
}

const update = async (req, res) => {
    const id = req.params.id;
    const user = await userController.update(id, req.body);
    res.json({ data: user });
}

const remove = async (req, res) => {
    const id = req.params.id;
    const user = await userController.remove(id);
    res.json({ data: user });
}

async function logout(req, res) {
    req.user = null;
    //console.log("req.user", req.user);
    res.json(req.user);
}

export default {
    getAll,
    getById,
    getByProperty,
    getByToken,
    getByResource,
    login,
    register,
    create,
    update,
    logout,
    remove
}
