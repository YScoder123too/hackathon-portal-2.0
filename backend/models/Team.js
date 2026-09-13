import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Team name is required"],
      trim: true,
    },
    teamCode: {
      type: String,
      required: true,
      unique: true,
    },
    hackathon: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hackathon",
      required: true,
    },
    leader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Team = mongoose.model("Team", teamSchema);
export default Team;