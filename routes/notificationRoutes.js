import express from "express";
import {
  createNotification,
  getMyNotifications,
  markNotificationRead,
  deleteNotification,
} from "../controllers/notificationController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected Routes
router.post("/", protect, createNotification);
router.get("/", protect, getMyNotifications);
router.put("/:id/read", protect, markNotificationRead);
router.delete("/:id", protect, deleteNotification);

export default router;