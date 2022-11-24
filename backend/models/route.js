const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const routeSchema = new Schema({
    routeId : {
        type : String,
        required : true
    },

    routeName : {
        type : String,
        required : true
    },

    to : {
        type : String,
        required : true
    }  , 

    from: {
        type : String,
        required : true
    },
    
    pAdult:{
        type : Number,
        require : true
    },

    pChild:{
        type : Number,
        require : true
    },

    pStudent:{
        type : Number,
        require : true
    }
    



});


const route = mongoose.model("route", routeSchema);

module.exports = route;
