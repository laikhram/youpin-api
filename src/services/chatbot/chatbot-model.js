const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: { type: String, required: true },
  platform: { type: String, required: true },
  created_time: { type: Date, default: Date.now },
  updated_time: { type: Date, default: Date.now },
  display_name: { type: String },
  picture: { type: String },

  // Line
  is_unfollow: { type: Boolean },
});

const Chatbot = mongoose.model('Chatbot', userSchema);

module.exports = Chatbot;
