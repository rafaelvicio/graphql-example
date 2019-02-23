const mongoose = require("../../database");

const UserSechema = new mongoose.Schema({
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    username: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
  const User = mongoose.model("User", UserSechema);
  module.exports = User;