var Q = require('q');
var mongoose = require('mongoose');

var bcrypt = require('bcrypt-nodejs');
var SALT_WORK_FACTOR = 10;
var Schema = mongoose.Schema;


var UserSchema = new mongoose.Schema({
	userName: {
    type: String,
    required: true,
  },
  password: {
    type: String
  },
  Country: {
  	type: String
  },
  email: {
  	type: String
  },
  dateOfBirth: {
  	type: String
  },
  gender: {
  	type: String
  },
  phoneNumber: {
  	type: String
  },
  salt: String,
//which event will choose
  eventsType : [{ type: Schema.Types.ObjectId, ref: 'EventType' }]

});

// var User=mongoose.model('User', UserSchema);



// User.comparePasswords = function (candidatePassword) {
//   var savedPassword = this.password;
//   return Q.Promise(function (resolve, reject) {
//     bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(isMatch);
//       }
//     });
//   });
// };


var User = mongoose.model('User' , UserSchema);
User.comparePassword = function(candidatePassword, savedPassword, res, cb){
  bcrypt.compare( candidatePassword, savedPassword, function(err, isMatch){
    if(err){
      res.status(500).send('Error');
    } else if(cb){
      cb(isMatch);
    }
  });
};


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


// var newUser=new User({
//   userName : 'tawfik'
// });

// newUser.save(function (err,newEntry) {
//   console.log(newEntry);
// })
module.exports = User;
