import express from "express";
import { getAppStatus } from "../controllers/appStatus.js";

const router = express.Router();
router.get("/", getAppStatus);
export default router;
