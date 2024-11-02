const naviSchema = require("../admin-schema/navigation");
const trainSchema = require('../admin-schema/nav.training');

exports.navigationPost = async( req , res ) => {
    try{
        console.log(req.body);

        const data = await naviSchema.create(req.body);

        res.status(200).json({
            message:"data posted",
            data:data,
        })
    }
    catch(err){
        res.status(400).json({
            message:"data not posted",
            error:err
        })
    }
}

exports.navigationGet = async( req , res ) => {
    try{
        console.log(req.body);
        const data = await naviSchema.find();

        res.status(200).json({
            message:"data getted",
            data:data
        })
    }
    catch(err){
        res.status(400).json({
            message:"error"
        })
    }
}

exports.navigationDelete = async(req,res)=>{

    try{
        console.log(req.body);
        const data = await naviSchema.findOneAndDelete(req.query);
        res.status(200).json({
            message:"deleted",
            data:data
        })
    }

    catch(err){
        res.status(400).json({
            message:"error"
        })
    }

}

exports.navigationUpdate = async( req , res ) => {
    try{
        console.log(req.body);
        const id = req.query;
        const updateData = await naviSchema.findOneAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            message:"updated",
            data:updateData
        })
    }

    catch(err){
        res.status(400).json({
            message:"error",
            error:err
        })
    }

}

exports.navigationUpdateObj = async( req , res ) => {
    try{
        console.log(req.body);
        const id = req.query;
        const updateData1 = await naviSchema.findOneAndUpdate({_id:req.query},{
            $pull:{more:[{navName:req.body.navName}]}
        });
        res.status(200).json({
            message:"updated",
            data:updateData1
        })
    }

    catch(err){
        res.status(400).json({
            message:"error",
            error:err
        })
    }

}


// Training

exports.navigationPostTrain = async( req , res ) => {
    try{
        console.log(req.body);

        const trainData = await trainSchema.create(req.body);

        res.status(200).json({
            message:"data posted",
            trainData:trainData
        })
    }
    catch(err){
        res.status(400).json({
            message:"data not posted",
            error:err
        })
    }
}


exports.navigationGetTrain = async( req , res ) => {
    try{
        console.log(req.body);
        const data = await trainSchema.find();

        res.status(200).json({
            message:"data getted",
            data:data
        })
    }
    catch(err){
        res.status(400).json({
            message:"error"
        })
    }
}

exports.navigationUpdateTrain = async(req,res) => {
    try{
        console.log(req.body);
        const id = req.query;
        const updateNav = await trainSchema.findOneAndUpdate(id,req.body,{
            new:true,
            runValidators:true
        });

        res.status(200).json({
            message:'updated',
            data:updateNav
        })
    }
    catch(errup){
        res.status(400).json({
            message:"error",
            error:errup
        })
    }
}

exports.navigationTrainDelete = async(req,res) => {

    try{
        console.log(req.body);
        const data = await trainSchema.findOneAndDelete(req.query);
        res.status(200).json({
            data:data,
            message:'data deleted'
        })
    }

    catch(err){
        res.status(404).json({
            message:"something went wrong",
            error:err
        })
    }

}