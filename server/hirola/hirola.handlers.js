
const mongooseModel = require("./hirola.schema");

exports.postData = async(req,res) => {
    try{
        console.log(req.body);
        const data = await mongooseModel.create(req.body);

        res.status(200).json({
            message:"data posted",
            data : data
        })
    }

    catch(err){
        res.status(400).json({
            message:"some thing went wrong",
            error:err
        })
    }
}

exports.getdata = async(req,res) => {
    try{
        console.log(req.body);
        const data = await mongooseModel.find();
        res.status(200).json({
            message:"data posted",
            data : data
        })
    }

    catch(err){
        res.status(400).json({
            message:"some thing went wrong",
            error:err
        })
    }
}

exports.update = async(req,res) => {
    try{
        console.log(req.query);
        const data = await mongooseModel.findOneAndUpdate(req.query , req.body ,{
            new:true ,
            runValidators:true
        })
        res.status(200).json({
            message:"data posted",
            data : data
        })
    }

    catch(err){
        res.status(400).json({
            message:"some thing went wrong",
            error:err
        })
    }
}
