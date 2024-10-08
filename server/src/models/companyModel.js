import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
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
    timestamps: true // This will add createdAt and updatedAt fields
});

const Company = mongoose.model('Company', companySchema);

export default Company;
