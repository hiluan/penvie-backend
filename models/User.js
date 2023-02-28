import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, min: 1, max: 100 },
    email: { type: String, require: true, unique: true },
    age: Number,
    gender: String,
    avatar: String,
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    defaultCategory: String,
    qa: Array,
    grammarCorrection: Array,
    writeEssay: Array,
    writeEmail: Array,
    roles: {
      type: String,
      enum: ["user", "mod", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
