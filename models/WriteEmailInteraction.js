import mongoose from "mongoose";

const WriteEmailInteractionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    writeEmailId: {
      type: mongoose.Types.ObjectId,
      ref: "WriteEmail",
      required: true,
      index: true, // add an index to the writeEmailId field
    },
    prompt: {
      type: String,
      required: true,
    },
    wordLimit: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return value > 0 && value <= 5000; // set the maximum word limit to 5000
        },
        message:
          "Word limit must be greater than 0 and less than or equal to 5000.",
      },
    },
    tokens: {
      // cost of this interaction
      type: Number,
      require: true,
    },
    response: {
      type: String,
      required: true,
    },
    wordCount: {
      type: Number,
      required: true,
    },
    characterCount: {
      type: Number,
      required: true,
    },
    confidence: {
      type: Number,
      required: true,
    },
    isResponsed: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: "Vietnamese",
      required: true,
    },
    engine: {
      type: String,
      default: "text-davinci-003",
      required: true,
    },
    maxTokens: {
      type: Number,
      default: 1000,
      required: true,
    },
    temperature: {
      type: Number,
      default: 0.8,
      required: true,
    },
    topP: {
      type: Number,
      default: 1,
      required: true,
    },
    frequencyPenalty: {
      type: Number,
      default: 0.6,
      required: true,
    },
    presencePenalty: {
      type: Number,
      default: 0.3,
      required: true,
    },
  },
  {
    timestamps: true,
    index: { userId: 1, qaId: 1 }, // add an index on the userId and qaId fields for faster lookups
  }
);

const WriteEmailInteraction = mongoose.model(
  "WriteEmailInteraction",
  WriteEmailInteractionSchema
);
export default WriteEmailInteraction;
