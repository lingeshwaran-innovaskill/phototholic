const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const handlers = require('./hirola/hirola.handlers');

// const multer = require("multer");

const signHandlers = require('./filehandlers/signup');
const orderHandlers = require('./filehandlers/orders-filehandlers');
const feedhandlers = require('./filehandlers/feedback');
const chathandlers = require('./filehandlers/chat.handlers');
const imageUp = require('./filehandlers/image');

app.use(express.json());
app.use(cors());

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service:"gmail",
//   port:535,
//   // secure: false, // Use `true` for port 465, `false` for all other ports
//   auth: {
//     user: 'leesha1803@gmail.com',
//     pass: 'lee@1406'
//   }
// })

// async function main() {
//   // send mail with defined transport object
//   const info = await transporter.sendMail({
//     from: 'maddison53@ethereal.email', // sender address
//     to: "lingeshwaran3496@gmail.com", // list of receivers
//     subject: "Hello!!!", // Subject line
//     text: "Hi!!!" // plain text body
//   });

//   console.log("Message sent: %s", info.messageId);

// }

// main()
// .then(console.log('success'))
// .catch(console.error)

// var mailOptions = {
//   from: 'leesha1803@gmail.com',
//   to: 'lingeshwaran3496@gmail.com',
//   subject: 'hello!!!',
//   text: 'Hii!!'
// }

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// // const storage = multer.diskStorage({
// //   destination:function(req , file , cb){
// //     cb(null , "./images")
// //   },
// //   filename : function (req,file,cb){
// //     cb(null,`${Date.now()}_${file.originalname}`)
// //   }
// // })
// // const upload = multer({storage : storage})

app.post('/leePhotoholic/api/signup/postSignup' , signHandlers.signup);
app.post('/leePhotoholic/api/signup/postLogin'  , signHandlers.login);

app.post('/leePhotoholic/api/orders/postOrder'          , orderHandlers.postOrder);
app.get('/leePhotoholic/api/orders/getOrder'            , orderHandlers.getOrder);
app.delete('/leePhotoholic/api/orders/deleteOrder'      , orderHandlers.delOrder);
app.put('/leePhotoholic/api/orders/putOrder'            , orderHandlers.orderup);

app.post('/leePhotoholic/api/feedbacks/postFeedback'     , feedhandlers.feedPost);
app.get('/leePhotoholic/api/feedbacks/getFeedback'       , feedhandlers.feedGet);
app.put('/leePhotoholic/api/feedbacks/putFeedback'       , feedhandlers.feedup);
app.delete('/leePhotoholic/api/feedbacks/deleteFeedback' , feedhandlers.feedDel);

app.post('/chat' , chathandlers.postChat);
app.get('/chat' , chathandlers.getChat);
app.delete('/chat' , chathandlers.delChat);

app.post('/postdata' , handlers.postData);
app.get("/getdata" , handlers.getdata);
app.put("/update" , handlers.update);

// // app.all("*" , (req,res,next)=>{
// //   const err = new Error(`can't find this ${req.originalurl}`)
// //   err.status = "fail"  ;
// //   err.statusCode = 404 ;
// //   next(err);
// // })

// // app.use((error,req,res,next)=>{
// //   res.status(err.statusCode).json({
// //     message:error.message,
// //     status:error.status,
// //     statusCode:error.statusCode,
// //     name:error.name,
// //     stack:error.stack
// //   })
// // })

mongoose.connect('mongodb://localhost:27017/Photoholic')
.then(res => console.log('mongodb connected'))
.catch(err => console.log('monngo db not connected'))

app.listen(5555,'127.0.0.1', ()=>{
  console.log('server started for photoholic')
})
