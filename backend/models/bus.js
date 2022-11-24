const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busSchema = new Schema({
    busNo : {
        type : String,
        required : true
    },

    NoOfSeats : {
        type : Number,
        required : true
    },

    regNo : {
        type : String,
        required : true
    },

    Type : {
        type : String,
        required : true
    },

    permitID : {
        type : String,
        requird : true
    }


});


const bus = mongoose.model("bus", busSchema);

module.exports = bus;
