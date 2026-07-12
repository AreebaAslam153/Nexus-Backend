import Meeting from "../models/Meeting.js";

// Create Meeting
export const createMeeting = async (req, res) => {
  try {

    const meeting = await Meeting.create(req.body);

    res.status(201).json({
      success: true,
      message: "Meeting scheduled successfully",
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get All Meetings
export const getMeetings = async (req, res) => {
  try {

    const meetings = await Meeting.find()
      .populate("startup")
      .populate("investor");

    res.json({
      success: true,
      count: meetings.length,
      meetings,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Meeting By ID
export const getMeetingById = async (req, res) => {
  try {

    const meeting = await Meeting.findById(req.params.id)
      .populate("startup")
      .populate("investor");

    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: "Meeting not found",
      });
    }

    res.json({
      success: true,
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Update Meeting
export const updateMeeting = async (req, res) => {
  try {

    const meeting = await Meeting.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Meeting updated successfully",
      meeting,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Meeting
export const deleteMeeting = async (req, res) => {
  try {

    await Meeting.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Meeting deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};