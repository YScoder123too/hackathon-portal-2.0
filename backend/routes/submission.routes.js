import express from "express";
import {
  upsertSubmission,
  finalizeSubmission,
  getMySubmissions,
  getAllSubmissions,
} from "../controllers/submission.controller.js";
import { protect } from "../middleware/auth.middleware.js";
import { restrictTo } from "../middleware/role.middleware.js";

const router = express.Router();

router.post("/", protect, upsertSubmission);
router.put("/:id/finalize", protect, finalizeSubmission);
router.get("/my", protect, getMySubmissions);
router.get("/", protect, restrictTo("admin"), getAllSubmissions);

export default router;