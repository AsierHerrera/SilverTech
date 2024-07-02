import mongoose from "mongoose";

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
    timestamps: true // This will add createdAt and updatedAt fields
});

const subforumModel = mongoose.model("Subforum", subforumSchema);

export default subforumModel;
