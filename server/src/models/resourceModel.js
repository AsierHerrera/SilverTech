import mongoose from "mongoose";

const participationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const resourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modality: {
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
    price: {
        type: Number,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    resourceType: {
        type: String,
        required: true
    },
    availableSlots: {
        type: Number,
        required: true
    },
    participations: [participationSchema]
}, {
    timestamps: true // This will add createdAt and updatedAt fields
});

const resourceModel = mongoose.model("Resource", resourceSchema);

export default resourceModel;
