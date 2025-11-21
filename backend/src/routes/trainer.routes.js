import express from "express";
import { getTrainers, addTrainer, deleteTrainer } from "../controllers/trainer.controller.js";

const router = express.Router();

router.get("/", getTrainers);
router.post("/", addTrainer);
router.delete("/:id", deleteTrainer);

export default router;
