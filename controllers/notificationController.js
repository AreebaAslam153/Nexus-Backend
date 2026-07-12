import Notification from "../models/Notification.js";

// Create Notification
export const createNotification = async (req, res) => {
  try {

    const { user, title, message } = req.body;

    const notification = await Notification.create({
      user,
      title,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Notification created successfully",
      notification,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get My Notifications
export const getMyNotifications = async (req, res) => {
  try {

    const notifications = await Notification.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: notifications.length,
      notifications,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Mark Notification as Read
export const markNotificationRead = async (req, res) => {
  try {

    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    res.json({
      success: true,
      message: "Notification marked as read",
      notification,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Notification
export const deleteNotification = async (req, res) => {
  try {

    await Notification.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Notification deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};