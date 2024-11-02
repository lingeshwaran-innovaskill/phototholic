import { useContext, useEffect, useState } from 'react';
import './tech.css';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import AXX from '../../routes/axios';
import t1 from './images/t1.jpg';
import t2 from './images/t2.jpg';
import t3 from './images/t3.jpg';
import t4 from './images/t4.jpg';

function Technologies(){

    const [tech , setTech ] = useState([
        {
            techImg:t1,
            techTitle:"Diploma in Embedded System",
            techDes:"Embedded systems are more than part of human life. For instance, one cannot imagine life...",
            
        },
        {
            techImg:t2,
            techTitle:"Diploma in IOT",
            techDes:"The internet of things, or IoT, is a system of interrelated computing devices, mechanical...",
            borderRadius:"style-radius"
        },
        {
            techImg:t3,
            techTitle:"Master Program in Embedded system",
            techDes:"Embedded systems are more than part of human life. For instance, one cannot imagine lif..... ",
            techLinks:"https://www.innovaskill.in/single_course.php?id=69"
        },
        {
            techImg:t4,
            techTitle:"Master Program in Information Security",
            techDes:"This course is designed to impart knowledge about detailed knowledge of Computer Networks...",
            borderRadius:"style-radius"
        },
        {
            techTitle:"MASTER PROGRAM IN AUTOMATION ENGINEER",
            techContent:""
        },
        {
            techTitle:"MASTER PROGRAM IN INFORMATION SECURITY",
            techContent:"",
            borderRadius:"style-radius"
        },
        {
            techTitle:"MASTER PROGRAM IN PYTHON",
            techContent:""
        },
        {
            techTitle:"MASTER PROGRAM IN SOFTWARE DEVELOPMENT",
            techContent:"",
            borderRadius:"style-radius"
        },
    ]);

    const [ courseData , setCoursedata ] = useState([]);

    useEffect(() => {
        AXX.get("admin/courseGet")
        .then((res) => { setCoursedata(res.data.data) })
        .catch( (err) => {} )
    },[])

    const arr = [ 0 , 3 , 2 , 1 ,  4 , 7  , 6 , 5 , 8 ];

    // const handle =(e)=>{
    //     e.preventDefault();
    // }

return (<>

<div className="tech-main container d-flex flex-column justify-content-center" id='job-oriented-pog'>

    <div className="row">
        <div className='tech-head col-12 my-3'>
            <h1 className=''> Job Oriented Programs </h1>
        </div>
    </div>

<div className="tech-body row d-flex justify-content-around ">

    {courseData.map((programs  , proInd) => {
        return(<>
            <div className='tech-content col-10 col-sm-6 col-md-5 col-lg-3 my-3' >
                <div className="tech-div p-0 " id = { proInd == arr[proInd] ? `` : `style-radius` } > 
                    <div className="tech-img col-12 d-flex justify-content-center">
                        <img src={programs.courseImg} className='img-fluid '/>
                    </div>
                    <div className=' py-3 px-4 p-sm-3 p-md-3 p-lg-3 '>
                        <h3> {programs.courseHead} </h3>
                        <p> {programs.courseDetails} </p>
                        <Link className='my-3' to={programs.courseLink}> Learn More... </Link>
                    </div>
                </div>
            </div>
        </>)
    })}

{/* </div>

<div className="tech-body row d-flex justify-content-around "> */}

{/* {tech.map((programs) => {
        return(<>
            <div className='tech-content col-10 col-sm-6 col-md-5 col-lg-3 my-3'  >
            <div className="tech-div p-0  " id={programs.borderRadius ? programs.borderRadius : "" }>
                <div className="tech-img col-12 d-flex justify-content-center">
                <img src={programs.techImg} className='img-fluid '/>
                </div>
                <div className=' py-3 px-4 p-sm-3 p-md-3 p-lg-3  '>
                    <h3> {programs.techTitle} </h3>
                    <p> {programs.techDes} </p>
                    <Link className='my-3'> Learn More... </Link>
                </div>
            </div>
            </div>
        </>)
})} */}

{/* </div>

<div className="tech-body row d-flex justify-content-around "> */}

{/* {tech.slice(0,4).map((programs) => {
        return(<>
            <div className='tech-content col-10 col-sm-6 col-md-5 col-lg-3  my-3'  >
            <div className="tech-div p-0  " id={programs.borderRadius ? programs.borderRadius : "" }>
                <div className="tech-img col-12 d-flex justify-content-center">
                <img src={programs.techImg} className='img-fluid '/>
                </div>
                <div className=' py-3 px-4 p-sm-3 p-md-3 p-lg-3   '>
                    <h3> {programs.techTitle} </h3>
                    <p> {programs.techDes} </p>
                    <Link className='my-3'> Learn More... </Link>
                </div>
            </div>
            </div>
        </>)
})}

{tech.slice(0,4).map((programs) => {
        return(<>
            <div className='tech-content col-10 col-sm-6 col-md-5 col-lg-3  my-3'  >
            <div className="tech-div p-0  " id={programs.borderRadius ? programs.borderRadius : "" }>
                <div className="tech-img col-12 d-flex justify-content-center">
                <img src={programs.techImg} className='img-fluid '/>
                </div>
                <div className=' py-3 px-4 p-sm-3 p-md-3 p-lg-3   '>
                    <h3> {programs.techTitle} </h3>
                    <p> {programs.techDes} </p>
                    <Link className='my-3'> Learn More... </Link>
                </div>
            </div>
            </div>
        </>)
})} */}

{/* {tech.slice(0,4).map((programs) => {
        return(<>
            <div className='tech-content col-10 col-sm-6 col-md-5 col-lg-3  my-3'  >
            <div className="tech-div p-0  " id={programs.borderRadius ? programs.borderRadius : "" }>
                <div className="tech-img col-12 d-flex justify-content-center">
                <img src={programs.techImg} className='img-fluid '/>
                </div>
                <div className=' py-3 px-4 p-sm-3 p-md-3 p-lg-3   '>
                    <h3> {programs.techTitle} </h3>
                    <p> {programs.techDes} </p>
                    <Link className='my-3'> Learn More... </Link>
                </div>
            </div>
            </div>
        </>)
})} */}

</div>

</div>
    </>);
}

export default Technologies;