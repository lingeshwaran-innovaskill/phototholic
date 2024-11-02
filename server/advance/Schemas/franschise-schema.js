const mongoose = require('mongoose');

const franchiseSchema = new mongoose.Schema({
    colabname:{
        type:String,
        trim:true
    },
    colabstudies:{
        type:String,
        trim:true
    },
    colabnumber:{
        type:Number,
        trim:true
    },
    colabaltnumber:{
        type:Number,
        trim:true
    },
    colabprofession:{
        type:String,
        trim:true
    },
    colabemail:{
        type:String,
        trim:true,
        require:[ true , 'email is must'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , "enter a valid email"]
    },
    colablocation:{
        type:Object,
        colabcity:{
            type:String,
            trim:true
        },
        colabdistrict:{
            type:String,
            trim:true
        },
        colabstate:{
            type:String,
            trim:true 
        }
    }
})

franchiseSchema.path('colabnumber').validate(function numberValidate(){
    return ( this.colabnumber > 999999999 && this.colabaltnumber > 999999999 )
})

const franchiseCol = mongoose.model( "franchise" , franchiseSchema );
module.exports = franchiseCol;
