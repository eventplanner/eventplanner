var Cake=require('../Models/cakeModel.js');
var User=require('../users/userModel.js');
var Q = require('q');
var jwt = require('jwt-simple');

var findCake = Q.nbind(Cake.findOne, Cake);
var findAllCakes = Q.nbind(Cake.find, Cake);

module.exports ={
//get wedding cakes
	allCakes : function (req,res,next) {
		var event=req.body.event;
		findAllCakes({eventType:event})
			.then(function (cakes) {
				res.json(cakes);
			})
			.fail(function (err) {
				//next(err);
			})
	},

//just admin can upload photo inside cake page 
//so when admin log in 
	newCake: function (req, res, next) {
		console.log("enter")
		
	  	var tempCake = {
	  		 desc : req.body.desc,
	  		 number:req.body.number,
			 photo : req.body.photo
	  	}
      addCake(tempCake)
        .then(function (cakeAdded) {
            if (cakeAdded) {
              console.log('cakeAdded');
              console.log(cakeAdded);
              res.json(cakeAdded);
            }
          })
          .fail(function (error) {
            next(error);
          });

    },

  	//Test : Get
  	//http://127.0.0.1:8000/api/cake/5790db44f97a940c03550a89

  	getCake : function (req,res,next) {
  		 console.log(req.params.id);
  		 var id=(req.params.id).toString();

  		Cake.findOne({_id: id}, function(err, doc) {
  			if(err)
  				res.status(500).send(err);
		  res.status(200).send(doc);
		});
  		
  	},

  	// Test : Post
  	// http://127.0.0.1:8000/api/applyCake
  	// body :
 	// {
	//   "userId" : "5791c28d6b44ec0c052b6c79",
	//   "eventId" : "5791c53e990f8c9c16839fbd"
	// }

  	applyCake :function (req , res , next) {
  		var userId=req.body.userId.toString();
  		var eventType=req.body.eventType;
  		User.update({ _id: userId },{ $pull: { events: eventType } },function(err) {if(err) console.log(err)});
  		User.update({ _id: userId },{ $push: { events: eventType } }
  			, function (err) {
  				if(err)
  					console.log(err);
  				else
  					console.log('add it');
  			});
  		Cake.update({ _id: eventType },{ $pull: { users: userId } },function(err) {if(err) console.log(err)});
  		Cake.findOneAndUpdate({ _id: eventType },{ $push: { users: userId } } , { new : true}
  			, function (err , event) {
  				if(err)
  					console.log(err);
  				else{
  					console.log('add it');
  					res.json(event);
  				}
  			});

	}

}