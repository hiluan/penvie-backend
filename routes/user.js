import express from "express";
import {
  getAccount,
  updateAccount,
  deleteAccount,
  getMails,
  getMail,
  updateMail,
  deleteMail,
  getPreferences,
  updatePreferences,
  getSubscriptions,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
} from "../controllers/user.js";

const router = express.Router();
router.get("/history");

// - Routes for the user's profile information, such as name, email address, and preferences.
router.get("/account", getAccount); // GET /api/v1/user/account -
router.put("/account", updateAccount); // PUT /api/v1/user/account -
router.delete("/account", deleteAccount); // DELETE /api/v1/user/account -

// - Retrieve a list of the user's email history, including the sender, subject, and other metadata.
router.get("/mails", getMails); // GET /api/v1/user/email-history -

// - Routes for a specific email from the user's email history.
router.get("/mails/:id", getMail); // GET /api/v1/user/email-history/:id -
router.put("/mails/:id", updateMail); // PUT /api/v1/user/email-history/:id
router.delete("/mails/:id", deleteMail); // DELETE /api/v1/user/email-history/:id

// - Routes for the user's preferences, such as response tone, language, and other settings.
router.get("preferences", getPreferences); // GET /api/v1/user/preferences
router.put("preferences", updatePreferences); //PUT /api/v1/user/preferences - Update the user's preferences, such as response tone, language, and other settings.

// - Routes for information about the user's subscription status, if applicable.
router.put("subscriptions", getSubscriptions); // GET /api/v1/user/subscriptions
router.post("subscriptions", createSubscriptions); // POST /api/v1/user/subscriptions - Create a new subscription for the user, if applicable.
router.update("subscriptions/:id", updateSubscriptions); // PUT /api/v1/user/subscriptions/:id - Update the user's subscription information, if applicable.
router.delete("subscriptions/:id", deleteSubscriptions); // DELETE /api/v1/user/subscriptions/:id - Cancel the user's subscription, if applicable.
