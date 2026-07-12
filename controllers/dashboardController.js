import User from "../models/User.js";
import Startup from "../models/Startup.js";
import Investor from "../models/Investor.js";
import Meeting from "../models/Meeting.js";
import Document from "../models/Document.js";
import Message from "../models/Message.js";
import Notification from "../models/Notification.js";

export const getDashboardStats = async (req, res) => {
  try {

    const totalUsers = await User.countDocuments();

    const totalStartups = await Startup.countDocuments();

    const totalInvestors = await Investor.countDocuments();

    const totalMeetings = await Meeting.countDocuments();

    const totalDocuments = await Document.countDocuments();

    const totalMessages = await Message.countDocuments();

    const totalNotifications = await Notification.countDocuments();

    res.json({
      success: true,
      stats: {
        totalUsers,
        totalStartups,
        totalInvestors,
        totalMeetings,
        totalDocuments,
        totalMessages,
        totalNotifications,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};