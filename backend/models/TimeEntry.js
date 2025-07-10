const mongoose = require('mongoose');

const timeEntrySchema = new mongoose.Schema({
  domain: String,
  timeSpent: Number,
  category: String,
  timestamp: Date
});

module.exports = mongoose.model('TimeEntry', timeEntrySchema);