const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
    name : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true
    },

    trips_count : {
        type : Number,
        required : true
    },

    time_period : {
        type : Number,
        required : true
    },

    price : {
        type : Number,
        requird : true
    }


});


const Packages = mongoose.model("Package", packageSchema);

module.exports = Packages;
