import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    specialization: { type: String, required: true },
    about: { type: String, required: true },
    rating: { type: Number, default: 5 },
    clients: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Trainer", trainerSchema);