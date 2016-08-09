var Q = require('q');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//user db table 
var EventsTypeSchema = new mongoose.Schema({
  name: {type: String},
  desc: {type: String},
  // photo: [{type: String}],
  //need events type to connect between eventsType and events items
  //every user have many events
  eventsItems : [{ type: Schema.Types.ObjectId, ref: 'eventsItems', unique: true}]
});
var EventsType = mongoose.model('EventsType' , EventsTypeSchema);
