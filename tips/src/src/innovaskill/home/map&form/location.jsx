import { useState } from 'react';
import './location.css';
import axios from 'axios';
import AXX from '../../routes/axios';
import {  toast } from 'react-toastify';

function Locate(){

    const [ userdata , setUserdata ] = useState({
        contactname:"",
        contactnumber:"",
        emailID:"",
        education:"",
        messages:""
    });

    const validationChecking = (d) => {

        if(d.contactname == "" || d.education == "" || d.messages == ""){
            alert('fill all the fields')
        }

        else if(d.contactnumber == "" ){
            alert('enter an number')
        }

        else if(d.contactnumber.length != 10){
            alert('enter valid number')
        }

    }

    const storingValue = (e) => {
        setUserdata({...userdata , [e.target.name] : e.target.value })
    }

    const formSubmit = (e) => {

        e.preventDefault();
        validationChecking(userdata);

        if(userdata.contactname !== '' && userdata.contactnumber.length == 10  && userdata.messages !== "" && userdata.education !== ''){
            setUserdata({
                contactname:"",
                contactnumber:"",
                emialID:"",
                education:"",
                messages:""
            })

        AXX.post("contactForm/postform" , userdata , {
        headers:{
            "Content-Type" : "application/json"
        }
        })
        .then( (res) =>{ 
        // console.log(res);
        toast.success(res.data.message)
        })
        .catch( (err) =>{
        // console.log(err);
        toast.error('error')
        })

        }
    }

    return(<>

    <div className="container-fluid mt-5 locate-main">

        <div className="row locate-body mt-5 d-flex justify-content-center align-items-center">

            <div className="col-12 col-lg-4 col-md-6 col-sm-10 my-sm-3 my-3 map-div">
                <div className='map-div-title '>
                    <h1> Banglore Corporate Office Address : </h1> 
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2312.333539299665!2d77.60222470114857!3d12.916334896373034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1561a753b37d%3A0x1ce340f91823652d!2sInnovaskill%20Technologies!5e0!3m2!1sen!2sin!4v1712927533762!5m2!1sen!2sin" className='col-12 '  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="col-12 col-lg-4 col-md-6 col-sm-10 my-sm-3 my-3 map-div-2">
                <div className='map-div-title'> 
                    <h1> Chennai Branch Address : </h1> 
                </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d972.6778835217057!2d80.02110102684479!3d12.797227068833788!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f9d564d8eb59%3A0x95ba50c1edcf4b6b!2sInnovaskill%20Maraimalai%20Nagar!5e0!3m2!1sen!2sin!4v1712983250757!5m2!1sen!2sin" className='col-12 '  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="col-12 col-lg-4 col-md-8 col-sm-10 my-4 my-sm-3 my-3 user-form d-flex flex-column justify-content-center align-items-center" id='contact'>

                <div className='user-form-title col-10'>
                    <h1 className='m-0'> Contact Us : </h1>
                </div>

                <form onSubmit={formSubmit} className='col-11 col-lg-10 col-md-10 col-sm-11 py-lg-3 py-md-3 py-sm-3 pt-3 pb-0  px-2 d-flex flex-column justify-content-center align-items-center' >

                    <div className="col-11 col-lg-8 col-md-8 col-sm-9  d-flex flex-column justify-content-around my-2">

                        <input type='text' name='contactname' placeholder='Name*' className='py-lg-1 py-md-2 py-2 px-3' onChange={storingValue}  value={userdata.contactname}/> <br/>

                        <input type='number' name='contactnumber' placeholder='Contact-Number*' className='py-lg-1 py-md-2 py-2 px-3' onChange={storingValue} value={userdata.contactnumber} /> <br/>

                        <input type='email' name='emailID' placeholder='Email-ID*' required className='py-lg-1 py-md-2 py-2 px-3' onChange={storingValue} value={userdata.emialID}/> <br/>

                        <input type='text' name='education' placeholder='Education/Qualication*' className='py-lg-1 py-md-2 py-2 px-3' onChange={storingValue} value={userdata.education}/> <br/>

                        <textarea placeholder='Message*' name='messages' className='px-3' onChange={storingValue} value={userdata.messages}>
                        </textarea>

                    </div>

                    <button className='col-4 col-lg-3 col-md-4 col-sm-4 py-lg-1 py-md-2  py-sm-1  py-2 my-4 my-lg-2 my-md-3 my-sm-3'> Submit </button>

                </form>

            </div>

        </div>

    </div>
    </>)
}
export default Locate;