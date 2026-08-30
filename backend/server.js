require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const PORT = process.env.PORT || 5050;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/registration_db";

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Successfully connected to MongoDB database!");
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Server is working and connected to MongoDB!");
});

app.get("/pookie", (req, res) => {
  res.send("Pookie Murali");
});

app.get("/pookie/murali", (req, res) => {
  res.send("Pookie kittu");
});

// Registration endpoint - Save user to MongoDB
app.post("/register", async (req, res) => {
  const { fname, lname, email, phone, password, date, gender } = req.body;

  // Basic validation
  if (!fname || !lname || !email || !password) {
    return res.status(400).json({ error: "First name, last name, email, and password are required." });
  }

  try {
    // Check if user already exists with this email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "This email is already registered. Please use another email." });
    }

    // Create and save new user in MongoDB
    const newUser = await User.create({
      fname,
      lname,
      email,
      phone,
      password, // In production, hash with bcrypt!
      date,
      gender: gender || "Male",
    });

    console.log("✅ New user registered in MongoDB:", newUser.email);

    res.status(201).json({
      message: "User registered successfully!",
      user: {
        id: newUser._id,
        fname: newUser.fname,
        lname: newUser.lname,
        email: newUser.email,
        phone: newUser.phone,
        date: newUser.date,
        gender: newUser.gender,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error("❌ Error registering user:", error.message);
    res.status(500).json({ error: "Internal server error. Could not register user." });
  }
});

// View all registered users in MongoDB
app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(allUsers);
  } catch (error) {
    console.error("❌ Error fetching users:", error.message);
    res.status(500).json({ error: "Could not fetch users from database." });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server Running on http://localhost:${PORT}`);
});
