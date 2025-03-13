const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true }, // Ensure case-insensitive emails
  contact: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", UserSchema);