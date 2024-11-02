const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    contactname:{
        type:String
    },
    contactnumber:{
        type:Number,
        unique:true
    },
    emailID:{
        type:String,
        required:[true , "email id is must"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  , "enter a valid email"]
    },
    education:{
        type:String
    },
    messages:{
        type:String
    }
})

contactSchema.path('contactnumber').validate(function validateaNumber(){
    return ( this.contactnumber > 999999999 )
})

const contactCol = mongoose.model( 'contact' , contactSchema );
module.exports = contactCol;
