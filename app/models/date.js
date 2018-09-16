var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');
var bcrypt = require('bcryptjs');

var DateSchema = new Schema({

   
    name: {type:String,dropDups:true},
    date: {type:Number},
    month:{type:String},
    1: {type:Array, required:true },
    2: {type:Array, required:true },
    3: {type:Array, required:true },
    4: {type:Array, required:true },
    5: {type:Array, required:true },
    6: {type:Array, required:true },
    7: {type:Array, required:true },
    8: {type:Array, required:true }
    
    


})


module.exports = mongoose.model('Date', DateSchema);

var Date = mongoose.model('Date', DateSchema);