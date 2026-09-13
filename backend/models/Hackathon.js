import mongoose from "mongoose";

const hackathonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    problemStatement: {
      type: String,
      default: "",
    },
    techStack: {
      type: String,
      default: "",
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
    submissionDeadline: {
      type: Date,
      required: [true, "Submission deadline is required"],
    },
    mode: {
      type: String,
      enum: ["Online", "Offline", "Hybrid"],
      default: "Online",
    },
    status: {
      type: String,
      enum: ["Upcoming", "In Progress", "Completed"],
      default: "Upcoming",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Hackathon = mongoose.model("Hackathon", hackathonSchema);
export default Hackathon;