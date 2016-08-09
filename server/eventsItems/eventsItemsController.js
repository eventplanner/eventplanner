var EventsItems=require('./eventsItemsModel.js');
// var User=require('../users/userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

var findItem = Q.nbind(EventsItems.findOne, EventsItems);
var findAllEventsItems = Q.nbind(EventsItems.find, EventsItems);

module.exports ={

	getallEventsItems : function (req,res,next) {
		findAllEventsItems({})
			.then(function (Items) {
				res.json(Items);
			})
			.fail(function (err) {
			})
	},

  	getEventItems : function (req,res,next) {
  		 var itemName=req.body.itemName;
  		 findEvent({itemName:itemName}, function(err, doc) {
  			if(err){
  				res.status(500).send(err);
  			}
		 	    res.status(200).send(doc);
		});
  		
  	}
  }