import { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";

function Form(){

    const[data,setData]=useState({
        fname:'',
        lname:'',
        email:'',
        number:'',
        password:'',
        cpassword:''

    });
    // console.log(data);

    const[err,setErr]=useState({});

    const checking=(data)=>{

        let err={};
        if(data.fname===''){
            err.fname='please enter your name';
        }
        if(data.lname===''){
            err.lname='enter your last name';
        }
        if(data.email===''){
            err.email='enter your email';
        }
        if(data.number===0){
            err.number='enter your number';
        }
        // else if(data.number.length != 10 ){
        //     err.number='enter valid number';
        // }
        if(data.password==''){
            err.pass='enter your password';
        }
        // else if(data.password.length < 8){
        //     err.pass='password shoud contain atleast 8character';
        // }
        if(data.cpassword==""){
            err.cpass='';
        }
        else if(data.cpassword!==data.password){
            err.cpass="password doesn't match";
        }
        return err;
    }

    const submitform= async(e)=>{

        e.preventDefault();
        setErr(checking(data));

       await fetch('http://127.0.0.1:5555/signup',{
       method:"POST",
       body:JSON.stringify(data),
       headers:{
                'Content-Type':"application/json"
            }
        }) .then(res=>res.json()).then(responce=>console.log(responce))
           .catch(err=>console.log(err))
       
        //    await axios.post('http://127.0.0.1:5555/signup',data,{
        //     headers:{
        //             "Content-Type":"applicaton/json"
        //         }
        //     }).then(res=>console.log(res.data))
        //       .catch(err=>console.log(err))

        if(Object.keys(err).length === 0 && data.fname!=='' && data.lname!=='' && data.email!=='' && data.number!==0 && data.password!=='' && data.cpassword!==''){
                            
            setData({
            // fname:"",
            // lname:'',
            // email:'',
            // number:0,
            // password:'',
            // cpassword:''
            })
        }
    }

    const dataChecking=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        // console.log(data);
    }

    return(
    <>

    <div className="maindiv">

    <form onSubmit={submitform}>
        <input type="text" placeholder="Enter your first name" name="fname" onChange={dataChecking} value={data.fname}  /><br/>
        <p>{err.fname}</p>
        <input type="text" placeholder="Enter your last name" name="lname" onChange={dataChecking} value={data.lname}  /><br/>
        <p>{err.lname}</p>
        <input type="email"  placeholder="Enter your email" name="email" onChange={dataChecking} value={data.email} /><br/>
        <p>{err.email}</p>
        <input type="number" placeholder="Enter your number" name="number" onChange={dataChecking} value={data.number}  /><br/>
        <p>{err.number}</p>
        <input type="password" placeholder="Enter your password" name='password'  onChange={dataChecking} value={data.password} /><br/>
        <p>{err.pass}</p>
        <input type="password" placeholder="Re-Enter  password" name='cpassword'  onChange={dataChecking} value={data.cpassword} /><br/>
        <p>{err.cpass}</p>
        <button>Submit</button>

    </form>
    </div>
    </>

)}

export default  Form;