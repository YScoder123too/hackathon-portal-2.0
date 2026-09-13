import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
    hackathon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hackathon",
      required: true,
    },
    projectTitle: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    repoLink: {
      type: String,
      required: [true, "Repository link is required"],
    },
    demoLink: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["Draft", "Submitted"],
      default: "Draft",
    },
    submittedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

const Submission = mongoose.model("Submission", submissionSchema);
export default Submission;