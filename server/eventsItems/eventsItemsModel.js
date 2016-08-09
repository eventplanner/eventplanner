var Q = require('q');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//user db table 
var EventsItemsSchema = new mongoose.Schema({
 itemName: {type: String},
  itemNumber: [{type: String}],
  itemDesc: [{type: String}],
  itemPhoto: [{type: String}]
  //chose array because i have many items inside page example: for each cake page i have 30photos and description and numbers
});
var eventsItems = mongoose.model('eventsItems' , EventsItemsSchema);
