import Hackathon from "../models/Hackathon.js";

// @desc Create a hackathon (admin only)
export const createHackathon = async (req, res) => {
  try {
    const {
      title,
      description,
      problemStatement,
      techStack,
      startDate,
      endDate,
      submissionDeadline,
      mode,
      status,
    } = req.body;

    const hackathon = await Hackathon.create({
      title,
      description,
      problemStatement,
      techStack,
      startDate,
      endDate,
      submissionDeadline,
      mode,
      status,
      createdBy: req.user._id,
    });

    res.status(201).json({ success: true, data: hackathon });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Get all hackathons (any authenticated user)
export const getHackathons = async (req, res) => {
  try {
    const hackathons = await Hackathon.find().sort({ startDate: 1 });
    res.status(200).json({ success: true, data: hackathons });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Get a single hackathon by id
export const getHackathonById = async (req, res) => {
  try {
    const hackathon = await Hackathon.findById(req.params.id);
    if (!hackathon) {
      return res.status(404).json({ success: false, message: "Hackathon not found" });
    }
    res.status(200).json({ success: true, data: hackathon });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc Update a hackathon (admin only)
export const updateHackathon = async (req, res) => {
  try {
    const hackathon = await Hackathon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!hackathon) {
      return res.status(404).json({ success: false, message: "Hackathon not found" });
    }
    res.status(200).json({ success: true, data: hackathon });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc Delete a hackathon (admin only)
export const deleteHackathon = async (req, res) => {
  try {
    const hackathon = await Hackathon.findByIdAndDelete(req.params.id);
    if (!hackathon) {
      return res.status(404).json({ success: false, message: "Hackathon not found" });
    }
    res.status(200).json({ success: true, message: "Hackathon deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};