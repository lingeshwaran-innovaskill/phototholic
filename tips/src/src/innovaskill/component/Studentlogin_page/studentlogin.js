import './studentlogin.css';
// import img from "./images/Innovaskill.png";
// import img from '../Studentlogin_page/std_login_image/5.jpg';
import logo from "./std_login_image/std_logo.png";

import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
// import { auth } from 'firebase';
import { auth } from '../../firebase.js';
import stl_backimg from './std_login_image/5.jpg';



import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Link, Navigate, useNavigate } from 'react-router-dom';


function Studentlogin(){

    const [phone, setPhone] = useState("")
    const [user, setUser] = useState(null)
    const [otp, setOtp] = useState("")
    const [codeInput , setCodeInput] =useState('')
    const navigate =useNavigate()

    const courseCodeData = [
        {
          code: "ITPLC001",
          mobile: [9876545674,919025655860, 919082413467, 919686595916, 2345678998, 9876543347 , 916380206760]
        },
        {
          code: "ITPLC002",
          mobile: [8765456789, 919025655860, 919082413467, 919686595916, 34533546453, 2324353535 ,  916380206760]
        },
        {
          code: "ITPLC003",
          mobile: [23344324324, 224242342, 68667767554, 5354353434, 4453463747, 5454345345]
        },
        {
            code: "ITPLC004",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC005",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC006",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC007",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC008",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC009",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC010",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC011",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC012",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        },
        {
            code: "ITPLC013",
            mobile: [9876545674, 9025655860, 89876545678, 9876780987, 2345678998, 9876543347]
        }
        // Add other course codes and mobile numbers here
    ];

    const sendotp = async () => {
        try {
            // Find the course code entered by the user in the courseCodeData array
            const courseData = courseCodeData.find(data => data.code === codeInput);
    
            if (courseData) {
                // If course code is found, check if the entered mobile number matches any in the course data
                if (courseData.mobile.includes(parseInt(phone.replace(/\D/g, '')))) {
                    // Mobile number matches, proceed to generate OTP
                    const Recaptca = new RecaptchaVerifier(auth, "recaptcha", {});
                    const confiremation = await signInWithPhoneNumber(auth, phone, Recaptca);
                    setUser(confiremation);
                } else {
                    // Mobile number doesn't match, display alert
                    alert("Mobile number is not Match. ");
                }
            } else {
                    // Course code not found, display alert
                alert("Course code is not valid.");
            }
        } catch (err) {
            // console.log(err);
           window.alert('failed');
        }
    };

    // const sendotp = async () => {
    //     try {
    //         // Find the course code entered by the user in the courseCodeData array
    //         const courseData = courseCodeData.find(data => data.code === codeInput);
    
    //         if (courseData) {
    //             // If course code is found, check if the entered mobile number matches any in the course data
    //             if (courseData.mobile.includes(parseInt(phone.replace(/\D/g, '')))) {
    //                 // Mobile number matches, proceed to generate OTP
    //                 const recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
    //                     'size': 'invisible',  // 'normal' for visible, 'invisible' for invisible
    //                     'callback': (response) => {
    //                         // reCAPTCHA solved, allow signInWithPhoneNumber.
    //                         console.log("Recaptcha solved:", response);
    //                     }
    //                 }, auth);
    
    //                 const confirmationResult = await signInWithPhoneNumber(auth, phone, recaptchaVerifier);
    //                 setUser(confirmationResult);
    //                 console.log("OTP sent successfully");
    //             } else {
    //                 // Mobile number doesn't match, display alert
    //                 alert("Mobile number does not match.");
    //             }
    //         } else {
    //             // Course code not found, display alert
    //             alert("Course code is not valid.");
    //         }
    //     } catch (err) {
    //         console.error("Error during sendotp:", err);
    //         alert("Error sending OTP. Please try again.");
    //     }
    // };

    const verifyotp = async  () => {
        try {
            // Confirm the OTP entered by the user 
            await user.confirm(otp); 
            // console.log (otp) 
            // console.log("OTP confirmed successfully");  
            alert("OTP confirmed successfully") ;
            navigate ('/')
        } catch (err) {
            // If there's an error confirming  the OTP, display an error message 
            // console.log(err); 
            alert("Invalid OTP . Please Enter Valid OTP ."); 
        } 
    };

    return (
        <div >

            <div className="container-fluid stl_total">
            
            <div className='row d-flex justify-content-between stl_combain'>

                {/*    1-row    */}

                    <div className='logoo col-5 col-sm-5 col-md-4 col-lg-2 '>
                        <img src={logo} className=' img-fluid' />
                    </div>
                    
                    <div className='col-4 col-sm-12 col-md-4 col-lg-2 ms-md-5'>
                    <Link to={'/'} > <i className="fa-solid fa-house" id='home_icon'></i></Link>
                    </div > 

                {/* second row */}

                    <div className='row'>

                    <div className='stl_form col-12 col-sm-12 col-md-8 col-lg-5 col-xl-4'>
                   
                    <h2>Student Login </h2>

                        <input type="text"
                            value={codeInput}   
                            onChange={(e) => setCodeInput(e.target.value)}
                            placeholder="Enter Course code  *" className='stl_codeinput'
                            /><br/>

                        <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={(phone) => setPhone('+' + phone)}
                            type="text"
                            className='stl_phoneinput '
                            placeholder='Enter Mobile Number  *'
                            
                        /><br/>

                    
                        {/* <div> */}
                            <button variant='contained' className='stl_otpgen col-6 col-sm-6 col-md-6 col-lg-5 col-xl-5' onClick={sendotp}>Generate OTP</button>

                            <input type="number" onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP *" className='stl_verotp col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5' />

                        {/* </div> */} 

                        <section id='recaptcha'></section><br/>

                        <button className='stl_submit btn col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' type='submit' onClick={verifyotp}>  Submit </button><br /><br/>
                    </div> 
           
                    
                    </div>
                   
            </div >
                    {/* <ParticlesComponent id="form-particles" /> */}

  

            </div>
            </div>

    
    )
}
export default Studentlogin;



// const ParticlesComponent = (props) => {

//     const [init, setInit] = useState(false);

//     useEffect(() => {
//         initParticlesEngine(async (engine) => {

//             await loadSlim(engine);

//         }).then(() => {
//             setInit(true);
//         });

//     }, []);

//     const particlesLoaded = (container) => {
//         console.log(container);
//     };

//     const options = useMemo(
//         () => ({

//               background: {
//                 color: {
//                   value: "#fff",
//                 },
//                 height: {
//                     value:"50"
//                 }
//             },
//               height:"50vh",
//             fpsLimit: 120,
//             interactivity: {
//                 events: {
//                     onClick: {
//                         enable: true,
//                         mode: "repulse",
//                     },
//                     onHover: {
//                         enable: true,
//                         mode: 'grab',
//                     },
//                     resize: true
//                 },
//                 modes: {
//                     grab: {
//                         distance: 100,
//                     },
//                     push: {
//                         quantity: 4,
//                         distance: 100,
//                         duration: 1
//                     },
//                     repulse: {
//                         distance: 200,
//                         duration: 0.4,
//                     },
//                 },
//             },
//             particles: {
//                 color: {
//                     value: "#fff",
//                 },
//                 links: {
//                     color: "#ffffff7a",
//                     distance: 100,
//                     enable: true,
//                     opacity: 1,
//                     width: 1,
//                 },
//                 move: {
//                     direction: "none",
//                     enable: true,
//                     outModes: {
//                         default: "bounce",
//                     },
//                     random: true,
//                     speed: 1,
//                     straight: false,
//                 },
//                 number: {
//                     density: {
//                         enable: true,
//                     },
//                     value: 400,
//                 },
//                 opacity: {
//                     value: 0.5,
//                 },
//                 shape: {
//                     type: "circle",
//                 },
//                 size: {
//                     value: { min: 1, max: 3 },
//                 },
//             },
//             detectRetina: true,
//         }),
//         [],
//     );

//     return <Particles id={props.id} init={particlesLoaded} options={options} />

// };



