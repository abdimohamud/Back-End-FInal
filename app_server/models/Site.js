const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SiteSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  userCount: {
    type: String,
    required: true
  },
  songCount: {
    type: String,
    required: true
  }
});

const Site = mongoose.model('Site', SiteSchema)
module.exports = Site;
