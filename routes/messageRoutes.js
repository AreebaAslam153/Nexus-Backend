import express from "express";
import {
  sendMessage,
  getInbox,
  getSentMessages,
  markAsRead,
  deleteMessage,
} from "../controllers/messageController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected Routes
router.post("/", protect, sendMessage);
router.get("/inbox", protect, getInbox);
router.get("/sent", protect, getSentMessages);
router.put("/:id/read", protect, markAsRead);
router.delete("/:id", protect, deleteMessage);

export default router;