const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userpackageSchema = new Schema({
    userId : {
        type : String,
        required : true
    },

    packageId : {
        type : String,
        required : true
    },

    packageName:{
        type:String,
        required: true
    },

    packageDesc:{
        type:String,
        required:true
    },

    packageTime:{
        type:Number,
        required:true
    },

    packageCost:{
        type:Number,
        required:true
    }


});


const userpackage = mongoose.model("userpackage", userpackageSchema);

module.exports = userpackage;
