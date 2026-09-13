import mongoose from "mongoose";
import dotenv from "dotenv";
import Hackathon from "../models/Hackathon.js";
import User from "../models/User.js";

dotenv.config();

const seedHackathons = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding...");

    const admin = await User.findOne({ role: "admin" });
    if (!admin) {
      console.error("No admin user found. Run 'npm run seed-admin' first.");
      process.exit(1);
    }

    const sampleHackathons = [
      {
        title: "Code the Future 2025",
        description: "Build innovative solutions for real-world problems and shape the future.",
        startDate: new Date("2025-05-10"),
        endDate: new Date("2025-05-25"),
        submissionDeadline: new Date("2025-05-24"),
        mode: "Online",
        status: "In Progress",
        createdBy: admin._id,
      },
      {
        title: "Innovate to Elevate",
        description: "A hackathon focused on climate tech and sustainability solutions.",
        startDate: new Date("2025-06-01"),
        endDate: new Date("2025-06-20"),
        submissionDeadline: new Date("2025-06-19"),
        mode: "Hybrid",
        status: "Upcoming",
        createdBy: admin._id,
      },
      {
        title: "Build Beyond Limits",
        description: "Open-theme hackathon for the most ambitious student projects.",
        startDate: new Date("2025-04-05"),
        endDate: new Date("2025-04-30"),
        submissionDeadline: new Date("2025-04-29"),
        mode: "Online",
        status: "Completed",
        createdBy: admin._id,
      },
    ];

    await Hackathon.deleteMany({});
    await Hackathon.insertMany(sampleHackathons);

    console.log("✅ Sample hackathons seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedHackathons();