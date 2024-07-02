import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "admin"
    },
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource"
    }],
    subforums: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subforum"
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
