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
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

const subforumModel = mongoose.model("Subforum", subforumSchema);

export default subforumModel;
