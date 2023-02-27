import express from "express";
import {
  postQA,
  postCodex,
  postEssayOutline,
  postCreateStudyNotes,
  postGrammarCorrection,
  postAdFromProductDesc,
  postTranslateProgrammingLanguages,
} from "../controllers/gpt";
const router = express.Router();

router.post("/qa", postQA);
router.post("/codex", postCodex);
router.post("/essay-outline", postEssayOutline);
router.post("/create-study-notes", postCreateStudyNotes);
router.post("/grammar-correction", postGrammarCorrection);
router.post("/ad-from-product-description", postAdFromProductDesc);
router.post(
  "/translate-programming-languages",
  postTranslateProgrammingLanguages
);

export default router;
