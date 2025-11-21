import Review from "../models/review.model.js";

// GET all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error });
  }
};

// ADD review
export const addReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review added", review });
  } catch (error) {
    res.status(400).json({ message: "Error adding review", error });
  }
};
