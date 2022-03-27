const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    title: {
      type: String,
      trim: true,
      required: true
    },
    amount: {
      type: Number,
      trim: true,
      required: true
    },
    date: {
      type: Date,
      default: Date.now,
      required: true
    }
})

const User = mongoose.model('User', userSchema)


/*
const User = mongoose.model('User', {
  name: {
      type: String,
      required: true,
      trim: true
  }, 
  email: {
      type: String, 
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
          if (!validator.isEmail(value)) {
              throw new Error('Email is invalid')
          }
      }
  }
});
*/

module.exports = User;