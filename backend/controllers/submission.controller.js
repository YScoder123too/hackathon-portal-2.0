import Submission from "../models/Submission.js";
import Team from "../models/Team.js";

async function getUserTeamForHackathon(userId, hackathonId) {
  return Team.findOne({ hackathon: hackathonId, members: userId });
}

// @desc Create or update a draft submission for the user's team
export const upsertSubmission = async (req, res) => {
  try {
    const { hackathonId, projectTitle, description, repoLink, demoLink } = req.body;

    const team = await getUserTeamForHackathon(req.user._id, hackathonId);
    if (!team) {
      return res.status(400).json({ success: false, message: "You need a team for this hackathon first" });
    }

    let submission = await Submission.findOne({ team: team._id, hackathon: hackathonId });

    if (submission) {
      submission.projectTitle = projectTitle;
      submission.description = description;
      submission.repoLink = repoLink;
      submission.demoLink = demoLink;
      await submission.save();
    } else {
      submission = await Submission.create({
        team: team._id,
        hackathon: hackathonId,
        projectTitle,
        description,
        repoLink,
        demoLink,
      });
    }

    res.status(200).json({ success: true, data: submission });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Mark a submission as final (locked in)
export const finalizeSubmission = async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ success: false, message: "Submission not found" });
    }

    const team = await Team.findById(submission.team);
    if (!team.members.includes(req.user._id)) {
      return res.status(403).json({ success: false, message: "Not part of this team" });
    }

    submission.status = "Submitted";
    submission.submittedAt = new Date();
    await submission.save();

    res.status(200).json({ success: true, data: submission });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Get all submissions belonging to the logged-in user's teams
export const getMySubmissions = async (req, res) => {
  try {
    const teams = await Team.find({ members: req.user._id });
    const teamIds = teams.map((t) => t._id);

    const submissions = await Submission.find({ team: { $in: teamIds } })
      .populate("hackathon", "title submissionDeadline")
      .populate("team", "name");

    res.status(200).json({ success: true, data: submissions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get all submissions across all teams (admin only)
export const getAllSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate("hackathon", "title submissionDeadline")
      .populate("team", "name teamCode");

    res.status(200).json({ success: true, data: submissions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};