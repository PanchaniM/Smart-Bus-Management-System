const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const busRepairSchema = new Schema({
    BusNumber : {
        type : String,
        required : true
    },


    RepairReason : {
        type : String,
        required : true
    },

    RepairDate : {
        type : String,
        required : true
    },

    Price : {
        type : Number,
        requird : true
    }


});


const busRepair = mongoose.model("busRepair", busRepairSchema);

module.exports = busRepair;
