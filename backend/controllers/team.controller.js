import Team from "../models/Team.js";

function generateTeamCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

// @desc Create a team for a hackathon (creator becomes leader)
export const createTeam = async (req, res) => {
  try {
    const { name, hackathonId } = req.body;

    const existing = await Team.findOne({ hackathon: hackathonId, members: req.user._id });
    if (existing) {
      return res.status(400).json({ success: false, message: "You already have a team for this hackathon" });
    }

    const team = await Team.create({
      name,
      hackathon: hackathonId,
      leader: req.user._id,
      members: [req.user._id],
      teamCode: generateTeamCode(),
    });

    res.status(201).json({ success: true, data: team });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Join an existing team using its team code
export const joinTeam = async (req, res) => {
  try {
    const { teamCode } = req.body;

    const team = await Team.findOne({ teamCode: teamCode.toUpperCase() });
    if (!team) {
      return res.status(404).json({ success: false, message: "Invalid team code" });
    }

    if (team.members.includes(req.user._id)) {
      return res.status(400).json({ success: false, message: "You are already in this team" });
    }

    const alreadyInAnotherTeam = await Team.findOne({
      hackathon: team.hackathon,
      members: req.user._id,
    });
    if (alreadyInAnotherTeam) {
      return res.status(400).json({ success: false, message: "You already have a team for this hackathon" });
    }

    team.members.push(req.user._id);
    await team.save();

    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Get all teams the logged-in user belongs to
export const getMyTeams = async (req, res) => {
  try {
    const teams = await Team.find({ members: req.user._id })
      .populate("hackathon", "title startDate endDate submissionDeadline status")
      .populate("members", "fullName email")
      .populate("leader", "fullName email");

    res.status(200).json({ success: true, data: teams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get a single team by id
export const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
      .populate("hackathon", "title startDate endDate submissionDeadline status")
      .populate("members", "fullName email")
      .populate("leader", "fullName email");

    if (!team) {
      return res.status(404).json({ success: false, message: "Team not found" });
    }
    res.status(200).json({ success: true, data: team });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};