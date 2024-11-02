import Navigation from '../nav/navigation';
import './franchise.css';
import { GiArchiveResearch } from 'react-icons/gi';

import banner from './images/14.svg';
import about from './images/40.svg';
import Franchise2 from './franchise-2/franchise-2';
import AXX from '../routes/axios';
import { useState } from 'react';

function Franchise(){

    return(<>

    <Navigation/>
  
    <div className="franchise-main-div container-fluid p-0">

            <div className="franchise-banner-div col-12 p-0">
                <img src={banner} className='w-100' />
            </div>

        <div className='franchise-body-div container my-4 my-lg-5 my-md-4 my-sm-4'>

            <div className='franchise-about-div row d-flex justify-content-evenly align-items-center'>

                <div className='franchise-about-img d-flex flex-column justify-content-center align-items-center col-lg-4 col-md-8 col-sm-10'>
                    <img src={about} className='img-fluid '/>
                </div>

                <div className='franchise-about-content d-flex flex-column justify-content-center align-items-center col-lg-5 col-md-11 col-sm-12 px-md-3 py-md-3 my-lg-0 my-md-4 my-sm-4 my-4'>

                    <h1 className='col-lg-12 col-md-11 col-sm-12'> Who we are ?</h1>

                    <p className='col-lg-12 col-md-10 col-sm-12  my-lg-3 '>
                        Innovaskill Technologies is a global training company which provides tailor-fit courses to suit individual customer's requirement with our Industry Ready Learning Management System. Our training and development programs will help you to learn and acquire new skills, as well as gain the professional knowledge required to progress in your career. We offer a vast array of practical & job oriented domain specific courses on IT software development, Electronic Design Automation, Industrial Automation, Information & Network Security, Mechanical & Civil Design, Solar Installation, Digital Marketing and many more Professional courses which are specifically designed to suit the needs of the Industry and also helps you to become an Entrepreneur.
                    </p>

                </div>

            </div>

        </div>

    </div>

    <Details/>

    <Franchise2/>

    </>)}
export default Franchise;

function Details(){

 
    const details = [
        {
            points:"Continuously updating syllabus based on industrial requirements and standards."
        },
        {
            points:"Focusing on various sectors by understanding the pulse of employment market."
        },
        {
            points:"Complete support by fulfilling neccessities like hardware and software services from corporate office at an affordable cost."
        },
        {
            points:"Easy to capture market with existing brandname."
        },
        {
            points:"Experienced and certified trainers and team."
        },
        {
            points:"Special attention towards highly demand courses."
        },
        {
            points:"In-house and out-house activity support from corporate office."
        },
        {
            points:"Sincere suggestions will be taken into consideration while launching new courses or products."
        },
        {
            points:"Easy to target customers/students/corporates with the sake of our high success rate."
        },
        {
            points:"Placement training will be given for all the enrolled candidates at the end of technical course."
        },
        {
            points:"End to end assistance from scratch."
        },
        {
            points:"Special assistance in recruiting and sourcing trainers and marketing staffs."
        },
        {
            points:"Provide technical, marketing and softskill training to staffs."
        },
        {
            points:"Session wise training presentations on every technologies."
        }
    ]

    const support = [
        {
            points:"Marketing support: Marketing and sales methodologies will be shared from our end inorder to capture local market."
        },
        {
            points:"Technical training: Trainers can upgrade themselves to new technologies based upon new courses launch by corporates and can earn expertise knowledge with certification."
        },
        {
            points:"Counsellors training: End to end training for counsellors to understand the prospects, pros and cons of the courses along with the marketing knowledge sharing sessions."
        },
        {
            points:"Techno-commercial sessions: For all courses or technologies which is launching by either of us will be supported by providing value added sessions on technical and competitive openness of product on market."
        },
        {
            points:"College events: Seminars, workshops or special events will be assisted from our end and proper guidance will be given on areas like money and time saving while conducting particular events."
        },
        {
            points:"Hardware setup: Hardware Products will be given at uncomparable low cost like PLC, network routing and switiching and embedded system products."
        },
        {
            points:"Support site: Online system to manage students right from registration till placement assistance."
        }
    ]

    return(<>

    <div className='franchise-details-main container-fluid'>

        <div className="row d-flex justify-content-center align-items-center">

            <div className='franchise-details-body col-lg-11 col-md-10 col-sm-10 col-11 d-flex flex-column justify-content-center align-items-center py-lg-4 py-md-4 py-sm-3 py-3 my-lg-3 my-md-4 mb-sm-4 mb-3 '>

                <div className='franchise-details-head col-11 col-lg-11 col-md-11 col-sm-11 col-12 my-lg-2 my-md-2 my-sm-2 my-2'>
                    <h1> Why to opt Innovaskill ? </h1>
                </div>

                <div className='franchise-details-content col-lg-11 col-md-12 col-sm-11 col-12'>
                    {
                        details.map( (d) => {
                            return(<>
                                <div className='franchise-content d-flex justify-content-center my-md-2 my-sm-2 my-1 '> <GiArchiveResearch className='i col-lg-1 col-md-1 col-sm-1 col-1' /> <h3 className='col-lg-11 col-md-10 col-sm-10 col-10'>  {d.points} </h3> </div> 
                                </>)
                        })
                    }  
                </div>

            </div>

                <div className='franchise-support-body col-lg-11 col-md-10 col-sm-10 col-11 d-flex flex-column justify-content-center align-items-center py-lg-4 py-md-4 py-sm-4 py-4 my-lg-3 my-md-3 my-sm-2 my-2'>

                    <div className='franchise-support-head col-lg-11 col-md-11 col-sm-11 col-12 my-lg-2 my-md-2'>
                        <h1> Franchise Support </h1>
                    </div>

                    <div className='franchise-support-content col-lg-11 col-md-11 col-sm-11 col-12 my-lg-2 my-md-2 my-sm-2 my-3 '>
                        {
                            support.map( (s) => {
                                return(<>
                                    <div className='support-content d-flex justify-content-center my-lg-1 my-md-1 my-1 '> <GiArchiveResearch className='j col-lg-1 col-md-1 col-sm-1 col-1'/> <h3 className='col-lg-11 col-md-11 col-sm-10 col-10'> {s.points} </h3> </div>
                                </>)
                            })
                        }
                    </div>

                </div>

        </div>

    </div>

    </>)
}

