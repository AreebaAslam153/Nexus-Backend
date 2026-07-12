import Message from "../models/Message.js";

// Send Message
export const sendMessage = async (req, res) => {
  try {

    const { receiver, message } = req.body;

    const newMessage = await Message.create({
      sender: req.user._id,
      receiver,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newMessage,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Inbox
export const getInbox = async (req, res) => {
  try {

    const messages = await Message.find({
      receiver: req.user._id,
    })
      .populate("sender", "fullName email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: messages.length,
      messages,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Get Sent Messages
export const getSentMessages = async (req, res) => {
  try {

    const messages = await Message.find({
      sender: req.user._id,
    })
      .populate("receiver", "fullName email")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: messages.length,
      messages,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Mark Message as Read
export const markAsRead = async (req, res) => {
  try {

    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );

    res.json({
      success: true,
      message: "Message marked as read",
      data: message,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// Delete Message
export const deleteMessage = async (req, res) => {
  try {

    await Message.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Message deleted successfully",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};