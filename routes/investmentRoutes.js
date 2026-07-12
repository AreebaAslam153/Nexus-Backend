import express from "express";
import {
  createInvestment,
  getMyInvestments,
  getStartupInvestments,
  approveInvestment,
  rejectInvestment,
  deleteInvestment,
} from "../controllers/investmentController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected Routes
router.post("/", protect, createInvestment);
router.get("/", protect, getMyInvestments);
router.get("/startup/:startupId", protect, getStartupInvestments);
router.put("/:id/approve", protect, approveInvestment);
router.put("/:id/reject", protect, rejectInvestment);
router.delete("/:id", protect, deleteInvestment);

export default router;