const imageExport = require('./imageschema');

// exports.imgPost = async( req , res ) => {
//     try{
//         console.log(req.body.title)
//         console.log(req.file.image)
//         const title = req.body.title;
//         const image = req.file.Images;
//         const img = await imageModel.create({title:title , image : image});
    
//         res.status(201).json({
//             message:"image upload succesfully",
//             title:title,
//             imae:img
//         })

//     }catch(err){
//         console.log(err)
//         res.status(404).json({
//             message:"something went wrong",
//             error : err
//         })
//     }
// }

exports.imgPost = async(req, res) => {

    try{
        console.log(req.body);
        const img = await imageExport.create(req.body)
            res.status(200).json({
                message:"image upload succesfully",
                img : img
            })
        }

        catch(err){
            console.log(err)
            res.status(400).json({
                message:"something went wrong",
                error : err
                })
            }

}
