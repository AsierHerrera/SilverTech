import mongoose from 'mongoose';

/**
 * @description Definición del modelo de la compañía.
 * @module CompanyModel
 * @class Company
 * @extends mongoose.Model
 */


const companySchema = new mongoose.Schema({
    /**
     * @property {String} name - Nombre de la compañía.
     * @property {String} cif - CIF de la compañía.
     * @property {String} address - Dirección de la compañía.
     * @property {String} postalCode - Código postal de la compañía.
     * @property {String} website - Sitio web de la compañía.
     * @property {String} phone - Teléfono de la compañía.
     * @property {String} sector - Sector de la compañía.
     * @property {String} description - Descripción de la compañía.
     * @property {String} imageUrl - URL de la imagen de la compañía.
     * @property {mongoose.Schema.Types.ObjectId} userId - ID del usuario que creó la compañía.
     */
    name: {
        type: String,
        required: true
    },
    cif: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    size: {
        type: String,
        required: true
    },
    nivelDeConocimiento: {
        type: String,
        required: true
    },
    edadPublico: {
        type: Array,
        required: true
    },
    queBuscas: {
        type: Array,
        required: true
    },
    presupuesto: {
        type: String,
        required: true
    },
    contenidoInteres: {
        type: Array,
        required: true
    }
}, {
    timestamps: true // Esto agregará los campos createdAt y updatedAt
});

/**
 * @class Company
 * @extends mongoose.Model
 */
const Company = mongoose.model('Company', companySchema);

export default Company;
