const mongoose = require("mongoose");

const imageUpload = new mongoose.Schema({
    titleName:{
        type:String,
        required : true
    },
    username : {
        type : String,
        required : true
    }
})

const imageExport = mongoose.model("img" , imageUpload);
module.exports = imageExport;
