import Investor from "../models/Investor.js";

// Create Investor
export const createInvestor = async (req, res) => {
  try {
    const {
      fullName,
      company,
      investmentRange,
      industries,
      bio,
      profileImage,
    } = req.body;

    const investor = await Investor.create({
      fullName,
      company,
      investmentRange,
      industries,
      bio,
      profileImage,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Investor profile created successfully",
      investor,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Investors
export const getInvestors = async (req, res) => {
  try {

    const investors = await Investor.find()
      .populate("owner", "fullName email");

    res.json({
      success: true,
      count: investors.length,
      investors,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Investor By ID
export const getInvestorById = async (req, res) => {
  try {

    const investor = await Investor.findById(req.params.id)
      .populate("owner", "fullName email");

    if (!investor) {
      return res.status(404).json({
        success: false,
        message: "Investor not found",
      });
    }

    res.json({
      success: true,
      investor,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Update Investor
export const updateInvestor = async (req, res) => {
  try {

    const investor = await Investor.findById(req.params.id);

    if (!investor) {
      return res.status(404).json({
        success: false,
        message: "Investor not found",
      });
    }

    if (investor.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const updatedInvestor = await Investor.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      success: true,
      message: "Investor updated successfully",
      investor: updatedInvestor,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Investor
export const deleteInvestor = async (req, res) => {
  try {

    const investor = await Investor.findById(req.params.id);

    if (!investor) {
      return res.status(404).json({
        success: false,
        message: "Investor not found",
      });
    }

    if (investor.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    await investor.deleteOne();

    res.json({
      success: true,
      message: "Investor deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};