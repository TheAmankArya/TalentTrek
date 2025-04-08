import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../utils/db.js";
import userRoute from "../routes/user.route.js";
import companyRoute from "../routes/company.route.js";
import jobRoute from "../routes/job.route.js";
import applicationRoute from "../routes/application.route.js";

// Load env vars
dotenv.config();

// Connect to DB (do it only once, not inside each function call)
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: 'https://talent-trek1150.vercel.app',
  credentials: true
}));

// Routes
app.get("/", (req, res) => res.send("Express on Vercel"));
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Export as Vercel handler
export default app;
