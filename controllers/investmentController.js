import Investment from "../models/Investment.js";

// Create Investment Request
export const createInvestment = async (req, res) => {
  try {

    const { startup, amount, message } = req.body;

    const investment = await Investment.create({
      investor: req.user._id,
      startup,
      amount,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Investment request created successfully",
      investment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get My Investment Requests
export const getMyInvestments = async (req, res) => {
  try {

    const investments = await Investment.find({
      investor: req.user._id,
    })
      .populate("startup", "startupName industry")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: investments.length,
      investments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Requests for a Startup
export const getStartupInvestments = async (req, res) => {
  try {

    const investments = await Investment.find({
      startup: req.params.startupId,
    })
      .populate("investor", "fullName email")
      .populate("startup", "startupName");

    res.json({
      success: true,
      count: investments.length,
      investments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Approve Investment
export const approveInvestment = async (req, res) => {
  try {

    const investment = await Investment.findByIdAndUpdate(
      req.params.id,
      { status: "Approved" },
      { new: true }
    );

    res.json({
      success: true,
      message: "Investment approved successfully",
      investment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Reject Investment
export const rejectInvestment = async (req, res) => {
  try {

    const investment = await Investment.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    res.json({
      success: true,
      message: "Investment rejected successfully",
      investment,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Investment
export const deleteInvestment = async (req, res) => {
  try {

    await Investment.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Investment deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};