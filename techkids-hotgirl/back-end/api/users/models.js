// user models
// email (uniq)
// password
// fbId
// fistName
// lastName
// avatarUrl
// createdAt
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  fbId: String,
  fistName: String,
  lastName: String,
  avatarUrl: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;