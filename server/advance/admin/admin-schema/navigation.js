const mongooese = require('mongoose');

const navigation = new mongooese.Schema({
    navName:{
        type:String
    },
    linkPage:{
        type:String
   },
   hrefLink:{
    type:String
   },
   more:{
    type:Array,
    navName:{
        type:String
    },
    linkPage:{
        type:String
    }
   }

});

const naviCol = mongooese.model("navigation", navigation)
module.exports = naviCol;
