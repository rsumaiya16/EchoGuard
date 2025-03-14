const express = require("express");
const User = require("../models/User"); 
const { sendAlert } = require("../config/twilioService"); 

const router = express.Router();

// @route   POST /api/users
// @desc    Register a new user & send emergency alert
router.post("/signup", async (req, res) => {

  try {
    const { name, email, contact, emergencyContact, password } = req.body;

    if (!name || !email || !contact || !emergencyContact || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, contact, emergencyContact, password });
    await newUser.save();

    
    const alertMessage = `🚨 Alert from EchoGuard! ${name} has registered and set you as their emergency contact. Stay alert!`;
    await sendAlert(emergencyContact, alertMessage);

    res.status(201).json({ message: "User registered successfully & SMS sent!", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// @route   GET /api/users
// @desc    Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// @route   POST /api/users/login
// @desc    Authenticate user (Login)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please enter email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email,
        contact: user.contact,
        emergencyContact: user.emergencyContact,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = router;
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");  // Importing JWT
// const User = require("../models/User"); // Import User model
// const { sendAlert } = require("../config/twilioService"); // Import SMS function

// const router = express.Router();

// // @route   POST /api/users/signup
// // @desc    Register a new user & send emergency alert
// router.post("/signup", async (req, res) => {
//   try {
//     const { name, email, contact, emergencyContact, password } = req.body;

//     if (!name || !email || !contact || !emergencyContact || !password) {
//       return res.status(400).json({ message: "Please fill all fields" });
//     }

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ name, email, contact, emergencyContact, password: hashedPassword });
//     await newUser.save();

//     // ✅ Send emergency alert SMS to the emergency contact
//     const alertMessage = `🚨 Alert from EchoGuard! ${name} has registered and set you as their emergency contact. Stay alert!`;
//     await sendAlert(emergencyContact, alertMessage);

//     // Create JWT token
//     const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(201).json({ message: "User registered successfully & SMS sent!", token, user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// });

// // @route   POST /api/users/login
// // @desc    Authenticate user (Login)
// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Please enter email and password" });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Compare the hashed password in DB with the input password
//     const isMatch = await bcrypt.compare(password, user.password);  // Compare password
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Create JWT token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//     res.status(200).json({
//       message: "Login successful",
//       token,  // Send the token to the frontend
//       user: {
//         name: user.name,
//         email: user.email,
//         contact: user.contact,
//         emergencyContact: user.emergencyContact,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// });

// module.exports = router;
