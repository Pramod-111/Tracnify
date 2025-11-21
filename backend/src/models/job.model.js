import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    name: String,
    email: String,
    experience: String,
    portfolio: String
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);