const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BusOwnerSchema = new Schema({

    Bid : {
        type : String,
        required : true
    },

    Bname : {
        type : String,
        required : true
    },

    Sname : {
        type : String,
        required : true
    },

    Nic : {
        type : String,
        requird : true
    },

    Pnum : {
        type : Number,
        requird : true
    },

    Email: {
        type : String,
        requird : true
    }

});


const busowner = mongoose.model("busowner", BusOwnerSchema);

module.exports = busowner;
