import userController from "./userController.js";

/**
 * Recupera todos los usuarios usando el userController y responde con un array JSON de usuarios.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Retorna una promesa que se resuelve cuando se envía la respuesta.
 */

const getAll = async (req, res) => {
    const users = await userController.getAll();
    res.json({ data: users });
}

/**
 * Recupera un usuario por su ID usando el userController y responde con un array JSON de usuarios.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getById = async (req, res) => {
    const id = req.params.id;
    const user = await userController.getById(id);
    res.json({ data: user });
}

/**
 * Recupera usuarios por una propiedad y valor dados usando el userController y responde con un array JSON de usuarios.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getByProperty = async (req, res) => {
    const { property, value } = req.query;
    const users = await userController.getByProperty(property, value);
    res.json({ data: users });
}

/**
 * Recupera un usuario por el ID del token usando el userController y responde con los datos del usuario en formato JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getByToken = async (req,res) =>{
    const id = req.user._id;
    const user = await userController.getById(id);
    res.json({data:user});
}

/**
 * Recupera usuarios por ID de recurso usando el userController y responde con un array JSON de usuarios.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

const getByResource = async (req, res) => {
    const resourceId = req.params.resourceId;
    const users = await userController.getByResource(resourceId);
    res.json({ data: users });
}

/**
 * Registra a un usuario llamando a la función de registro del userController. Si el registro del usuario es exitoso,
 * el objeto del usuario se registra en la consola y se devuelve en el cuerpo de la respuesta. Si hay un error durante
 * el registro, el mensaje de error se devuelve en el cuerpo de la respuesta.
 *
 * @param {Object} req - El objeto de solicitud que contiene los datos de registro del usuario en el cuerpo de la solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar el resultado del registro del usuario.
 * @return {Promise<void>} - Una promesa que se resuelve cuando se envía la respuesta.
 */

const register = async (req, res) => {
    const user = await userController.register(req.body);
    if (user.error) {
        return res.json({ error: user.error });
    }
    console.log("USER EN API CONTROLLER", user);
    res.json({ data: user });
}

/**
 * Inicia sesión de un usuario llamando a la función de inicio de sesión del userController. Si el inicio de sesión es exitoso,
 * devuelve una respuesta JSON con el token del usuario, el ID del usuario y el nombre de usuario. Si hay un error durante el inicio de sesión,
 * devuelve una respuesta JSON con el mensaje de error.
 *
 * @param {Object} req - El objeto de solicitud que contiene los datos de inicio de sesión del usuario en el cuerpo de la solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar el resultado del inicio de sesión del usuario.
 * @return {Promise<void>} - Una promesa que se resuelve cuando se envía la respuesta.
 */

const login = async (req, res) => {
    const data = await userController.login(req.body);
    if (data.error) {
        return res.status(data.status).json({ error: data.error });
    }
    res.json({ token: data.token, user: data.user._id, username: data.user.username });
}

/**
 * Crea un nuevo usuario llamando al método create del userController con los datos del cuerpo de la solicitud.
 *
 * @param {Object} req - El objeto de solicitud que contiene los datos del usuario en el cuerpo de la solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar los datos del usuario.
 * @return {Object} Los datos del nuevo usuario creado.
 */

const create = async (req, res) => {
    const user = await userController.create(req.body);
    res.json({ data: user });
}

/**
 * Actualiza un usuario por su ID con los datos proporcionados.
 *
 * @param {Object} req - El objeto de solicitud que contiene los datos del usuario en el cuerpo de la solicitud.
 * @param {Object} res - El objeto de respuesta utilizado para enviar los datos del usuario actualizado.
 * @return {Promise<Object>} Los datos del usuario actualizado.
 */

const update = async (req, res) => {
    const id = req.params.id;
    const user = await userController.update(id, req.body);
    res.json({ data: user });
}

/**
 * Elimina un usuario por su ID y envía los datos del usuario eliminado como una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud que contiene el ID del usuario en los parámetros.
 * @param {Object} res - El objeto de respuesta utilizado para enviar los datos del usuario eliminado.
 * @return {Promise<Object>} Los datos del usuario eliminado como un objeto JSON.
 */

const remove = async (req, res) => {
    const id = req.params.id;
    const user = await userController.remove(id);
    res.json({ data: user });
}

/**
 * Cierra la sesión del usuario estableciendo `req.user` a `null` y enviando una respuesta JSON.
 *
 * @param {Object} req - El objeto de solicitud.
 * @param {Object} res - El objeto de respuesta.
 * @return {Promise<void>} Una promesa que se resuelve cuando se envía la respuesta.
 */

async function logout(req, res) {
    req.user = null;
    console.log("req.user", req.user);
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
