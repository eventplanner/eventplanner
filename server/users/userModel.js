var Q = require('q');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;

//user db table 
var UserSchema = new mongoose.Schema({
	userName: {type: String},
  password: {type: String},
  country: {type: String},
  email: {type: String},
  gender: {type: String},
  phoneNumber: {type: String},
  //need events type to connect between user and events type
  //every user have many events
  eventsType : [{ type: Schema.Types.ObjectId, ref: 'eventsType', unique: true}]
});
var User = mongoose.model('User' , UserSchema);
//compare password 
User.comparePassword = function(candidatePassword, savedPassword, res, cb){
  bcrypt.compare( candidatePassword, savedPassword, function(err, isMatch){
    if(err){
      res.status(500).send('Error');
    } else if(cb){
      cb(isMatch);
    }
  });
};
//findOne , findAll is a query function

UserSchema.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = User;
