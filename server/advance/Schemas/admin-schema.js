const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})

adminSchema.pre( "save" , async function(next){

    this.password = await bcrypt.hash(this.password, 10)

    next()

})

const adminCol = mongoose.model( "adminLogin" , adminSchema );
module.exports = adminCol;
