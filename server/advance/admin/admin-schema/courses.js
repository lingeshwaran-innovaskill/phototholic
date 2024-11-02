const mongooese = require("mongoose");

const courseSchema = new mongooese.Schema({

    courseHead:{
        type:String
    },
    courseDetails:{
        type:String
    },
    courseLink:{
        type:String
    },
    courseImg:{
        type:String,
        required:true
    }

})

const courseCol = mongooese.model("courses" , courseSchema)
module.exports = courseCol;
