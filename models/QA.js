import mongoose from "mongoose";
import QAInteractionSchema from "./QAInteraction.js";

const QASchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    interactions: [QAInteractionSchema],
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
QASchema.virtual("totalInteractions").get(function () {
  return this.interactions.length;
});

const QA = mongoose.model("QA", QASchema);
export default QA;
