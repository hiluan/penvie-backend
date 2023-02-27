import mongoose from "mongoose";

const GrammarCorrectionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    interactions: [GrammarCorrectionInteractionSchema],
    status: {
      type: String,
      enum: ["pending", "completed", "archived"],
      default: "pending",
      required: true,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
    },
  },
  { timestamps: true }
);

// using a virtual property to get the total number of interactions for a QA object. This can be useful when displaying the number of interactions to the user.
GrammarCorrectionSchema.virtual("totalInteractions").get(function () {
  return this.interactions.length;
});

const GrammarCorrection = mongoose.model(
  "GrammarCorrection",
  GrammarCorrectionSchema
);
export default GrammarCorrection;
