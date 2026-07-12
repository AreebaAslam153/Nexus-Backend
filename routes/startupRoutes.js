import express from "express";
import {
  createStartup,
  getAllStartups,
  getStartupById,
  updateStartup,
  deleteStartup
} from "../controllers/startupController.js";
import protect from "../middleware/authMiddleware.js";
import authorizeRoles from "../middleware/roleMiddleware.js";

const router = express.Router();

router.get("/", getAllStartups);
router.get("/:id", getStartupById);
router.post(
  "/",
  protect,
  authorizeRoles("entrepreneur"),
  createStartup
);
// router.post("/", protect, createStartup);
router.put("/:id", protect, updateStartup);
router.delete("/:id", protect, deleteStartup);

export default router;