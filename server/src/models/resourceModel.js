import mongoose from "mongoose";

/**
 * @description Definición del modelo de recurso.
 * @module resourceModel
 * @class Resource
 * @extends mongoose.Model
 */

/**
 * Esquema de participación en un recurso.
 * @typedef {Object} ParticipationSchema
 * @property {mongoose.Schema.Types.ObjectId} user - ID del usuario.
 * @property {String} status - Estado de la participación. Puede ser "pending", "accepted" o "rejected".
 * @property {Date} registrationDate - Fecha de registro de la participación.
 */

/**
 * Esquema de recurso.
 * @typedef {Object} ResourceSchema
 * @property {String} name - Nombre del recurso.
 * @property {String} description - Descripción del recurso.
 * @property {String} modality - Modalidad del recurso.
 * @property {Date} startDate - Fecha de inicio del recurso.
 * @property {Date} endDate - Fecha de finalización del recurso.
 * @property {Number} price - Precio del recurso.
 * @property {String} instructor - Instructor del recurso.
 * @property {String} resourceType - Tipo de recurso.
 * @property {Number} availableSlots - Número de cupos disponibles.
 * @property {Array<ParticipationSchema>} participations - Participantes en el recurso.
 */

const participationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const resourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modality: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    resourceType: {
        type: String,
        required: true
    },
    availableSlots: {
        type: Number,
        required: true
    },
    participations: [participationSchema]
}, {
    timestamps: true // Esto agregará campos createdAt y updatedAt
});

const resourceModel = mongoose.model("Resource", resourceSchema);

export default resourceModel;

