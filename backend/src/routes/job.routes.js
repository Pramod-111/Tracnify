import express from "express";
import { applyJob, getJobApplications } from "../controllers/job.controller.js";

const router = express.Router();

router.post("/", applyJob);
router.get("/", getJobApplications);

export default router;
