const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userschema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        minlength:8,
        required:true,
        type:String,
    },
    confirmpassword:{
        type:String,
        validate:{
            validator : function(val){
                return  val == this.password
            },
            message:"password and confirm password did not matched"
        }
    }
})

userschema.pre('save', async function(next){

    this.password = await bcrypt.hash(this.password,12);
    this.confirmpassword = undefined;

    next();

})

const document   = mongoose.model('signup' , userschema);
module.exports   = document;