const courseSchema = require("../admin-schema/courses");

exports.postCourseData = async(req,res)=>{
    try{

        console.log(req.body);
        const courseData = await courseSchema.create(req.body);

        res.status(200).json({
            data:courseData,
            message:"data posted"
        })

    }
    catch(err){

        res.status(404).json({
            message:"error",
            error:err
        })

    }
}

exports.getCourseData = async(req,res)=>{
    try{
        console.log(req.body);

        const data = await courseSchema.find();
        res.status(200).json({
            data : data ,
            messsage:"get the data successfully"
        })
    }
    catch(err){

    }
}

exports.deleteCourseData = async(req,res) => {

    try{
        console.log(req.query);

        const data = await courseSchema.findOneAndDelete(req.query);
        console.log(data)
        res.status(200).json({
            deletedData:data,
            message:"data deleted"
        })
    }

    catch(err){
        console.log(err);

        res.status(404).json({
            message:"data not deleted",
            error:err
        })
    }

}

exports.courseUpdate = async( req , res )=>{
 
    try{
        console.log(req.body);
        const id = req.query;
        const updateData = await courseSchema.findOneAndUpdate(id , req.body , {
            new:true,
            runValidators:true
        })

        res.status(200).json({
            id:id,
            data:updateData,
            message:"data updated"
        })

    }

    catch(err){
        res.status(400).json({
            message:"updated failed",
            error:err
        })
    }

}