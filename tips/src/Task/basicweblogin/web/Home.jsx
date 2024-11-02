import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Web() {

    const Login=useNavigate();

    const [data,setData]=useState({
        email:'',
        password:''
    })

    const [err,setErr]=useState({});


    const errcheck=(e)=>{  
        let err={}

        if(e.email==''){
            err.email='please enter your email'
        }

        if(e.password==''){
            err.password='enter password'
        }
        else if(e.password.length < 8){
            err.password='password should contain atleast 8 characcter'
         }
        return err;
       }

    const formsubmit =(e)=>{
        e.preventDefault()
        setErr(errcheck(data))
    }

    const valuestore=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        if(Object.keys(err).length===0 && data.email!='' && data.password!=''){
            setData({
                email:'',
                password:''
            })
            Login('/success')
        }
    })

    return ( 
        <>
         <div className="maindiv">

            <div id="title">
                <h1> facebook</h1>
                <h3>Connect with friends and the world <br/> around you on Facebook</h3>
            </div>

            <div id="loginpage">
                <form onSubmit={formsubmit}>
            <input type="email" name="email" placeholder="Email or phone number" onChange={valuestore} value={data.email} /><br />
            <p>{err.email}</p>
            <input type="password" name="password" placeholder="Password" onChange={valuestore} value={data.password}/><br />
            <p>{err.password}</p>
            <button>Login</button>
            </form>
            </div>

         </div>
        </>
     );
}

export default Web;