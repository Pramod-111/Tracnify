import Exercise from "../models/exercise.model.js";

// GET all exercises
export const getExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (error) {
    res.status(500).json({ message: "Error fetching exercises", error });
  }
};

// ADD exercise
export const addExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body);
    await exercise.save();
    res.status(201).json({ message: "Exercise added", exercise });
  } catch (error) {
    res.status(400).json({ message: "Error adding exercise", error });
  }
};
