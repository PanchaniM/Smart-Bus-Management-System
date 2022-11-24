const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({      
    
    id:{
        type:String,
        required : true
    },

    image:{
        type:String,
        required : true
    },
});


const image = mongoose.model("image", imageSchema);

module.exports = image;
