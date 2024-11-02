const franchiseModel = require('../Schemas/franschise-schema');

exports.franchisePost = async(req,res) => {

    try{
        console.log(req.body);
        const datas = await franchiseModel.create(req.body);
        res.status(200).json({
            datas:datas,
            message:"data posted"
        })
    }

    catch(err){
        res.status(400).json({
            error:err,
            message:"data not posted"
        })
    }

}
