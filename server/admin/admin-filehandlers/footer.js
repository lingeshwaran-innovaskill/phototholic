const { train , service } = require('../admin-schema/footer.schema');

exports.trainPost = async(req,res) => {
    try{
        console.log(req.body)
        const data = await train.create(req.body);
        res.status(200).json({
            message:"posted",
            data:data
        })
    }
    catch(err){
        res.status(404).json({
            message:"failed",
            error:err
        })
    }
}

exports.trainGet = async(req,res) => {
    try{
        console.log(req.body)
        const data = await train.find();

        res.status(200).json({
            message:"data get successfully",
            data:data
        })
    }
    catch(err){
        res.status(404).json({
            message:"failed",
            error:err
        })
    }
}

exports.trainDelete= async(req,res) => {
    try{
        console.log(req.body)
        const data = await train.findOneAndDelete(req.query);
        res.status(200).json({
            message:"data deleted",
            data:data
        })
    }
    catch(err){
        res.status(404).json({
            message:"failed",
            error:err
        })
    }
}

exports.trainUpdate = async(req,res)=>{

    try{
        console.log(req.body);

        const upData = await train.findOneAndUpdate(req.query,req.body,{
            new:true,
            runValidators:true
        })

        res.status(200).json({
            message:"data updated",
            updatedData:upData
        })
    }

    catch(err){
        res.status(400).json({
            message:"data not updated",
            error:err
        })
    }

}



// service 

exports.servicePost = async(req,res) => {
    try{
        const data = await service.create(req.body);

        res.status(200).json({
            message:"data posted",
            data:data
        })
    }
    catch(err){
        res.status(200).json({
            message:"error",
            error:err
        })
    }
}

exports.serviceGet = async(req,res)=>{
    try{
        const data = await service.find();

        res.status(200).json({
            message:"data posted",
            data:data
        })
    }
    catch(err){
        res.status(200).json({
            message:"error",
            error:err
        })
    }
}

exports.serviceDelete= async(req,res) => {
    try{
        console.log(req.body)
        const data = await service.findOneAndDelete(req.query);

        res.status(200).json({
            message:"delete successfully",
            data:data
        })
    }
    catch(err){
        res.status(404).json({
            message:"failed",
            error:err
        })
    }
}

exports.serviceUpdate = async(req,res)=>{
    try{
        console.log(req.body);

        const updata = await service.findOneAndUpdate(req.query,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            message:"data updated",
            data:updata
        })
    }
    catch(err){
        res.status(200).json({
            message:"update failed",
            error:err
        })
    }
}

