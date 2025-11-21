import Trainer from "../models/trainer.model.js";

// GET all trainers
export const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching trainers", error });
  }
};

// ADD a new trainer
export const addTrainer = async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();

    res.status(201).json({ message: "Trainer added successfully", trainer });
  } catch (error) {
    res.status(400).json({ message: "Error adding trainer", error });
  }
};

// DELETE a trainer
export const deleteTrainer = async (req, res) => {
  try {
    await Trainer.findByIdAndDelete(req.params.id);
    res.json({ message: "Trainer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting trainer", error });
  }
};
