const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
    userName:{
        type:String
    },
    number:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  , "enter valid email"]
    },
    courses:{
        type:String,
    },
    messages:{
        type:String
    },
    location:{
        type:String
    },
    studies:{
        type:String
    }
})


enquirySchema.path('number').validate(function validateNumber(){
    return( this.number > 999999999 )
})

const enquiryCol = mongoose.model( "enquiry" , enquirySchema );
module.exports = enquiryCol;
