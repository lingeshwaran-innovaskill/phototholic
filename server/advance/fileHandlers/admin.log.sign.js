const adminSchema = require('../Schemas/admin-schema');
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

exports.adminsignup = async( req , res ) => {

    try{
        console.log(req.body);

        const existEmail = await adminSchema.findOne({email:req.body.email})
        if(existEmail){
            res.status(400).json({
                message:"this email already exist"
            })
        }

        const loginData = await adminSchema.create(req.body)
        res.status(200).json({
            data:loginData,
    
            message:"posted Successfully"
        })
    }

    catch(err){
        res.status(400).json({
            error:err,
            message:"failed"
        })
    }
}

exports.adminLogin= async( req , res ) => {
    try{

        const getEmail = await adminSchema.findOne({email:req.body.email});
        if(getEmail){

            bcrypt.compare( req.body.password , getEmail.password , (error , success) => {
                const jwtToken=jwt.sign({email:getEmail.email},"lingesh!0006");

                if(success){
                    return res.header("auth",jwtToken).json({
                        message:"login success",
                        data:success,
                        token:jwtToken
                    })
                }

                else{
                    return res.status(402).json({
                        message:"ln-correct Password",
                        error:error
                    })
                }
            })
        }

        else{
            res.status(404).json({
                message:"can't find this email",
                data:getEmail
            })
        }
    }

    catch(err){
        console.log(err)
        res.status(400).json({
            message:"something went wrong",
            error:err
        })
    }

}

exports.getlogin = async( req , res  ) => {

    try{
        jwt.verify(req.token,"lingesh!0006",async(err,data)=>{
            if(err){
                res.status(400).json({
                    message:"failed",
                    error:err
                })
            }
            else{
                const datas = await adminSchema.find().select(["-password"])
                res.status(201).json({
                    message:"getting data",
                    loginUser:datas,
                    data:data
                })
            }
        })
    }

    catch(err){
        res.status(400).json({
            message:"error"
        })
    }

}

// exports.adminLogin= async( req , res ) => {

//     try{

//         const getEmail = await adminSchema.findOne({email:req.body.email});

//         if(getEmail){

//             bcrypt.compare( req.body.password , getEmail.password , (error , success) => {
 
//                 if(success){

//                     const accessToken = jwt.sign({email:req.body.email},
//                         "jwt-access-token-secret-key" , {expiresIn:'1m'})

//                     const refreshToken = jwt.sign({email:req.body.email},
//                         "jwt-refresh-token-secret-key" , {expiresIn:"5m"})

//                         res.cookie("accessToken" , accessToken , {maxAge : 60000})
//                         res.cookie('refreshToken' , refreshToken ,
//                         {maxAge : 300000 , httpOnly : true , secure:true , sameSite:"strict"} )
                    
//                     return res.status(200).json({
//                         message:"login success",
//                         data:success
//                     })
//                 }
//                 else{
//                 return res.status(402).json({
//                     message:"ln-correct Password",
//                     error:error
//                 })
//                 }
//             })

//         }

//         else{
//             res.status(404).json({
//                 message:"can't find this email",
//                 data:getEmail
//             })
//         }
        
//         const verifyUser = (req,res,next) => {

//             const accessToken = req.cookie.accessToken;

//             if(!accessToken){
//                 if(renewToken(req,res)){
//                     next()
//                 }
//             }

//             else{

//                 jwt.verify( accessToken , 'jwt-access-secret-key', ( err , decoded ) => {
//                     if(err){
//                         res.status(400).json({
//                             valid:false,
//                             message:"invalid token"
//                         })
//                     }
//                     else{
//                         req.email = decoded.email
//                         next()
//                     }
//                 })
    
//             }
//         }

//         const renewToken = (req,res,next) => {

//             const refreshToken = req.cookie.accessToken;
//             let exist = false;
//             if(!refreshToken){
//                 return res.json({ valid:false , message:"no refresh token" })
//             }
//             else{
//                 jwt.verify( refreshToken , 'jwt-refersh-secret-key' , ( err , decoded ) => {

//                     if(err){
//                         res.status(400).json({
//                             valid:false,
//                             message:"invalid refresh token"
//                         })
//                     }
//                     else{

//                         const accessToken = jwt.sign({email:decoded.email},
//                             "jwt-access-token-secret-key" , {expiresIn:'1m'})
        
//                         res.cookie("accessToken" , accessToken , {maxAge : 60000})

//                         req.email = decoded.email
//                         exist = true
//                         next()
//                     }
//                 })
//             }
//             return exist;
//         }
// }

//     catch(err){
//         console.log(err)

//         res.status(400).json({
//             message:"something went wrong",
//             error:err
//         })
//     }

// }

