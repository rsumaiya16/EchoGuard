const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const twilio = require("twilio");

// Twilio Credentials (Make sure these are in your .env file)
const accountSid = process.env.TWILIO_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

// Connect to MongoDB
connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// ✅ Emergency Alert Route (SMS Sending)
app.post("/api/emergency-alert", async (req, res) => {
  try {
    const { userContact, emergencyContact } = req.body;

    if (!userContact || !emergencyContact) {
      return res.status(400).json({ message: "Missing user or emergency contact number." });
    }

    // ✅ Send SMS via Twilio
    await twilioClient.messages.create({
      body: `🚨 Emergency Alert! User at ${userContact} needs help!`,
      from: twilioPhoneNumber,
      to: emergencyContact,
    });

    res.status(200).json({ message: "🚨 Emergency SMS sent successfully!" });
  } catch (error) {
    console.error("Twilio Error:", error);
    res.status(500).json({ message: "Failed to send emergency alert", error: error.message });
  }
});

// Test Route
app.get("/", (req, res) => {
  res.send("EchoGuard Backend Running!");
});

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
