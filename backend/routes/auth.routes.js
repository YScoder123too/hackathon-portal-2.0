import express from "express";
import { signup, login, logout, me, getAllUsers } from "../controllers/auth.controller.js";
import {
  signupValidator,
  loginValidator,
  validate,
} from "../validators/auth.validator.js";
import { protect } from "../middleware/auth.middleware.js";
import { restrictTo } from "../middleware/role.middleware.js";
const router = express.Router();
// Signup
router.post("/signup", signupValidator, validate, signup);
router.post("/login", loginValidator, validate, login);
router.post("/logout", protect, logout);
router.get("/me", protect, me);
router.get("/users", protect, restrictTo("admin"), getAllUsers);
export default router;