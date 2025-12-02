import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

const app = express();

// middleware
app.use(express.json());
app.use(cors()); 
// routes
import trainerRoutes from "./routes/trainer.routes.js";
import reviewRoutes from "./routes/review.routes.js";
import jobRoutes from "./routes/job.routes.js";
import exerciseRoutes from "./routes/exercise.routes.js";

app.use("/api/trainers", trainerRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/exercises", exerciseRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

connectDB()
    .then(() => {
        const port = process.env.PORT || 5000;
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection failed:", err);
    });











// import express from 'express'
// import dotenv from 'dotenv'
// import connectDB from './db/index.js'

// // Load environment variables
// dotenv.config({ path: './env' })

// const app = express()

// // Basic route
// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

// // Jokes API route
// // app.get('/api/jokes', (req, res) => {
// //     const jokes = [
// //         { id: 1, title: 'A joke', content: 'This is a joke' },
// //         { id: 2, title: 'Another joke', content: 'This is another joke' },
// //         { id: 3, title: 'A third joke', content: 'This is third joke' },
// //         { id: 4, title: 'A fourth joke', content: 'This is a fourth joke' },
// //         { id: 5, title: 'A fifth joke', content: 'This is a fifth joke' }
// //     ];
// //     res.json(jokes)
// // })

// // Connect DB and start server
// connectDB()
//     .then(() => {
//         const port = process.env.PORT || 5000
//         app.listen(port, () => {
//             console.log(`Server is running at http://localhost:${port}`)
//         })
//     })
//     .catch((err) => {
//         console.log("MongoDB connection failed:", err)
//     })





