import mongoose from "mongoose";

/**
 * @description Definición del modelo de comentario.
 * @module commenttModel
 * @class Comment
 * @extends mongoose.Model
 */

/**
 * Esquema para un comentario. Un comentario es un mensaje que puede ser escrito por un usuario
 * en un subforo.
 *
 * @typedef {Object} Comment
 * @property {String} content - El contenido del comentario.
 * @property {ObjectId} subforum - El ID del subforo en el que se encuentra el comentario.
 * @property {ObjectId} user - El ID del usuario que creó el comentario.
 * @property {Number} likes - El número de "Me gusta" que tiene el comentario.
 * @property {Number} dislikes - El número de "No me gusta" que tiene el comentario.
 * @property {Date} createdAt - La fecha en la que se creó el comentario.
 * @property {Date} updatedAt - La fecha en la que se actualizó por última vez el comentario.
 */

const commentSchema = new mongoose.Schema({
    /**
     * El contenido del comentario.
     */
    content: {
        type: String,
        required: true
    },
    /**
     * El ID del subforo en el que se encuentra el comentario.
     */
    subforum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subforum",
        required: true
    },
    /**
     * El ID del usuario que creó el comentario.
     */
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    /**
     * El número de "Me gusta" que tiene el comentario.
     */
    likes: {
        type: Number,
        default: 0
    },
    /**
     * El número de "No me gusta" que tiene el comentario.
     */
    dislikes: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true // Esto agregará campos createdAt y updatedAt
});

const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;
