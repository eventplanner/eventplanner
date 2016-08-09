
var path = require('path');
var expect = require('chai').expect;

var server = require(path.join(__dirname, '..', './server/server.js'));
var eventsItemsController = require(path.join(__dirname, '..', '../eventplanner/server/eventsItems/eventsItemsController.js'));

describe('eventsItemsController', function () {
  'use strict';

  it('have function getallEventsItems', function () {
    expect(eventsItemsController.getallEventsItems).to.be.a('function');
  });

  it('have function getEventItems', function () {
    expect(eventsItemsController.getEventItems).to.be.a('function');
  });  
 
});