import express from "express";
import {
  postQA,
  postCodex,
  postEssayOutline,
  postCreateStudyNotes,
  postGrammarCorrection,
  postAdFromProductDesc,
  newEssay,
  postEmail,
  postTranslateProgrammingLanguages,
  newEssayChat,
} from "../controllers/gpt-new";
const router = express.Router();

// routes for essays
router.post("/essays", newEssay);
router.get("/essays", getEssays);
router.delete("/essays", deleteEssays);
router.get("/essays/:id", getEssay);
router.put("/essays/:id", updateEssay);
router.delete("/essays/:id", deleteEssay);

router.post("/essays/:essayId/chats", newEssayChat);

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
