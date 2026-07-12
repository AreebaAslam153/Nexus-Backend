import Startup from "../models/Startup.js";

export const createStartup = async (req, res) => {
  try {
    const { startupName, description, industry, website, logo } = req.body;

    const startup = await Startup.create({
      startupName,
      description,
      industry,
      website,
      logo,
      owner: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Startup created successfully",
      startup,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getAllStartups = async (req, res) => {
  try {
    const { industry, keyword } = req.query;

    const filter = {};

    // Filter by industry
    if (industry) {
      filter.industry = industry;
    }

    // Search by startup name
    if (keyword) {
      filter.startupName = {
        $regex: keyword,
        $options: "i",
      };
    }

    const startups = await Startup.find(filter)
      .populate("owner", "fullName email");

    res.status(200).json({
      success: true,
      count: startups.length,
      startups,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getStartupById = async (req, res) => {
  try {

    const startup = await Startup.findById(req.params.id)
      .populate("owner", "fullName email");

    if (!startup) {
      return res.status(404).json({
        success: false,
        message: "Startup not found",
      });
    }

    res.status(200).json({
      success: true,
      startup,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const updateStartup = async (req, res) => {
  try {

    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      return res.status(404).json({
        success: false,
        message: "Startup not found",
      });
    }

    // Check ownership
    if (startup.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    const updatedStartup = await Startup.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Startup updated successfully",
      startup: updatedStartup,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const deleteStartup = async (req, res) => {
  try {

    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      return res.status(404).json({
        success: false,
        message: "Startup not found",
      });
    }

    // Only owner can delete
    if (startup.owner.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        success: false,
        message: "Not authorized",
      });
    }

    await startup.deleteOne();

    res.status(200).json({
      success: true,
      message: "Startup deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};