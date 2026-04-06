// src/models/User.js
const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: {
//     type: String,
//     unique: true
//   },
//   password: String,
//   role: {
//     type: String,
//     enum: ["customer", "admin"],
//     default: "customer"
//   }
// }, { timestamps: true });
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    enum: ["customer", "admin"],
    default: "customer"
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);