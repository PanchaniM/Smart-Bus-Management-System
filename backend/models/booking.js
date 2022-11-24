const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    uId : {
        type : String,
        required : true
    },

    busId : {
        type : String,
        required : true
    },

    seat1 : {
        type : Boolean,
        require : true
    },

    seat2 : {
        type : Boolean,
        required : true

    },

    seat3 : {
        type : Boolean,
        required : true

    },

    seat4 : {
        type : Boolean,
        required : true

    },

    seat5 : {
        type : Boolean,
        required : true

    },

    seat6 : {
        type : Boolean,
        required : true

    },

    seat7 : {
        type : Boolean,
        required : true

    },

    seat8 : {
        type : Boolean,
        required : true

    },

    seat9 : {
        type : Boolean,
        required : true

    },

    seat10 : {
        type : Boolean,
        required : true

    },

    seat11 : {
        type : Boolean,
        required : true

    },

    seat12 : {
        type : Boolean,
        required : true

    },

    seat13 : {
        type : Boolean,
        required : true

    },

    seat14 : {
        type : Boolean,
        required : true

    },

    seat15 : {
        type : Boolean,
        required : true

    },

    seat16 : {
        type : Boolean,
        required : true

    },

    seat17 : {
        type : Boolean,
        required : true

    },

    seat18 : {
        type : Boolean,
        required : true

    },

    seat19 : {
        type : Boolean,
        required : true

    },

    seat20 : {
        type : Boolean,
        required : true

    },

    seat21 : {
        type : Boolean,
        required : true

    },

    seat22 : {
        type : Boolean,
        required : true

    },

    seat23 : {
        type : Boolean,
        required : true

    },

    seat24 : {
        type : Boolean,
        required : true

    },

    seat25 : {
        type : Boolean,
        required : true

    },

    seat26 : {
        type : Boolean,
        required : true

    },

    seat27 : {
        type : Boolean,
        required : true

    },

    seat28 : {
        type : Boolean,
        required : true

    },

    seat29 : {
        type : Boolean,
        required : true

    },

    seat30 : {
        type : Boolean,
        required : true

    },

    seat31 : {
        type : Boolean,
        required : true

    },

    seat32 : {
        type : Boolean,
        required : true

    },

    seat33 : {
        type : Boolean,
        required : true

    },

    seat34 : {
        type : Boolean,
        required : true

    },

    seat35 : {
        type : Boolean,
        required : true

    },

    seat36 : {
        type : Boolean,
        required : true

    },

    seat37 : {
        type : Boolean,
        required : true

    },

    seat38 : {
        type : Boolean,
        required : true

    },

    seat39 : {
        type : Boolean,
        required : true

    },

    seat40 : {
        type : Boolean,
        required : true

    },

    seat41 : {
        type : Boolean,
        required : true

    },

    seat42 : {
        type : Boolean,
        required : true

    },

    seat43 : {
        type : Boolean,
        required : true

    },

    seat44 : {
        type : Boolean,
        required : true

    },

    seat45 : {
        type : Boolean,
        required : true

    },

    seat46 : {
        type : Boolean,
        required : true

    },

    seat47 : {
        type : Boolean,
        required : true

    },

    seat48 : {
        type : Boolean,
        required : true

    },

    seat49 : {
        type : Boolean,
        required : true

    },

    seat50 : {
        type : Boolean,
        required : true

    }

    


});

const booking = mongoose.model("booking", bookingSchema);
module.exports = booking;