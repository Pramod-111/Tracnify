import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String },
    description: { type: String }
}, { timestamps: true });

export default mongoose.model("Exercise", exerciseSchema);