import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    subforum: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subforum",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
});

const commentModel = mongoose.model("Comment", commentSchema);

export default commentModel;
