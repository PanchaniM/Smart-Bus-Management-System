const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({

    Name : {
        type : String,
        required : true
    },

    Password : {
        type : String,
        required : true
    },

    Phone : {
        type : Number,
        required : true
    },

    Email : {
        type : String,
        requird : true
    },

    NIC : {
        type : Number,
        requird : true
    },

    Type: {
        type : String,
        requird : true
    }

});


const admin = mongoose.model("admin", AdminSchema);

module.exports = admin;
