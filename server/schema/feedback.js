const mongoose = require('mongoose');

const feedback = new mongoose.Schema({
    value:{
        type:String
    }
    ,
    icon:{
        type:String
    }
})

const feedCol = mongoose.model('feedbacks' , feedback);
module.exports  = feedCol;