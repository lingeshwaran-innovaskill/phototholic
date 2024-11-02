const chatmodel = require('../schema/person1.schema');

exports.postChat= async(req,res) => {

    try{
        console.log(req.body);
        const person = await chatmodel.create(req.body);
        res.status(200).json({
            message:"message sent",
            mes:person
        })
    }

    catch(err){
        res.status(400).json({
            message:"message didn't sent",
            error:err
        })
    }

}

exports.getChat = async(req,res)=>{

    try{
        console.log(req.body);
        const chatData = await chatmodel.find({});
        res.status(200).json({
            message:"data stored",
            chatData:chatData
        })

    }

    catch(err){

        res.status(404).json({
            message:"data not stored",
            error:err
        })
    }

}

exports.delChat = async(req,res) => {
    
    try{
        console.log(req.query);
        const delchat = await chatmodel.findOneAndDelete(req.query);
        res.status(200).json({
            message:"chat deleted",
            deletedChat:delchat
        })
    }

    catch(err){
        console.log(err);
        res.status(404).json({
            message:"chat not deleted",
            error:err
        })
    }
}