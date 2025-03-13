require("dotenv").config();
const twilio = require("twilio");

// Load credentials from .env
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send an SMS alert
const sendAlert = async (to, message) => {
  try {
    const response = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Twilio number
      to: to, // Recipient's number (Emergency contact)
    });
    console.log("🚀 SMS Sent:", response.sid);
    return response.sid;
  } catch (error) {
    console.error("❌ SMS Error:", error.message);
    throw error;
  }
};

module.exports = { sendAlert };
