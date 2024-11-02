const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    navName:{
        type:String
    },
    more:{
        type:Array,
        navName:{
            type:String
        },
        linkPage:{
            type:String
        }
    }
})

const trainCol = mongoose.model("training" , trainSchema);
module.exports = trainCol;
