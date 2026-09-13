import { registerUser, loginUser, getCurrentUser } from "../services/auth.service.js";
import User from "../models/User.js";
import ApiResponse from "../utils/ApiResponse.js";

const isProd = process.env.NODE_ENV === "production";
const cookieOptions = {
  httpOnly: true,
  secure: isProd,
  sameSite: isProd ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

/**
 * Register User
 * POST /api/auth/signup
 */
export const signup = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

   return res
  .status(201)
  .json(new ApiResponse(201, "User registered successfully.", user));
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { token, user } = await loginUser(req.body);

    res.cookie("token", token, cookieOptions);

    return res
  .status(200)
  .json(new ApiResponse(200, "Login successful.", user));
  } catch (error) {
    next(error);
  }
};
export const me = async (req, res, next) => {
  try {
    const user = await getCurrentUser(req.user._id);

   return res
  .status(200)
  .json(new ApiResponse(200, "User fetched successfully.", user));
  } catch (error) {
    next(error);
  }
};
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "Logged out successfully."));
};

/**
 * Get all participants (admin only)
 * GET /api/auth/users
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({ role: "participant" }).select("-password");
    return res
      .status(200)
      .json(new ApiResponse(200, "Users fetched successfully.", users));
  } catch (error) {
    next(error);
  }
};