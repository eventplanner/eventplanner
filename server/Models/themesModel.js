var mongoose = require('mongoose');

var ThemesSchema = new mongoose.Schema({
  Desc : {
  	type : String,
  	required : true
  },
  type : String,
  photo : String,
  // users : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

var Themes=mongoose.model('Themes', ThemesSchema);

module.exports = Themes;