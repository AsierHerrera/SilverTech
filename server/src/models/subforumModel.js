import mongoose from "mongoose";

/**
 * @description Definición del modelo de subforo.
 * @module subforumModel
 * @class Subforum
 * @extends mongoose.Model
 */

/**
 * Esquema de subforo.
 * @typedef {Object} SubforumSchema
 * @property {String} title - Título del subforo.
 * @property {mongoose.Schema.Types.ObjectId} user - ID del usuario que creó el subforo.
 * @property {String} text - Texto del subforo.
 * @property {Array<mongoose.Schema.Types.ObjectId>} comments - ID de los comentarios en el subforo.
 */

const subforumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true // Esto agregará los campos createdAt y updatedAt
});

const subforumModel = mongoose.model("Subforum", subforumSchema);

export default subforumModel;
