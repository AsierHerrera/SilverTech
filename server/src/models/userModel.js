// models/userModel.js
import mongoose from 'mongoose';

/**
 * @description Definición del modelo de usuario.
 * @module userModel
 * @class User
 * @extends mongoose.Model
 */

/**
 * Esquema de participación en un recurso.
 * @typedef {Object} ParticipationSchema
 * @property {mongoose.Schema.Types.ObjectId} resource - ID del recurso.
 * @property {String} status - Estado de la participación. Puede ser "pending", "accepted" o "rejected".
 * @property {Date} actionDate - Fecha de la acción de participación.
 */

/**
 * Esquema de usuario.
 * @typedef {Object} UserSchema
 * @property {String} username - Nombre de usuario.
 * @property {String} password - Contraseña del usuario.
 * @property {String} email - Correo electrónico del usuario.
 * @property {String} role - Rol del usuario. Puede ser "user" o "admin".
 * @property {Array<mongoose.Schema.Types.ObjectId>} resources - ID de los recursos del usuario.
 * @property {Array<ParticipationSchema>} participations - Participaciones del usuario.
 * @property {Array<mongoose.Schema.Types.ObjectId>} subforums - ID de los subforos del usuario.
 * @property {Array<mongoose.Schema.Types.ObjectId>} comments - ID de los comentarios del usuario.
 * @property {mongoose.Schema.Types.ObjectId} company - ID de la compañía del usuario.
 * @property {Array<mongoose.Schema.Types.ObjectId>} projects - ID de los proyectos del usuario.
 */

const participationSchema = new mongoose.Schema({
    resource: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource"
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },
    actionDate: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true });

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource"
    }],
    participations: [participationSchema],
    subforums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subforum"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company"
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }]
}, {
    timestamps: true // Esto agregará campos createdAt y updatedAt
});

const userModel = mongoose.model("User", userSchema);

export default userModel;

