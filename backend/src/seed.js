import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import connectDB from "./db/index.js";
import Trainer from "./models/trainer.model.js";
import Review from "./models/review.model.js";
import Job from "./models/job.model.js";
import Exercise from "./models/exercise.model.js";

const seed = async () => {
  await connectDB();

  // clear
  await Trainer.deleteMany({});
  await Review.deleteMany({});
  await Job.deleteMany({});
  await Exercise.deleteMany({});

  const t1 = await Trainer.create({
    name: "Amit Kumar",
    title: "Certified Personal Trainer",
    bio: "Specializes in weight loss and strength training",
    specialties: ["strength", "weight-loss"],
    rating: 4.8,
    experienceYears: 6,
    profilePicture: "",
    pricePerSession: 30,
    location: "Delhi, India"
  });

  const t2 = await Trainer.create({
    name: "Sneha Sharma",
    title: "Nutrition & Fitness Coach",
    bio: "Nutrition-focused personalized plans",
    specialties: ["nutrition", "yoga"],
    rating: 4.7,
    experienceYears: 5,
    pricePerSession: 35,
    location: "Mumbai, India"
  });

  await Review.create({
    trainer: t1._id,
    userName: "Rohit",
    rating: 5,
    comment: "Excellent trainer, great results!"
  });

  await Job.create({
    title: "Part-time Trainer - Mumbai",
    description: "We need a motivated personal trainer",
    location: "Mumbai",
    salary: "negotiable"
  });

  await Exercise.create({
    name: "Push Up",
    description: "Basic push up description",
    muscles: ["chest", "triceps"],
    difficulty: "beginner"
  });

  console.log("Seed data inserted");
  process.exit(0);
};

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
