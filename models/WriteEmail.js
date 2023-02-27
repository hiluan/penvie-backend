import mongoose from "mongoose";
import WriteEmailInteractionSchema from "./WriteEmailInteraction.js";

const WriteEmailSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalTokens: {
      // cost of all interactions of this conversation
      type: Number,
      required: true,
    },
    interactions: [WriteEmailInteractionSchema],
    finalWords: {
      // final number of words
      type: Number,
      required: true,
    },
    totalWords: {
      // total all words of this conversation
      type: Number,
      required: true,
    },
    finalCharacters: {
      // final number of characters
      type: Number,
      required: true,
    },
    totalCharacters: {
      // total all characters of this conversation
      type: Number,
      required: true,
    },
    finalEmail: {
      // final response is kept here:  ensure that the response is easily accessible to the user.
      type: String,
      required: true,
    },
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

const WriteEmail = mongoose.model("WriteEmail", WriteEmailSchema);
export default WriteEmail;
