const feedmodel = require('../schema/feedback');

exports.feedPost = async(req,res)=>{
    try{
        console.log(req.body);
        const data = await feedmodel.create(req.body);
        res.status(200).json({
            message:"feed posted",
            data:data
        })
    }
    catch(err){
        res.status(400).json({
            message:"feed not posted",
            error:err
        })
    }
}

exports.feedGet = async(req,res)=>{
    try{
        console.log(req.body)
        const getFeed = await feedmodel.find();
        res.status(200).json({
            message:"feedback get successfully",
            feed :getFeed
        })
    }
    catch(err){
        res.status(400).json({
            err : "getting some problem for  get the feed",
            feedErr : err
        })
    }
}

exports.feedDel = async(req,res)=>{

    try{
        console.log(req.query);
        const delFeedId = req.query;
        const delFeed = await feedmodel.findOneAndDelete(delFeedId);
        res.status(200).json({
            message:"feed Deleted",
            delFeed : delFeed
        })
    }

    catch(err){
        res.status(400).json({
            message:"feedback not deleted",
            err : err
        })
    }

}


exports.feedup = async(req,res)=>{
    try{
        console.log(req.params.id);
        const upId = req.query;
        const data = await feedmodel.findOneAndUpdate(upId , req.body ,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            userId : upId,
            update : data,
            message : "successfully updated"
        })
    }
    catch(err){
        res.status(400).json({
            message : "it's not updated",
            error : err
        })
    }
}
