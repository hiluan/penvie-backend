import express from "express";
import { postReply } from "../controllers/generate";
const router = express.Router();

router.post("/", postReply);
export default router;
