import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { openai } from "../index.js";
import { newChat } from "../controllers/chat.js";

dotenv.config();
const router = express.Router();

// routes for chatGPT:
router.post("/", newChat);

export default router;
