var mongoose = require('mongoose');

var CakeSchema = new mongoose.Schema({
  Desc : {
  	type : String,
  	required : true
  },
  type : String,
  photo : String,
  // users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

var Cake=mongoose.model('Cake', CakeSchema);

module.exports = Cake;