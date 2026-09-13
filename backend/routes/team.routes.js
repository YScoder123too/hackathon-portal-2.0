import express from "express";
import {
  createTeam,
  joinTeam,
  getMyTeams,
  getTeamById,
} from "../controllers/team.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createTeam);
router.post("/join", protect, joinTeam);
router.get("/my", protect, getMyTeams);
router.get("/:id", protect, getTeamById);

export default router;