import userModel from "../../models/userModel.js";
import resourceModel from "../../models/resourceModel.js"; // Importar modelo de recursos
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const getAll = async () => {
    try {
        const users = await userModel.find();
        return users;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener usuarios", status: 500 };
    }
}

function getUserData(user){
    return {
        _id: user._id,
        email: user.email,
        username: user.username,
        role: user.role,
        projects: user.projects
    }
}

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

const getByProperty = async (property, value) => {
    try {
        const user = await userModel.find({ [property]: value });
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Error al obtener usuario por propiedad", status: 500 };
    }
}

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

const login = async (data) => {
    const { email, username, password } = data;
    console.log("La data es:_", data)
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

        // Llamar a la función de login después de la creación del usuario
        const loginData = { username: user.username, password: data.password };
        const loginResult = await login(loginData);
        if (loginResult.error) {
            return loginResult;
        }

        return loginResult;
    } catch (error) {
        console.error(error);
        return { error: "Error al registrar el usuario", status: 500 };
    }
}

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
