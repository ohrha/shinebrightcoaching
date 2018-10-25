var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');
var bcrypt = require('bcryptjs');

var DateSchema = new Schema({

   
    name: {type:String,dropDups:true},
    date: {type:Number},
    month:{type:String},
    eight: {type:Object, required:true },
    nine: {type:Array, required:true },
    twenty: {type:Array, required:true },
    thirty: {type:Array, required:true },
    fourty: {type:Array, required:true },
    fifty: {type:Array, required:true },
   

    7: {type:Array, required:true },
    8: {type:Array, required:true }
    
    


})


module.exports = mongoose.model('Date', DateSchema);

var Date = mongoose.model('Date', DateSchema);