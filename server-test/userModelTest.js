var chai = require('chai');
var expect = chai.expect;
var Users = require('../server/users/userModel.js');

// Adds support for assertions on array elements
// https://github.com/chaijs/Chai-Things#examples
chai.use(require('chai-things'));


describe('Users Model', function () {
  var testUsers;

  beforeEach(function () {
    testUsers = [
    {
      userName: 'maryam',
      password:1234,
      country:'jordan',
      email:'n@yahoo.com',
      gender:'female',
      phoneNumber:0789
    },
    {
      userName: 'mary',
      password:1234,
      country:'jordan',
      email:'nn@yahoo.com',
      gender:'female',
      phoneNumber:0789
    }
    ];

    Users.setAll(testUsers);
  });
  

});
