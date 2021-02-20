const mongoose = require('mongoose');
mongoose.set('debug', true);
const AuthorSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  username: { type: String, required: true },
  about: { type: String, required: true },
  submitted: { type: Number, required: true },
  updated_at: { type: Date, default: Date.now },
  submission_count: { type: Number, required: true },
  comment_count: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

const Author = mongoose.model('article_users', AuthorSchema);

module.exports = { Author };
