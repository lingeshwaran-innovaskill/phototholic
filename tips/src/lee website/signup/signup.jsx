import { createContext, useEffect, useState } from "react";
import axios from "axios";
import './signup.css';
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import { ToastContainer, toast } from "react-toastify";

import backgroundImg from '../c1 (7).jpg';
import gif from '../intro.gif';
import TRANSFER from "../axx/axios";

function Signup({datas}){

    const [load , setLoad] = useState(true);

    useEffect(()=>{
        const time = setTimeout(() => {
        setLoad(false)
        }, 5000);

        return ()=>{
            clearTimeout(time);
            console.log('the lee')
        }
    })

    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state ?.path ||  '/home'  ;
    const auth = useAuth();

    const [data,setData]=useState({
        username:'',
        password:'',
        confirmpassword:'',
        email:''
    })

    const [err,setErr] = useState({});

    const checking = (d) =>{

        let err={};

        if(d.username === ''){
            err.name='enter your name'
        }

        if(d.email === ''){
            err.mail='enter your email';
        }

        if(d.password === ''){
            err.pass = "password should be filled out";
        }

        else if(d.password.length < 8){
              err.pass = "password should atleast contain 8 characters";
        }

        if(d.confirmpassword === ''){
              err.cpass = "confirm password should be filled out";
        }

        if(d.confirmpassword !== d.password){
              err.cpass = "password not match";
        }

        return err;

}

    const valuecheck=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

const formsubmit=(e)=>{
    e.preventDefault();
    setErr(checking(data));
}

    const [hide,setHide] = useState(false);

    const input = hide ? "text" : "password";

    const show = () =>{
        setHide(!hide);
    }

    useEffect(()=>{

        if(Object.keys(err).length === 0 && data.username!=='' && data.email!=='' && data.password!=='' && data.confirmpassword !== '' ){
            setData({
                username:'',
                email:'',
                password:'',
            confirmpassword : "" })

    TRANSFER.post('signup/postSignup', data , {
    headers:{
        "Content-Type":"application/json"
    }
    }).then((res)=>{
    console.log(res);
    navigate('/login');
    datas(data);
    auth.login(data);
    localStorage.setItem("auth",data);
    toast.success(res.data.message);
    }).catch((err)=>{
    console.log(err);
    toast.error(err.response.data.message)
    })
    }
    },[err])

    return(
        <>

        <ToastContainer position="top-center"/>

        {(load)? <div className="intro"> <img src={gif} /> </div> : 

        <div className="Main-login">
            <h1 id="title1" data-aos="fade-right">Sign-up</h1>
            <img id="bgImg" src={backgroundImg}/>
                <div className="login">
                    <div className="form">
                        <form onSubmit={formsubmit}>
                        <h3 >Firstname :</h3>
                            <input  name="username" type="text"    placeholder="enter your name"  onChange={valuecheck} value={data.username} />
                            <p>{err.name}</p>
                            <h3 >Email-Id :</h3>
                            <input  name='email'     type="email"   placeholder="enter your email" onChange={valuecheck} value={data.email} />
                            <p>{err.mail}</p>
                            <h3 onClick={show}  >Password :</h3>
                            <input name="password"   type={input} placeholder="********"   onChange={valuecheck} value={data.password} />
                            <p >{err.pass}</p>
                            <h3 onClick={show} >Confirm Password :</h3>
                            <input name="confirmpassword"    type={input}   placeholder="********"   onChange={valuecheck} value={data.confirmpassword} />
                            <p>{err.cpass}</p>
                            <h5 >already have an account ? <a href="/login">login here</a></h5>
                            <button className='btn' >Submit</button>
                        </form>
                    </div>
                    {/* <div className="welcome">
                        <div id="welcome">
                        <h1>Hello Friends!</h1>
                        <h3>Create Your's Memories With Us *~*</h3>
                    <Link to={'/llllllll'}> <button className="btn">Check It</button></Link><br/>
                </div>
                </div> */}
                <div>

            {/* <QRCodeCanvas  value={dataa} size={200}>Lee</QRCodeCanvas> */}

                </div>
                </div>

        <div className="quotes">

        {/* <TypeAnimation sequence={[`Photography is about Capturing your Soul not Smiles \ - by Lingeshwaran `]} speed={30} repeat={Infinity}/> */}
        <h3 data-aos="zoom-in" data-aos-duration ='1000'>Photography is Capturing your Soul not Smiles</h3>

        </div>
        </div>
    }
    </>
)
}
export default Signup;



