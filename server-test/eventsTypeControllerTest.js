
var path = require('path');
var expect = require('chai').expect;

var server = require(path.join(__dirname, '..', './server/server.js'));
var eventsTypeController = require(path.join(__dirname, '..', '../eventplanner/server/eventsType/eventsTypeController.js'));

describe('eventsTypeController', function () {
  'use strict';

  it('have function getallEvents', function () {
    expect(eventsTypeController.getallEvents).to.be.a('function');
  });

  it('have function getEvent', function () {
    expect(eventsTypeController.getEvent).to.be.a('function');
  });  
 
});