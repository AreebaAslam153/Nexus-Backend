import express from "express";
import {
  createInvestor,
  getInvestors,
  getInvestorById,
  updateInvestor,
  deleteInvestor,
} from "../controllers/investorController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// Public Routes
router.get("/", getInvestors);
router.get("/:id", getInvestorById);

// Protected Routes
router.post("/", protect, createInvestor);
router.put("/:id", protect, updateInvestor);
router.delete("/:id", protect, deleteInvestor);

export default router;