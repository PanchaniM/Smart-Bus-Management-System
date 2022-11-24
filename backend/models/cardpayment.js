const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardpaymentSchema = new Schema({
    uId : {
        type : String,
        required : true
    },

    scheduleId : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    cardNumber : {
        type : String,
        required : true
    },

    expMonth : {
        type : String,
        required : true
    },

    expDate : {
        type : String,
        required : true
    },

    ccv : {
        type : String,
        required : true
    }


    


});


const cardpayment = mongoose.model("cardpayment", cardpaymentSchema);

module.exports = cardpayment;
