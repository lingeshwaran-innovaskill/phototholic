const mongoose = require('mongoose');
const express = require('express');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const config = require('./config');

const {port , allDomains } = config;

app.use(express.json({limit:"10mb"}));
app.use(cors({origin:allDomains}));
app.use(helmet());
app.use(compression());
// enquiry form
const enquiryHandlers = require('./fileHandlers/enquiry-form');

app.post('/innovaskill/api/enquiryForm/postform' , enquiryHandlers.enquiryForm );


// contact form
const contactHandlers = require('./fileHandlers/contact-form');

app.post( '/innovaskill/api/contactForm/postform' , contactHandlers.contactPost );


// franchise form
const franchiseHandlers = require('./fileHandlers/franchise-form');

app.post( '/innovaskill/api/franchiseForm/postform' , franchiseHandlers.franchisePost );

// admin login
const adminhandlers = require('./fileHandlers/admin.log.sign');

app.post('/innovaskill/api/adminSignup',adminhandlers.adminsignup);
app.post('/innovaskill/api/adminlogin',adminhandlers.adminLogin);

const validUser = (req,res,next) => {
    const token = req.header("auth");
    req.token = token;
    next();
}

app.get('/innovaskill/api/getAdmin' , validUser , adminhandlers.getlogin);

//admin course
const course = require('./admin/admin-filehandlers/courses')

app.post('/innovaskill/api/admin/coursePost', course.postCourseData);
app.get('/innovaskill/api/admin/courseGet', course.getCourseData);
app.delete('/innovaskill/api/admin/courseDelete', course.deleteCourseData);
app.put("/innovaskill/api/admin/courseUpdate",course.courseUpdate);

// navigation
const navigation = require('./admin/admin-filehandlers/navigation');

app.post('/innovaskill/api/admin/navPost' , navigation.navigationPost);
app.post('/post' , navigation.navigationPost);
app.get('/innovaskill/api/admin/navGet' , navigation.navigationGet);
app.delete('/innovaskill/api/admin/navDelete' , navigation.navigationDelete);
app.put('/innovaskill/api/admin/navUpdate' , navigation.navigationUpdate);
app.patch('/innovaskill/api/admin/navUpdateObj' , navigation.navigationUpdateObj);

//training
app.post('/innovaskill/api/admin/training' , navigation.navigationPostTrain);
app.get('/innovaskill/api/admin/getTraining' , navigation.navigationGetTrain);
app.put('/innovaskill/api/admin/updateTraining' , navigation.navigationUpdateTrain);
app.delete('/innovaskill/api/admin/deleteTraining' , navigation.navigationTrainDelete);

// footer
const footer = require('./admin/admin-filehandlers/footer');

// training
app.post("/innovaskill/api/admin/postTrain" , footer.trainPost );
app.get("/innovaskill/api/admin/getTrain" , footer.trainGet );
app.delete('/innovaskill/api/admin/deleteTrain' , footer.trainDelete );
app.put('/innovaskill/api/admin/updateTrain' , footer.trainUpdate );

// service
app.post('/innovaskill/api/admin/postService' , footer.servicePost );
app.get('/innovaskill/api/admin/getService' , footer.serviceGet );
app.delete('/innovaskill/api/admin/deleteService' , footer.serviceDelete );
app.put('/innovaskill/api/admin/updateService' , footer.serviceUpdate );

// mongoose.connect("mongodb://127.0.0.1:27017/innovaskillDemo")
// .then((res) => console.log("mongodb connected successfully"))
// .catch((err) => console.log(err))

mongoose.connect("mongodb+srv://lingeshwaraninnovaskill:innovaskill0024@cluster0.wbytyqr.mongodb.net/innovaskill",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    autoIndex: true,
})
.then((res)=>{console.log('mongodb connected')})
.catch((err)=>{console.log(err)})

app.listen(port,"127.0.0.1",() => {
    console.log('server started',port)
})


// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'lingeshwaran.innovaskill@gmail.com',
//     pass: 'cdjd pkuo cshp kplw'
//   }
// });

// const contact = require('./Schemas/contact-schema');

// app.post( '/innovaskill/api/contactForm/postform/Postman' , async(req,res)=>{
//     try{
//         const data = await contact.create(req.body);
//         // const 
//         res.status(200).json({
//             data:data,
//             message:'posted'
//         })
//         const datajson = JSON.stringify(data);
//         var mailOptions = {
//             from: 'lingeshwaran.innovaskill@gmail.com',
//             to: 'lingeshwaran3496@gmail.com',
//             subject: 'Sending Email using Node.js',
//             text: datajson
//           };

//           transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               console.log('Email sent: ' + info.response);
//             }
//           });
          
//     }
//     catch(err){

//     }
// } );
