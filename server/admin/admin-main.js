const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = cors();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/adminDatas" , {
    useNewUrlParser:true
}).then((res)=>console.log('admin mongodb connected'))
  .catch((err)=>console.log('admin mongo db connecting failed'))

app.listen( 1111 , "127.0.0.1" , ()=>{
    console.log('server connected')
})