const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EmpSchema = new Schema({

    EmpName : {
        type : String,
        required : true
    },

    Password:{
        type:String,
        required:true
    },

    Phone : {
        type : String,
        required : true
    },

    NIC : {
        type : String,
        required : true
    },

    Email : {
        type : String,
        required : true
    },

    Type: {
        type : String,
        required : true
    }

});


const employee = mongoose.model("employee", EmpSchema);

module.exports = employee;
