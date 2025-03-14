const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");
const twilio = require("twilio");


const accountSid = process.env.TWILIO_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;


connectDB();
const app = express();


app.use(cors());
app.use(express.json());


const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.post("/api/emergency-alert", async (req, res) => {
  try {
    const { userContact, emergencyContact } = req.body;

    if (!userContact || !emergencyContact) {
      return res.status(400).json({ message: "Missing user or emergency contact number." });
    }

 
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


app.get("/", (req, res) => {
  res.send("EchoGuard Backend Running!");
});


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
// const express = require("express");
// const connectDB = require("./config/db");
// require("dotenv").config();
// const cors = require("cors");

// // ✅ Import Twilio Service
// const { sendAlert } = require("./config/twilioService");

// // Connect to MongoDB
// connectDB();
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// const userRoutes = require("./routes/userRoutes");
// app.use("/api/users", userRoutes);

// // ✅ Emergency Alert Route (Using Twilio Service)
// app.post("/api/emergency-alert", async (req, res) => {
//   try {
//     console.log("📥 Incoming request:", req.body); // Debugging log

//     const { userContact, emergencyContact } = req.body;
//     if (!userContact || !emergencyContact) {
//       return res.status(400).json({ message: "Missing user or emergency contact number." });
//     }

//     // ✅ Send SMS using the Twilio service
//     const messageId = await sendAlert(emergencyContact, `🚨 Emergency Alert! User at ${userContact} needs help!`);
    
//     console.log("✅ SMS Sent! Message ID:", messageId);
//     res.status(200).json({ message: "🚨 Emergency SMS sent successfully!" });

//   } catch (error) {
//     console.error("❌ Twilio Error:", error.message);
//     res.status(500).json({ message: "Failed to send emergency alert", error: error.message });
//   }
// });

// // Test Route
// app.get("/", (req, res) => {
//   res.send("EchoGuard Backend Running!");
// });

// // Start the Server
// const PORT = process.env.PORT || 5001;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
