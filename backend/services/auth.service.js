import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";
import ApiError from "../utils/ApiError.js";
/**
 * Register a new user
 */
export const registerUser = async (userData) => {
  const { fullName, email, password, role } = userData;

  // Check if email already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "Email is already registered.");
  }

  // Create user
  const user = await User.create({
    fullName,
    email,
    password,
    role,
  });

  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    status: user.status,
    provider: user.provider,
    isVerified: user.isVerified,
    createdAt: user.createdAt,
  };
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new ApiError(401, "Invalid email or password.");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid email or password.");
  }

  // Judge approval check
  if (user.role === "judge" && user.status !== "approved") {
    throw new ApiError(
  403,
  "Your account is awaiting admin approval."
);
  }

  const token = generateToken(user);

  return {
    token,
    user: {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      status: user.status,
      provider: user.provider,
      isVerified: user.isVerified,
    },
  };
};
export const getCurrentUser = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User not found.");
  }

  return {
    id: user._id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    status: user.status,
    provider: user.provider,
    avatar: user.avatar,
    isVerified: user.isVerified,
  };
};