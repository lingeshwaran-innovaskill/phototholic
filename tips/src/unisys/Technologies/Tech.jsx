import { Link } from 'react-router-dom';
import './Tech.css';
import { useState } from 'react';


import t1 from './images/t1.jpg';
import t2 from './images/t2.jpg';
import t3 from './images/t3.jpg';
import t4 from './images/t4.jpg';




function Technologies(){


    const [ tech , Settech ] = useState([
        {
            techImg:t1,
            techTitle:"Diploma in Embedded System",
            techDes:"Embedded systems are more than part of human life. For instance, one cannot imagine life..."
        },
        {
            techImg:t2,
            techTitle:"Diploma in IOT",
            techDes:"The internet of things, or IoT, is a system of interrelated computing devices, mechanical..."
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
        }
    ])

    return (<>
        <div className="tech-main" id='trending'>

            <div className='tech-body-div'>

                <div className='tech-title-div'>
                    <h1 className='tech-title'> Trending Technologies </h1>
                </div>

                <div className='tech-div'>

                    {tech.map((t) => {
                        return(<>
                        <div className='tech-content'>
                            <img src={t.techImg}/>
                                <div className='content-des'>
                                    <h1> {t.techTitle} </h1>
                                    <h3> {t.techDes} </h3>
                                    <Link to={t.techLinks} target='blank'> Learn more </Link>
                                </div> 
                        </div>
                        </>)
                    } )}
                    
                </div>

                <div className='tech-btn'>
                    <button> View all solution </button>
                </div>

            </div>
        </div>
    </>);
}

export default Technologies;