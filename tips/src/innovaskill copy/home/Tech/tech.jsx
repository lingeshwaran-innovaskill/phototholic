import { useState } from 'react';
import './tech.css';
import { Link } from 'react-router-dom';

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

    return (<>
    <div className="tech-main">

        <div className='tech-head'>
            <h1> Job Oriented Programs </h1>
        </div>

        <div className="tech-body">

            {/* <div className='tech-main-content'>

                <div className='tech-div'>
                    <img src={t1}/>
                    <div className='tech-content'>
                        <h3> Diploma in Embedded System </h3>
                        <p> Embedded systems are more than part of human life. For instance, one cannot imagine life... </p>
                        <Link> Learn More... </Link>
                    </div>
                </div>

                <div className='tech-div' id='style-radius'>
                    <img src={t2}/>
                    <div className='tech-content'>
                        <h3>Diploma in IOT</h3>
                        <p> Embedded systems are more than part of human life. For instance, one cannot imagine life... </p>
                        <Link> Learn More... </Link>
                    </div>
                </div>
                
                <div className='tech-div'>
                    <img src={t3}/>
                    <div className='tech-content'>
                        <h3>Master Program in Embedded system</h3>
                        <p> Embedded systems are more than part of human life. For instance, one cannot imagine life... </p>
                        <Link> Learn More... </Link>
                    </div>
                </div>

                <div className='tech-div' id='style-radius' >
                    <img src={t4}/>
                    <div className='tech-content'>
                        <h3> Master Program in Information Security </h3>
                        <p> Embedded systems are more than part of human life. For instance, one cannot imagine life... </p>
                        <Link> Learn More... </Link>
                    </div>
                </div>
            </div> */}

            <div className='tech-main-content'>

            {tech.slice(0,4).map((programs) => {
                return(<>
                    <div className='tech-div' id={programs.borderRadius ? programs.borderRadius : "" } >
                        <img src={programs.techImg}/>
                        <div className='tech-content'>
                            <h3> {programs.techTitle} </h3>
                            <p> {programs.techDes} </p>
                        <Link> Learn More... </Link>
                        </div>
                    </div>
                </>)
            })}

            </div>

            <div className='tech-main-content'>

            {tech.slice(0,4).map((programs) => {
                return(<>
                    <div className='tech-div' id={programs.borderRadius ? programs.borderRadius : "" }>
                        <img src={programs.techImg}/>
                        <div className='tech-content'>
                            <h3> {programs.techTitle} </h3>
                            <p> {programs.techDes} </p>
                        <Link> Learn More... </Link>
                        </div>
                    </div>
                </>)
            })}

            </div>

            <div className='tech-main-content'>

            {tech.slice(0,4).map((programs) => {
                return(<>
                    <div className='tech-div' id={programs.borderRadius ? programs.borderRadius : "" }>
                        <img src={programs.techImg}/>
                        <div className='tech-content'>
                            <h3> {programs.techTitle} </h3>
                            <p> {programs.techDes} </p>
                        <Link > Learn More... </Link>
                        </div>
                    </div>
                </>)
            })}

            </div>

        </div>

    </div>
    </>);
}

export default Technologies;