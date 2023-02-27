import mongoose from "mongoose";

const GrammarCorrectionInteractionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    grammarCorrectionId: {
      type: mongoose.Types.ObjectId,
      ref: "GrammarCorrection",
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      required: true,
    },
    errorLocation: {
      type: String,
      required: false,
    },
    correction: {
      type: String,
      required: false,
    },
    confidence: {
      type: Number,
      required: true,
    },
    isResponsed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    index: { userId: 1, qaId: 1 }, // add an index on the userId and qaId fields for faster lookups
  }
);

const GrammarCorrectionInteraction = mongoose.model(
  "GrammarCorrectionInteraction",
  GrammarCorrectionInteractionSchema
);
export default GrammarCorrectionInteraction;
