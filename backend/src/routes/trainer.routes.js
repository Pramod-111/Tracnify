import express from "express";
import {
  listTrainers,
  getTrainer,
  createTrainer,
  updateTrainer,
  deleteTrainer
} from "../controllers/trainer.controller.js";

const router = express.Router();

router.get("/", listTrainers);          // GET /api/trainers
router.get("/:id", getTrainer);         // GET /api/trainers/:id
router.post("/", createTrainer);        // POST /api/trainers
router.put("/:id", updateTrainer);      // PUT /api/trainers/:id
router.delete("/:id", deleteTrainer);   // DELETE /api/trainers/:id

export default router;
