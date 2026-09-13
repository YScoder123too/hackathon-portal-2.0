import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("✅ Admin already exists:", existingAdmin.email);
      process.exit(0);
    }

    const admin = await User.create({
      fullName: "Codways Admin",
      email: "admin@codways.com",
      password: "Admin@1234",
      role: "admin",
      status: "active",
      provider: "local",
      isVerified: true,
    });

    console.log("✅ Admin user created successfully");
    console.log("   Email:", admin.email);
    console.log("   Password: Admin@1234");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();