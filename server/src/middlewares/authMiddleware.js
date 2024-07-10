import jwt from "jsonwebtoken";
import userController  from "../controllers/Users/userController.js";

/**
 * @module middlewares/authMiddleware
 */

/**
 * Función middleware para verificar si el usuario está autenticado.
 *
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 * @param {Function} next - Función del siguiente middleware.
 * @return {Promise<void>} - Se resuelve cuando el usuario está autenticado o se rechaza con un error.
 */

const isAuthenticated = async(req,res,next)=>{
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"no hay token jwt"});
    }
    try {
        const token = authorization.split("Bearer ")[1];
        const decoded =jwt.verify(token,process.env.JWT_SECRET);
        const user = await userController.getById(decoded._id);
        if(!user){
            return res.status(400).json({error:"No existe el usuario"});
        }
        
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"ha habido un error"});
    }

}

/**
 * Función middleware para verificar si el usuario es administrador.
 *
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 * @param {Function} next - Función del siguiente middleware.
 * @return {Promise<void>} - Se resuelve cuando el usuario es administrador o se rechaza con un error.
 */

const isAdmin = async(req,res,next)=>{
    const authorization  =req.headers.authorization;
    if(!authorization){
        return res.status(401).json({error:"no hay token jwt"});
    }
    try {
        const token = authorization.split("Bearer ")[1];
        const decoded =jwt.verify(token,process.env.JWT_SECRET);
        const user = await userController.getById(decoded._id);
        if(!user){
            return res.status(400).json({error:"No existe el usuario"});
        }
        if(user.role !== "admin"){
            return res.status(401).json({error:"No estás autorizado"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"ha habido un error"});
    }

}

/**
 * Función middleware para autenticar al usuario usando un token JWT.
 *
 * @param {Object} req - Objeto de solicitud.
 * @param {Object} res - Objeto de respuesta.
 * @param {Function} next - Función del siguiente middleware.
 * @return {Promise<void>} - Se resuelve si el usuario está autenticado, de lo contrario se rechaza con un error.
 */

const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ error: 'Por favor, autentíquese.' });
    }
};

export default authMiddleware;

export {
    isAuthenticated,
    isAdmin
}