const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  project: Object,
  _created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('project', projectSchema);
