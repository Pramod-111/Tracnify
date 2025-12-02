import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  muscles: [String],
  difficulty: { type: String, enum: ["beginner","intermediate","advanced"], default: "beginner" },
  videoUrl: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Exercise", ExerciseSchema);
