import userModel from "../../models/userModel.js";
import resourceModel from "../../models/resourceModel.js"; // Importar modelo de recursos
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * @module controllers/Users/userController
 */

/**
 * Recupera todos los usuarios de la base de datos.
 *
 * @return {Promise<Array<Object>>} Una promesa que se resuelve a un array de objetos de usuario.
 * @throws {Error} Si ocurre un error al recuperar los usuarios.
 */

const getAll = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener usuarios", status: 500 };
    }
}

/**
 * Recupera campos específicos de datos de usuario.
 *
 * @param {Object} user - El objeto de usuario que contiene los campos de datos.
 * @return {Object} Un objeto que contiene los campos especificados de datos de usuario.
 */

function getUserData(user){
    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        projects: user.projects
    }
}


/**
 * Recupera un usuario por su ID.
 *
 * @param {string} id - El ID del usuario que se desea recuperar.
 * @return {Promise<Object>} El objeto de usuario si se encuentra, o un objeto de error si no se encuentra o si ocurrió un error.
 */

const getById = async (id) => {
    try {
        const user = await userModel.findById(id);
        if (!user) {
            return { error: "Usuario no encontrado", status: 404 };
        }
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener usuario", status: 500 };
    }
}

/**
 * Recupera un usuario por una propiedad específica.
 *
 * @param {string} property - La propiedad por la que se desea buscar.
 * @param {string} value - El valor de la propiedad que se desea coincidir.
 * @return {Promise<Object>} El objeto de usuario encontrado basado en la propiedad.
 */

const getByProperty = async (property, value) => {
    try {
        const user = await userModel.find({ [property]: value });
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener usuario por propiedad", status: 500 };
    }
}

/**
 * Recupera un recurso por su ID y popula el campo de usuario.
 *
 * @param {string} resourceId - El ID del recurso que se desea recuperar.
 * @return {Object} El usuario asociado con el recurso si se encuentra.
 */

const getByResource = async (resourceId) => {
    try {
        const resource = await resourceModel.findById(resourceId).populate('user'); // Asumiendo que el modelo de recursos tiene una referencia al usuario
        if (!resource) {
            return { error: "Recurso no encontrado", status: 404 };
        }
        return resource.user;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener usuarios por recurso", status: 500 };
    }
}
/**
 * Autentica a un usuario basado en los datos proporcionados.
 *
 * @param {Object} data - Los datos del usuario que contienen correo electrónico, nombre de usuario y contraseña.
 * @return {Object} Un objeto que contiene un token y la información del usuario si la autenticación es exitosa.
 */


const login = async (data) => {
    const { email, username, password } = data;
    console.log("La dta es:_", data)
    if ((!email || !username) && !password) {
        return { error: "Faltan datos", status: 400 };
    }
    try {
        let user;
        if (email) {
            const users = await getByProperty("email", email);
            user = users[0];
        } else {
            const users = await getByProperty("username", username);
            user = users[0];
        }
        if (!user) {
            return { error: "No existe el usuario", status: 404 };
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return { error: "Combinación de usuario y contraseña incorrectos", status: 400 };
        }

        const token = jwt.sign(
            { _id: user._id, username: user.username, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: 60 * 60 * 24 }
        );
        console.log("EL TOKEN ES:", token)
        console.log("EL USer ES:", user)
        return { token, user };

    } catch (error) {
        console.error(error);
        return { error: "Ha habido un error", status: 500 };
    }
}

/**
 * Registra un nuevo usuario con los datos proporcionados.
 *
 * @param {Object} data - Los datos del usuario que contienen nombre de usuario, correo electrónico, contraseña y confirmación de contraseña.
 * @return {Promise<Object>} Un objeto que contiene el usuario registrado o un error.
 */

const register = async (data) => {
    try {
        const { username, email, password, passwordRepeat } = data;

        if (!username || !password || !passwordRepeat || !email) {
            return { error: "Falta alguno de los campos", status: 400 };
        }

        if (password !== passwordRepeat) {
            return { error: "Las contraseñas no coinciden", status: 400 };
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { error: "El correo electrónico no es válido. Asegúrate de que esté en el formato correcto, como ejemplo@dominio.com.", status: 400 };
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            return { error: "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.", status: 400 };
        }

        const userData = {
            username,
            email,
            password,
            role: "user"
        };

        const user = await create(userData);
        if (user.error) {
            return user;
        }

        return user;
    } catch (error) {
        console.error(error);
        return { error: "Error al registrar el usuario", status: 500 };
    }
}

/**
 * Crea un nuevo usuario con los datos proporcionados si el nombre de usuario aún no está en uso.
 *
 * @param {Object} userData - Los datos del usuario que contienen nombre de usuario, correo electrónico, contraseña y rol.
 * @return {Object} El usuario creado si es exitoso, o un objeto de error con un código de estado.
 */

const create = async (userData) => {
    try {
        const existingUser = await userModel.findOne({ username: userData.username });

        if (existingUser) {
            return { error: "El nombre de usuario ya está en uso", status: 400 };
        }

        const hash = await bcrypt.hash(userData.password, 10);
        userData.password = hash;

        const user = await userModel.create(userData);
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Error al crear el usuario", status: 500 };
    }
}

/**
 * Actualiza un usuario con el ID proporcionado usando los datos proporcionados.
 *
 * @param {string} id - El ID del usuario que se va a actualizar.
 * @param {Object} data - Los datos con los que se actualizará el usuario.
 * @return {Promise<Object|{error: string, status: number}>} El objeto de usuario actualizado si tiene éxito, o un objeto de error con un código de estado.
 */

const update = async (id, data) => {
    try {
        const user = await userModel.findByIdAndUpdate(id, data, { new: true });
        if (!user) {
            return { error: "Usuario no encontrado", status: 404 };
        }
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Error al actualizar el usuario", status: 500 };
    }
}

/**
 * Elimina un usuario de la base de datos por su ID.
 *
 * @param {string} id - El ID del usuario que se va a eliminar.
 * @return {Promise<Object|{error: string, status: number}>} El objeto de usuario eliminado si tiene éxito, o un objeto de error con un código de estado.
 */

const remove = async (id) => {
    try {
        const user = await userModel.findByIdAndDelete(id);
        if (!user) {
            return { error: "Usuario no encontrado", status: 404 };
        }
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Error al eliminar el usuario", status: 500 };
    }
}

export default {
    getAll,
    getById,
    getUserData,
    getByProperty,
    getByResource,
    login,
    register,
    create,
    update,
    remove
}
