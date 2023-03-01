import express from "express";
import {
  postQA,
  postCodex,
  postEssayOutline,
  postCreateStudyNotes,
  postGrammarCorrection,
  postAdFromProductDesc,
  postEmail,
  postTranslateProgrammingLanguages,
  newEssay,
  getEssays,
  deleteEssays,
  getEssay,
  deleteEssay,
  newEssayChat,
  getEssayChats,
} from "../controllers/gpt-new";
const router = express.Router();

// routes for essays: no need update essay & essaychat
router.post("/essays", newEssay);
router.get("/essays", getEssays);
router.delete("/essays", deleteEssays);
router.get("/essays/:essayId", getEssay);
router.delete("/essays/:essayId", deleteEssay);

router.post("/essays/:essayId/chats", newEssayChat);
router.get("/essays/:essayId/chats", getEssayChats);

// router.post("/codex", postCodex);
// router.post("/qa", postQA);
// router.post("/email", postEmail);
// router.post("/essay-outline", postEssayOutline);
// router.post("/create-study-notes", postCreateStudyNotes);
// router.post("/grammar-correction", postGrammarCorrection);
// router.post("/ad-from-product-description", postAdFromProductDesc);
// router.post(
//   "/translate-programming-languages",
//   postTranslateProgrammingLanguages
// );

export default router;
