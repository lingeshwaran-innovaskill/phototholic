import { Link , NavLink } from 'react-router-dom';
import './footer.css';
import logo from './images/logo.png';
import { useEffect, useState } from 'react';
import facebook from './images/facebook.png';
import youtube from './images/youtube.png';
import insta from './images/insta.png';
import linkedin from './images/linkedin.png';
import blog from './images/blog.png';
import axios from "axios";
import AXX from '../routes/axios';

function Footer() {

    const [train , setTrain] = useState([]);
    const [service , setService] = useState([])

    // const trainingDomain = [
    //     {
    //         domainTitle:"Electronic Design Automation",
    //         href:"/embedded"
    //     },
    //     {
    //         domainTitle:"Industrial Automation",
    //         href:"/industrial-auto"
    //     },
    //     {
    //         domainTitle:"Data Science",
    //         href:"/data-science"
    //     },
    //     {
    //         domainTitle:"Software Development",
    //         href:"/c"
    //     },
    //     {
    //         domainTitle:"Full Stack Development",
    //         href:"/mern-stack"
    //     },
    //     {
    //         domainTitle:"Mechanical Design",
    //         href:"/"
    //     }
    // ];

    // const service = [
    //     {
    //         serviceTitle:"Website Design Development"
    //     },
    //     {
    //         serviceTitle:"Mobile App Development"
    //     },
    //     {
    //         serviceTitle:"Collage Academic Project"
    //     },
    //     {
    //         serviceTitle:"Internship"
    //     },
    //     {
    //         serviceTitle:"PLC Control Panel"
    //     }
    // ];

    useEffect(()=>{

        AXX.get("admin/getTrain")
        .then((res)=>{setTrain(res.data.data)})
        .catch((err)=>{})

        AXX.get("admin/getService")
        .then((res)=>{
            ;setService(res.data.data)})
        .catch((err)=>{})

    },[])

    return (<>
        <div className="footer-main container-fluid mt-5">

            <div className='footer-body row d-flex my-5 justify-content-center justify-content-lg-evenly justify-content-md-center justify-content-sm-center align-items-start'>

                <div className='footer-content-1 col-11 col-lg-3 col-md-10 col-sm-10 my-3 my-lg-0 my-md-3 my-sm-3 '>

                    <div className='footer-head col-6 col-lg-6 col-md-4 '>
                        <img src={logo} />
                    </div>

                    <div className='footer-content '>

                        <p className='my-4 my-lg-2 my-md-4 my-sm-3'> Skills are critically important for survival and success in industries for several reasons: Competitive Advantage | Efficiency and Productivity | Adaptability and Flexibility | Employee Retention and Satisfaction | Customer Satisfaction | Risk Management | Innovation and Growth | Sustainability. Investing in skill development is not just beneficial but essential for the survival and growth of industries.</p>

                        <div className='footer-media-icon d-flex justify-content-center align-items-center'>

                            <Link to={"https://www.instagram.com/innovaskill/?hl=en"} target='blank'>
                                <img src={insta}/>
                            </Link>

                            <Link to={"https://www.facebook.com/Innovaskilltechnologies"} target='blank'>
                                <img src={facebook}/>
                            </Link>

                            <Link to={"https://in.linkedin.com/in/innovaskill-technologies-088943214?trk=org-employees&original_referer=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Finnovaskill"} target='blank'>
                                <img src={linkedin}/>
                            </Link>

                            <Link to={"https://www.youtube.com/@innovaskill2682/featured"} target='blank'>
                                <img src={youtube}/>
                            </Link>

                            <NavLink to={"/blog"} replace>
                                <img src={blog}/>
                            </NavLink>

                        </div>

                    </div>
                </div>

                <div className='footer-content-2 col-11 col-lg-2 col-md-5 col-sm-5 px-lg-0 my-3 my-lg-0 my-md-3 my-sm-3'>
                    <div className='footer-head '>
                        <h1> Training Domain : </h1>
                    </div>

                    <div className='footer-content'>
                        {train.map((d)=>{
                                return(<>
                                    <NavLink className="nav-link px-0" to={d.trainingLink} >{d.trainingTitle}</NavLink>
                                </>)
                            })
                        }
                    </div>

                </div>

                <div className='footer-content-2 col-11 col-lg-2 col-md-5 col-sm-5 px-lg-0 my-3 my-lg-0 my-md-3 my-sm-3'>
                    <div className='footer-head'>
                        <h1> Our Service : </h1>
                    </div>
                    <div className='footer-content'>

                        {service.map( (s) => {
                            return(<>
                                <Link className="nav-link px-0" to={s.serviceLink}> {s.serviceTitle} </Link>
                            </>)
                        })}

                    </div>
                </div>

                <div className='footer-content-address col-11 col-lg-3 col-md-10 col-sm-10 my-3 my-lg-0 my-md-3 my-sm-3 '>

                    <div className='footer-add-div'>

                        <h1> Bengaluru Corporate Office </h1>

                        <div className='footer-addres'>
                            <a href='https://www.google.com/maps/place/Innovaskill+Technologies/@12.9163777,77.601665,18z/data=!4m6!3m5!1s0x3bae1561a753b37d:0x1ce340f91823652d!8m2!3d12.9165529!4d77.6025501!16s%2Fg%2F11j5d3hfgj?entry=ttu' target='blank' className='nav-link px-0 my-3 my-lg-0 my-md-3 my-sm-3'>
                                #47, 100 Feet Ring Rd, Vysya Bank Colony, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076
                            </a>
                        </div>

                    </div>

                    <div className='footer-add-div'>
                        <div>
                        <h1 className=''> Chennai Branch :</h1>
                        </div>
                        <div className='footer-addres'>
                            <a href='https://www.google.com/maps/place/Innovaskill+Maraimalai+Nagar/@12.7972375,80.0194649,17z/data=!3m2!4b1!5s0x3a52f9e2e355d01d:0xa043b2d339b62a26!4m14!1m7!3m6!1s0x3bae1561a753b37d:0x1ce340f91823652d!2sInnovaskill+Technologies!8m2!3d12.9165529!4d77.6025501!16s%2Fg%2F11j5d3hfgj!3m5!1s0x3a52f9d564d8eb59:0x95ba50c1edcf4b6b!8m2!3d12.7972323!4d80.0220398!16s%2Fg%2F11vfbjxj30?entry=ttu' target='blank' className='nav-link px-0 my-lg-0 my-3 my-md-3 my-sm-3 '>
                                1st Floor, No 48, HIG, Vallal MGR Salai, above Omprakash Honda, NH-1, Maraimalai Nagar, Tamil Nadu 603209
                            </a>
                        </div>
                    </div>

                </div>

            </div>

            <div className='footer-C-rights row d-flex justify-content-center align-items-center'>
                <h3 className='col-12'> &copy;Copyright Innovaskill Technologies All Rights Reserved | Designed By Innovaskill Technologies  </h3>
            </div>

        </div>
    </>)
}
export default Footer;