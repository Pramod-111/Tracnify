import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  location: String,
  salary: String,
  postedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }
});

export default mongoose.model("Job", JobSchema);
