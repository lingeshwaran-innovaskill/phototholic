import './enquiry.css';
import logo from "./images/logo.png";
import axios from 'axios';
import  AXX  from '../routes/axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// for Animation

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from 'react-router-dom';

function Enquiry(){

const [userdatas , setUserdatas] = useState({
    userName:"",
    studies:"",
    number:"",
    email:"",
    courses:"",
    location:"",
    messages:""
})

const [ err , setErr ] = useState({});

const validateChecking = (d) => {

    if( d.userName == "" || d.studies == "" || d.email == "" || d.courses == "" || d.location == "" || d.messages == ""){
      alert('please fill all the fields')
    }

    else if( d.number == ""){
      alert('fill the number');
    }

    else if( d.number.length != 10 ){
      alert("enter valid number");
    }

}

// console.log(userdatas);

const storingvalue = (e) => {
  setUserdatas({...userdatas , [e.target.name]:e.target.value})
}

const formSubmit = (e) =>{

  e.preventDefault();
  validateChecking(userdatas);

  if(userdatas.userName !== "" && userdatas.studies !== "" && userdatas.email !== "" && userdatas.number !== "" && userdatas.number.length == 10 && userdatas.messages !== "" && userdatas.location !== "" && userdatas.courses !== "" ){
    setUserdatas({
      userName:"",
      number:"",
      email:"",
      courses:"",
      messages:"",
      location:"",
      studies:""
    })


    AXX.post("enquiryForm/postform" , userdatas)
    .then( (res) => {
        toast.success( res.data.message ) } )
     .catch( (err) => {
      toast.error("data error")} )
    }

}

    const courseName = [
      {
        course:"PCB Design"
      },
      {
        course:"Embedded System"
      },
      {
        course:"Embedded Linux"
      },
      {
        course:"IoT"
      },
      {
        course:"Matlab"
      },
      {
        course:"PLC(Master Program in Industrial Automation)"
      },
      {
        course:"AutoCAD Electrical"
      },
      {
        course:"EPLAN"
      },
      {
        course:"ETAP"
      },
      {
        course:"AutoCAD Mechanical"
      },
      {
        course:"Catia"
      },
      {
        course:"Creo"
      },
      {
        course:"SolidWorks"
      },
      {
        course:"NX-CAD"
      },
      {
        course:"Ansys"
      },
      {
        course:"CCNA"
      },
      {
        course:"RedHat Linux"
      },
      {
        course:"AWS"
      },
      {
        course:"C"
      },
      {
        course:"C++"
      },
      {
        course:"Java"
      },
      {
        course:"Python"
      },
      {
        course:"UI-UX Design"
      },
      {
        course:"Graphics Designer"
      },
      {
        course:"MEAN Full Stack Developer"
      },
      {
        course:"MERN Full Stack Developer"
      },
      {
        course:"JAVA Full Stack Developer"
      },
      {
        course:"Python Full Stack Developer"
      },
      {
        course:".Net Full Stack Developer"
      },
      {
        course:"Using Flutter"
      },
      {
        course:"Using React Native"
      },
      {
        course:"SQL"
      },
      {
        course:"Manual Testing"
      },
      {
        course:"Selenium Using Java"
      },
      {
        course:"Selenium Using Python"
      },
      {
        course:"Deep Learning"
      },
      {
        course:"Machine Learning"
      },
      {
        course:"Artificial Inteligence"
      },
      {
        course:"Data Science"
      },
      {
        course:"Data Analytics"
      },
      {
        course:"Virtual Reality"
      },
      {
        course:"Argumental Reality"
      },
      {
        course:"Robatic Process Automation"
      },
      {
        course:"Kids Keep Learning"
      }
    ];
  
    return(<>


    <div className="container-fluid  enquiry-form-main  d-flex flex-column justify-content-evenly align-items-center justify-content-md-center justify-content-sm-evenly">

      <div className="row my-2 my-sm-1 my-md-3 my-lg-2 d-flex justify-content-evenly align-items-center">

          <div className='col-6 col-sm-6 col-md-5 col-lg-3 logo-1 d-flex justify-content-center align-items-center'>
            <img src={logo} className="img-fluid"/>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-9 d-flex justify-content-end align-items-center">

          <div id='enquiry-home-btn' className='col-4 col-sm-5 col-md-4 col-lg-2 '>
            <Link to={'/'} className='col-9 col-sm-4 col-md-4 col-lg-3  py-1 px-2'>
                <i className="fa-sharp fa-solid fa-house " ></i>  
              </Link>
          </div>

          </div>

      </div>

      <div className="row enquiry-body py-3 d-flex flex-column justify-content-center align-items-center">

          <div className="form-head my-3 col-7 col-sm-6 col-md-6 col-lg-6 ">
            <h1> Enquiry Form </h1>
          </div>

          <form onSubmit={formSubmit} className=' col-12 d-flex flex-column justify-content-center align-items-center '>

            <div className=" d-flex flex-column justify-content-around col-9  col-sm-9 col-md-9 col-lg-9">

              <input type="text" name='userName'  placeholder="Name *" className="my-1 py-1 px-3" onChange={storingvalue} value={userdatas.userName}/>

              <input type="text" name='studies'  placeholder="Education/Qualification *" className="my-1  py-1 px-3" onChange={storingvalue} value={userdatas.studies}/>

              <input type="number" name='number' placeholder="Contact Number *" className="my-1 py-1 px-3" onChange={storingvalue} value={userdatas.number}/>

              <input type="email" name='email' placeholder="Email ID *" className="my-1  py-1 px-3" onChange={storingvalue} value={userdatas.email}/>

              <input list='courses' name='courses' className="datalist my-1  py-1 px-3" placeholder='Choose Your Courses *' onChange={storingvalue} value={userdatas.courses} />

                <datalist id='courses'>

                  {courseName.map( (c) => {
                    return(<>
                      <option> {c.course} </option>
                        </>)
                  })}

                </datalist>

                <select className='col-12 my-1 py-1 px-3' name='location' onChange={storingvalue} value={userdatas.location}>

                  <option className='col-9' > Choose Your Location * </option>
                  <option className='col-9' value={"BTM Layout , Banglore"}> BTM Layout , Banglore </option>
                  <option className='col-9' value={"Maraimalai Nager , Chengalpattu/Chennai"}> Maraimalai Nager , Chengalpattu/Chennai </option>

                </select>

                <textarea placeholder="Message" name='messages' cols={24} rows={3} className='my-1  py-1 px-3' onChange={storingvalue} value={userdatas.messages}>
                </textarea>

            </div>

                <button className='my-2 col-4'> Submit </button>

              </form>

            </div>

              {/* <div className="particles">
                  <ParticlesComponent id="form-particles" />
              </div> */}
    
    </div>



    </>)
}
export default Enquiry;



const ParticlesComponent = (props) => {

const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {

    await loadSlim(engine);

    }).then(() => {
      setInit(true);
    });

  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({

    //   background: {
    //     color: {
    //       value: "#fff",
    //     },
    //     height: {
    //         value:"50"
    //     }
    // },
    //   height:"50vh",
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize:true
        },
        modes: {
          grab: {
            distance: 100,
          },
          push: {
            quantity: 4,
            distance:100,
            duration:1
        },
        repulse: {
            distance: 200,
            duration: 0.4,
        },
      },
      },
      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#ffffff7a",
          distance: 100,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: 0.5,
        },
        shape:{
          type: "circle",
        },
        size: {
          value: { min: 1 , max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

return <Particles id={props.id} init={particlesLoaded} options={options} />

};
