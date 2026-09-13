import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import hackathonRoutes from "./routes/hackathon.routes.js";
import teamRoutes from "./routes/team.routes.js";
import submissionRoutes from "./routes/submission.routes.js";
import errorHandler from "./middleware/error.middleware.js";
const app = express();

// Security Headers
app.use(helmet());

// Enable CORS — allows both local dev and the deployed frontend
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Parse JSON
app.use(express.json());

// Parse URL Encoded Data
app.use(express.urlencoded({ extended: true }));

// Parse Cookies
app.use(cookieParser());

// Logger
app.use(morgan("dev"));
app.use("/api/auth", authRoutes);
app.use("/api/hackathons", hackathonRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/submissions", submissionRoutes);

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hackathon Management Portal API is running 🚀",
  });
});
app.use(errorHandler);
export default app;