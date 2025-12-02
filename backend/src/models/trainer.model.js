import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String }, // e.g., "Certified Personal Trainer"
  bio: { type: String },
  specialties: [{ type: String }],
  rating: { type: Number, default: 0 },
  reviewsCount: { type: Number, default: 0 },
  experienceYears: { type: Number },
  profilePicture: { type: String }, // URL
  pricePerSession: { type: Number },
  location: { type: String },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Trainer", TrainerSchema);
