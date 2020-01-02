const mongoose = require('mongoose');
const Cryptr = require('cryptr');

const cryptr = new Cryptr(process.env.SECRET_KEY);
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    get: v => cryptr.decrypt(v),
    set: v => cryptr.encrypt(v),
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Note', NoteSchema);
