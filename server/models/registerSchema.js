const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  phonenumber: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", registerSchema);
module.exports = User;
