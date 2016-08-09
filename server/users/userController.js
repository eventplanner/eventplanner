 var User=require('./userModel.js');
      Q = require('q');
      jwt = require('jwt-simple');

  // Promisify a few mongoose methods with the `q` promise library
  var findUser = Q.nbind(User.findOne, User);
  // var createUser = Q.nbind(User.create, User);
  var findAllusers = Q.nbind(User.find, User);

  module.exports = {
    //Sign In Function 
    signin: function (req, res) {
      var username = req.body.username;
      var password = req.body.password;
      // console.log('farah')
      User.findOne({userName: username})//find the user is inside database or not
        .exec(function (error, user) {//go db check
          if(error){
            console.log(error);
            res.status(500).send(error);
          } else if (!user) {
            res.status(500).send(new Error('User does not exist'));
          } else {
            console.log('hi')
            User.comparePassword(password,user.password, res, function(found){
              if(!found){
                res.status(500).send('Wrong Password');
              } else {//what retrieve 
                var token = jwt.encode(user, 'secret');
                res.setHeader('x-access-token',token);
                // res.json();
                res.status(200);
                res.end({token: token, id : user.id})
              }
            });
          }
        });
    },  

   //Sign Up Function to register in site
    signup : function(req, res) {
      var username = req.body.username;
      var password = req.body.password;
      var email = req.body.email;
      var gender = req.body.gender;
      var phoneNumber = req.body.phoneNumber;
      var country = req.body.country;

      User.findOne({ userName: username })
        .exec(function(err, user) {
          if (!user) {
            var newUser = new User({
              userName: username,
              password: password,
              email: email,
              country: country,
              gender: gender,
              phoneNumber: phoneNumber
            });
            newUser.save(function(err, newuser) {
              if(err){
                res.status(500).send(err)
              } else{
                  console.log(newUser)
                 res.status(201).send(newuser)
               }
            });
          } else {
            console.log(user)
            console.log('Account already exists');
            res.redirect('/signup');
          }
        });
    },

   // checking to see if the user is authenticated
    checkAuth: function (req, res, next) {

      var token = req.headers['x-access-token'];
      if (!token) {
        next(new Error('No token'));
      } else {
        var user = jwt.decode(token, 'secret');
        findUser({username: user.username})
          .then(function (foundUser) {
            if (foundUser) {
              res.send(200);
            } else {
              res.send(401);
            }
          })
          .fail(function (error) {
            next(error);
          });
      }
    },


    getUser : function (req,res,next) {
      
      console.log(req.params.id);
      var id=(req.params.id).toString();
      User.findOne({_id : id}, function (err , user) {
        if(err)
          res.status(500).send(err);
        res.json(user);
      })
    }   

  };
