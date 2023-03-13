import mongoose from "mongoose";
import EssayChatSchema from "./EssayChat.js";

const EssaySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalTokens: {
      // cost of all chats of this conversation
      type: Number,
      required: true,
    },
    chats: {
      type: Array,
    },
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
    finalEssay: {
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

// using a virtual property to get the total number of chats for a QA object. This can be useful when displaying the number of chats to the user.
EssaySchema.virtual("totalInteractions").get(function () {
  return this.chats.length;
});

const Essay = mongoose.model("Essay", EssaySchema);
export default Essay;
