import mongoose from 'mongoose';

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
        ref: 'User', // Referencia al modelo de usuario
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
        ref: 'User', // Referencia al modelo de usuario
        required: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Referencia al modelo de usuario
    }]
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

export default Project;
