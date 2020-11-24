const mongoose = require('mongoose');
const { Schema } = mongoose;

// sets a schema for 'users'
const userSchema = new Schema({
  login: String,
  id: { type: Number, unique: true, required: true },
  avatar_url: String,
  url: String,
  html_url: String,
  name: String,
  email: String,
  public_repos: String,
  access_token: String,
  _created_at: { type: Date, default: Date.now },
  full_object: Object,
  configurations: [{ type: Schema.Types.ObjectId, ref: 'configs' }],
});

// exports all the models in an object to be used in the controller
module.exports = mongoose.model('user', userSchema);
