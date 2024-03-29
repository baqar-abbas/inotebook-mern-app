const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
    // title: String, // String is shorthand for {type: String}
    // author: String,
    // body: String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //   votes: Number,
    //   favs: Number
    // }
  });

  const User = mongoose.model('User', UserSchema);
  User.createIndexes();
  module.exports = User;