const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    Category:{
        type:String
    },
    clientName:{
        type:String,
        // unique:true,
        minlength:[5,"min 5letters"],
        require:[true," name must required"]
    },
    clientNumber:{
        type:Number,
        required:[true , "number is required"],
        minlength:10,
        maxlength:10
    },
    clientAddress:{
        type:String
    },
    date:{
        type:String
    }
})


const document = mongoose.model('orders' , formSchema)
module.exports = document
