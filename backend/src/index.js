import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./db/index.js";

import trainerRoutes from "./routes/trainer.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import jobRoutes from "./routes/job.routes.js";
import exerciseRoutes from "./routes/exercise.routes.js";
import errorHandler from "./middleware/error.middleware.js";

dotenv.config({ path: "./.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// health
app.get("/", (req, res) => {
  res.json({ message: "Trackcify backend is running" });
});

// api routes
app.use("/api/trainers", trainerRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/exercises", exerciseRoutes);

// error handler (should be last)
app.use(errorHandler);

// connect db then start
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
