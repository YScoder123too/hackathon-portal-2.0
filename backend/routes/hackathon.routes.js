import express from "express";
import {
  createHackathon,
  getHackathons,
  getHackathonById,
  updateHackathon,
  deleteHackathon,
} from "../controllers/hackathon.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { restrictTo } from "../middleware/role.middleware.js";

const router = express.Router();

router.get("/", protect, getHackathons);
router.get("/:id", protect, getHackathonById);
router.post("/", protect, restrictTo("admin"), createHackathon);
router.put("/:id", protect, restrictTo("admin"), updateHackathon);
router.delete("/:id", protect, restrictTo("admin"), deleteHackathon);

export default router;