const mongoose = require('mongoose');

const person1 = new mongoose.Schema({
    person1:{
        type:String
    },
    person2:{
        type:String
    }
})

const perCol1  = mongoose.model("person1" , person1)
module.exports = perCol1;
