const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
  },
  password: {
    type: String,
    required:true,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },

  role: {
    type: String,
    default: 'user',
    required:true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

});
var userModel = mongoose.model('USERS', userSchema);
module.exports = userModel;