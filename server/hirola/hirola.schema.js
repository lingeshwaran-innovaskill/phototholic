const mongoose = require("mongoose");

// const content = new mongoose.Schema({
//     content1:{
//         type:String
//     },
//     content2:{
//         type:String
//     }
// })

const hirolaData  = new mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    address:{
        type:Object
    },
    content1:{
        type:String
    },
    content2:{
        type:String
    }
})

const hirolaColl = mongoose.model("datas" , hirolaData)
module.exports = hirolaColl;
