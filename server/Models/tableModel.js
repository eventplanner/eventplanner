var mongoose = require('mongoose');

var TablesSchema = new mongoose.Schema({
  Desc : {
  	type : String,
  	required : true
  },
  type : String,
  photo : String,
  // users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

var Table=mongoose.model('Table', TablesSchema);

module.exports = Table;