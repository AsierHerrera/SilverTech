import mongoose from 'mongoose';

/**
 * @description Definición del modelo de proyecto.
 * @module ProjectModel
 * @class Project
 * @extends mongoose.Model
 */

/**
 * @typedef {Object} ProjectSchema
 * @property {string} title - Título del proyecto.
 * @property {string} category - Categoría del proyecto.
 * @property {mongoose.Schema.Types.ObjectId} professionalReference - Referencia profesional.
 * @property {string} contactInfo - Información de contacto.
 * @property {string} description - Descripción del proyecto.
 * @property {string} beneficiaries - Beneficiarios del proyecto.
 * @property {Date} startDate - Fecha de inicio del proyecto.
 * @property {Date} endDate - Fecha de finalización del proyecto.
 * @property {Object} expectedResults - Resultados esperados.
 * @property {string} expectedResults.economicImpact - Impacto económico esperado.
 * @property {string} expectedResults.socialImpact - Impacto social esperado.
 * @property {string} expectedResults.environmentalImpact - Impacto ambiental esperado.
 * @property {mongoose.Schema.Types.ObjectId} createdBy - Usuario que creó el proyecto.
 * @property {Array<mongoose.Schema.Types.ObjectId>} users - Lista de usuarios asociados con el proyecto.
 */

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    professionalReference: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    beneficiaries: {
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
    expectedResults: {
        economicImpact: {
            type: String,
            required: true
        },
        socialImpact: {
            type: String,
            required: true
        },
        environmentalImpact: {
            type: String,
            required: true
        }
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    invitations: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }
    }]
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
