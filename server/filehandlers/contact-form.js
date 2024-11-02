const contactSchema = require('../Schemas/contact-schema');

exports.contactPost = async( req , res ) => {

    try{
        console.log(req.body);

        const contactData = await contactSchema.create(req.body);

        res.status(200).json({
            data:contactData,
            message:"data posted"
        })
    }

    catch(err){
        console.log(err);

        res.status(400).json({
            error:err,
            message:"something went wrong"
        })
    }

}
