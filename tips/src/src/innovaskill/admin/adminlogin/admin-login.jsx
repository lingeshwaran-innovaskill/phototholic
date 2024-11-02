import { useState } from 'react';
import './admin-login.css';
import axios from 'axios';
import { useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import AXX from '../../routes/axios';
import toast1, { Toaster } from 'react-hot-toast'



export default function AdminLogin(){

    const navigate = useNavigate();
    const location = useLocation();

    const [ adminLogin , setAdminLogin ] = useState({
        email:"",
        password:""
    })

    const checkingError = (d) => {

        if(d.email == ""){
            alert('enter email');
        }

        else if(d.password == ""){
            alert('enter password');
        }

    }

    const adminValue = (e) => {
        setAdminLogin({...adminLogin , [e.target.name] : e.target.value})
    }

    const adminSubmit = (e) => {

        e.preventDefault();
        checkingError(adminLogin);

        if(adminLogin.email != "" && adminLogin.password != ""){

            setAdminLogin({
                email:"",
                password:""
            })

            AXX.post("adminlogin" , adminLogin)
            .then((res) => {
                toast1.success('login successfully');
                localStorage.setItem("auth",res.data.token);
                navigate('/admin-dashboard');
            })
            .catch((err) => {
                toast1.error(err.response.data.message);
            })

        }

    }

    // console.log(localStorage.getItem("auth"));

    return(<>
    <Toaster/>

    <div className="admin-login container-fluid d-flex flex-column justify-content-evenly ">

        <div className="admin-head row d-flex justify-content-center align-items-center">

            <h1 className='col-xl-2 col-lg-3 col-md-3 col-sm-4 p-0 '> Admin Login </h1>

        </div>

        <div className=" row d-flex justify-content-center">

            <form onSubmit={adminSubmit} className='col-xl-3 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center'>

                <div className="admin-form-body col-xl-11 col-lg-10 col-md-12 col-sm-12 p-0 d-flex flex-column justify-content-center">

                    <input type="text" name='email' placeholder="enter email" className='my-3 py-2 px-3' onChange={adminValue} value={adminLogin.email}/> 

                    <input type="password" name='password' placeholder="enter password" className='my-3 py-2 px-3' onChange={adminValue} value={adminLogin.password}/> 

                    <div className="col-lg-12 col-md-12 d-flex justify-content-center">
                        <button className='my-3 col-6 py-1 '> Submit </button>
                    </div>

                </div>

            </form>

        </div>
    </div>
    </>)
}