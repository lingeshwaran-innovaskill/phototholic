const model = require('../schema/order-form');

exports.postOrder = async(req,res) => {

    try{
        console.log(req.body);
        const orderDetails = await model.create(req.body);
        res.status(200).json({
            message:"Order is Booked",
            data   : orderDetails
        })
    }

    catch(err){
        res.status(400).json({
            message:"order cancelled",
            err:err
        })
    }

}

exports.getOrder = async(req,res) => {

    try{
        console.log(req.body);
        const data = await model.find({})
        res.status(200).json({
            message : "data recieved",
            orderData : data
        })
    }

    catch(err){
        res.status(err).json({
            message:"did't recieved",
            err : err
        })
    }

}

exports.delOrder = async(req,res)=>{

    try{
        console.log(req.query);
        const delId = req.query;
        const data = await model.findOneAndDelete(delId);

        res.status(200).json({
            message : "data deleted",
            deletedData : data
        })

    }

    catch(err){
        res.status(400).json({
            message : 'something went wrong',
            error : err
        })
    }

}

exports.orderup = async(req,res)=>{

    try{
        console.log(req.query);
        const upId = req.query;
        const data = await model.findOneAndUpdate(upId,req.body,{
            new:true ,
            runValidators:true
        })
        res.status(200).json({
            userId : upId,
            data : data,
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
