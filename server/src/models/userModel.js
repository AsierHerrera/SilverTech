import mongoose from "mongoose";

const participationSchema = new mongoose.Schema({
    resource: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource"
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },
    actionDate: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true });

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
        default: "user"
    },
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resource"
    }],
    participations: [participationSchema],
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
