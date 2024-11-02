const  signupModel= require('../schema/signup');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
exports.signup = async(req,res) => {

    try{
        console.log(req.body);

        const email = await signupModel.findOne({ email : req.body.email });

        if(email){
            return res.status(404).json({
                message : "this email is already taken",
                email : email
            })
        }

        else{

        const userData = await signupModel.create(req.body);

            return  res.status(200).json({
                message : "signup successfully",
                data : userData 
            })

        }
    }

    catch(err){
        res.status(400).json({
            message: "signup failed",
            error:err
        })
}

}

exports.login = async(req,res)=>{

    try{

        const getSignupData = await signupModel.findOne({email : req.body.email})

        if(getSignupData){

            bcrypt.compare(req.body.password , getSignupData.password , (error , result)=>{

                const token = jwt.sign({password:req.body.password},'CODE_RED' , {expiresIn:'5d'});
    
                if(result){
                    return res.header("AGENT_LEE",token).json({
                        message : "login successfully",
                        data : result,
                        TOKEN:token
                    })
                }

                else{
                    return  res.status(404).json({
                        message  : "incorrect password",
                        error  : error
                        })
                    }              
            })
        }

        else{
            return  res.status(404).json({
                    message  : "this email is not found",
                    userData :  getSignupData 
                })
        }

}

    catch(err){
        res.status(404).json({
            message : "something went wrong",
            error : err
        })
    }
}
