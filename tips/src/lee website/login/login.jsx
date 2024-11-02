import { useEffect, useState } from 'react';
import './login.css';
// import img from './login11.jpg';
import intro from '../intro.gif';
import backgroundImg from './desert.jpg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth';
import axios from 'axios';
import TRANSFER from '../axx/axios';


function Login(){

    const location = useLocation();
    const navigate = useNavigate();
    const Auth = useAuth();

    const redirectpage = location.state ?.path || "/home"

    const [load,setLoad]=useState(true);

    const [data,setData] = useState({
        email:"",
        password:""
    })

    const [err , setErr] = useState({})

    const checking = (d) => {

        let err = {}

        if(d.email === ""){
            err.email = "please enter your email"
        }

        if(d.password === ''){
            err.pass = "enter your password"
        }
        else if(d.password.length < 8 ){
            err.pass = "password should contain atleast 8 character"
        }

        return err;

    }

    const storevalue = (e) =>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const formsubmit = (e) =>{
        e.preventDefault();
        setErr(checking(data));
    }

    useEffect(()=>{

        if(Object.keys(err).length === 0 && data.email !== "" && data.password !== "" ){
            setData({
                email:"",
                password:''
            })
        }

        TRANSFER.post('signup/postLogin', data)
        .then(res=>{console.log(res);
        navigate(redirectpage,{replace:true});
        localStorage.setItem('agent_viewer',res.data.TOKEN)
        })
        .catch(error => {console.log(error) ; })

        const timing = setTimeout(() => {
            setLoad(false)
        }, (5000));

        return ()=>{
            clearTimeout(timing)
        }

    },[err])

    
    return ( <>

    {(load)? <div className='intro' ><img src ={intro}  controls /> </div>: 

        <div className='login-div'>
            <img src={backgroundImg} id='img'/>
            <div className='login-body'>

                <form id='inp' onSubmit={formsubmit}>
                <h4>Email:</h4>
                <input  type="email"    placeholder="enter your email"     name='email'    value={data.email}     onChange={storevalue} />
                <p className='err'>{err.email}</p>
                <h4>Password:</h4>
                <input  type="password" placeholder="enter your password"  name='password' value={data.password}  onChange={storevalue}/>
                <p className='err'>{err.pass}</p>
                <p className='redirect'>if you don't have an account ?<a href='/signup'> Sign-up </a></p>
                <button> Submit </button>
                </form>

            </div>
        </div>
      }
    </> );
}
export default Login;