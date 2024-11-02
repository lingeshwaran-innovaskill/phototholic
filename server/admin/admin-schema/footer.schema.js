const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    trainingTitle:{
        type:String,
    },
    trainingLink:{
        type:String
    }
})
const train = mongoose.model("train", trainSchema);

const serviceSchema = new mongoose.Schema({
    serviceTitle:{
        type:String
    },
    serviceLink:{
        type:String
    }
})

const service  = mongoose.model('service' , serviceSchema);

module.exports = { train , service };
