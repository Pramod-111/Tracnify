import Trainer from "../models/trainer.model.js";
import Review from "../models/review.model.js";

/**
 * GET /api/trainers
 * Query: ?page=1&limit=12&search=keyword&specialty=yoga
 */
export const listTrainers = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.search) {
      const q = req.query.search;
      filter.$or = [
        { name: new RegExp(q, "i") },
        { title: new RegExp(q, "i") },
        { specialties: new RegExp(q, "i") }
      ];
    }
    if (req.query.specialty) {
      filter.specialties = req.query.specialty;
    }

    const [items, total] = await Promise.all([
      Trainer.find(filter).skip(skip).limit(limit).sort({ createdAt: -1 }),
      Trainer.countDocuments(filter)
    ]);

    res.json({ items, page, total, totalPages: Math.ceil(total / limit) });
  } catch (err) {
    next(err);
  }
};

export const getTrainer = async (req, res, next) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) return res.status(404).json({ message: "Trainer not found" });

    const reviews = await Review.find({ trainer: trainer._id }).sort({ createdAt: -1 });

    res.json({ trainer, reviews });
  } catch (err) {
    next(err);
  }
};

export const createTrainer = async (req, res, next) => {
  try {
    const payload = req.body;
    const created = await Trainer.create(payload);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
};

export const updateTrainer = async (req, res, next) => {
  try {
    const updated = await Trainer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Trainer not found" });
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteTrainer = async (req, res, next) => {
  try {
    const removed = await Trainer.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: "Trainer not found" });
    res.json({ message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
