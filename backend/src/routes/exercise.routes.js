import express from "express";
import { getExercises, addExercise } from "../controllers/exercise.controller.js";

const router = express.Router();

router.get("/", getExercises);
router.post("/", addExercise);

export default router;
