const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
  password: String,
  emergencyContacts: [String], // Array of emergency contacts
});

module.exports = mongoose.model("User", userSchema);
