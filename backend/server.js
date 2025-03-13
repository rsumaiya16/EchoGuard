const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();
const cors = require("cors");

connectDB();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("EchoGuard Backend Running!");
});

// Start the Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
