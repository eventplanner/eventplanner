var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  title : {
  	type : String,
  	required : true
  },
 
  type : String,
  photo : String,
  users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

var EventType=mongoose.model('EventType', eventSchema);


// var newEvent=new Event({
//   title : 'new Event'
// });

// newEvent.save(function (err,newEntry) {
//   console.log(newEntry);
// })

module.exports = Event;