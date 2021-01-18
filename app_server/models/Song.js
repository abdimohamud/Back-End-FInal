const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SongSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  ownerID: {
    type: String,
    required: true
  },
  producerName: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  likeCount: {
    type: String,
    default: '0'
  }
});

const Song = mongoose.model('Song', SongSchema)
module.exports = Song;
