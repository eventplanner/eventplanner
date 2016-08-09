var EventsType=require('./eventsTypeModel.js');
// var User=require('../users/userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

var findEvent = Q.nbind(EventsType.findOne, EventsType);
var findAllEvents = Q.nbind(EventsType.find, EventsType);

module.exports ={

	getallEvents : function (req,res,next) {
		findAllEvents()
			.then(function (events) {
				res.json(events);
			})
			.fail(function (err) {
				res.send(err)
			})
	},

  	getEvent : function (req,res,next) {

  		// console.log(req.params.id);
  		 var eventName=req.body.eventName;
  		 findEvent({eventName:eventName}, function(err, doc) {
  			if(err){
  				res.status(500).send(err);
  			}
		 	    res.status(200).send(doc);
		});
  		
  	}
  }