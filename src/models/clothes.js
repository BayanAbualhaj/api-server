'use strict';

const mongoose = require('mongoose');

const clothesSchema= new mongoose.Schema({
  type:{type: String, required:true},
  size: {type: String}
});

const clothesModel = mongoose.model('clothes',clothesSchema);


module.exports=clothesModel;

