
var path = require('path');
var expect = require('chai').expect;

var server = require(path.join(__dirname, '..', './server/server.js'));
var userController = require(path.join(__dirname, '..', '../eventplanner/server/users/userController.js'));

describe('userController', function () {
  'use strict';

  it('have function signin', function () {
    expect(userController.signin).to.be.a('function');
  });

  it('have function signup', function () {
    expect(userController.signup).to.be.a('function');
  });  
  it('have function checkAuth', function () {
    expect(userController.checkAuth).to.be.a('function');
  });  
  it('have function getUser', function () {
    expect(userController.getUser).to.be.a('function');
  });  
});