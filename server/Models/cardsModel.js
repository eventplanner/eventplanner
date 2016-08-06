var mongoose = require('mongoose');

var CardsSchema = new mongoose.Schema({
  type : String,
  photo : String,
  // users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

var Cards=mongoose.model('Cards', CardsSchema);

module.exports = Cards;