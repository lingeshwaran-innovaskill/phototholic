
const enquirySchema = require('../Schemas/enquiry-form-schema');

exports.enquiryForm = async( req , res ) => {
    try{
        console.log(req.body);

        const enquiryData = await enquirySchema.create(req.body);
        res.status(200).json({
            enquiry:enquiryData,
            message:"data posted successfully"
        })
    }
    catch(err){

        console.log(err);

        res.status(400).json({
            error:err,
            message:"data not posted"
        })
    }
}
