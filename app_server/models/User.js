const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  signUpDate: {
    type: Date,
    default: Date.now
  },
  dob: {
    type: Date
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  accountType: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', UserSchema)
module.exports = User;
