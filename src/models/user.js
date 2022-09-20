const mongoose = require('mongoose');
const Book = require('../models/book');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
  },
  username: {
    type: String,
    required: true,
    minlength: 5,
  },
});

module.exports = mongoose.model('users', userSchema);
