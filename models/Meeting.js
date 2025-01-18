const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  title: String,
  date: Date,
  clientEmail: String,
  inspectorEmail: String,
  meetingLink: String,
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
