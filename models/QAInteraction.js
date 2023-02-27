const QAInteractionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    qaId: {
      type: mongoose.Types.ObjectId,
      ref: "QA",
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
    // add an index on the userId and qaId fields for faster lookups
    index: { userId: 1, qaId: 1 },
  }
);

const QAInteraction = mongoose.model("QAInteraction", QAInteractionSchema);
export default QAInteraction;
