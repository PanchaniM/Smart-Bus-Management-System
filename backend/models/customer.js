const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({      
    
    UserName:{
        type:String,
        required : true
    },
    
    FirstName : {
        type : String,
        required : true
    },

    LastName : {
        type : String,
        required : true
    },

    Phone : {
        type : String,
        required : true
    },
    
    Email : {
        type : String,
        required : true
    },

    Password: {
        type : String,
        requird : true
    }

});


const customer = mongoose.model("customer", customerSchema);

module.exports = customer;
