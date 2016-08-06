var mongoose = require('mongoose');

var FlowersDecorSchema = new mongoose.Schema({
  type : String,
  photo : String,
  // users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

var FlowersDecor=mongoose.model('FlowersDecor', FlowersDecorSchema);

module.exports = FlowersDecor;