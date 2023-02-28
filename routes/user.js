import express from "express";
import {
  getAccount,
  updateAccount,
  deleteAccount,
} from "../controllers/user.js";

const router = express.Router();
router.get("/history");

// - Routes for the user's profile information, such as name, email address, and preferences.
router.get("/account", getAccount); // GET /api/v1/user/account -
router.put("/account", updateAccount); // PUT /api/v1/user/account -
router.delete("/account", deleteAccount); // DELETE /api/v1/user/account -
