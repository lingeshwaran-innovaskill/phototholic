import './navigation.css';
import logo from './images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navigation(){

    const [navData , setNavData] = useState([
        {
            navName:"Home",
        },
        {
            navName:"Discover Us",
            href:"#welcome"
        },
        {
            navName:"Service",
            icon:"fa-solid fa-angle-down",
            more:[
                {
                    navName:"Web Design & Development"
                },
                {
                    navName:"Mobile App & Development (Android & iOS)"
                }
            ]
        },
        {
            navName:"Training",
            icon:"fa-solid fa-angle-down",
            more:[
                {
                    navHead:"Electronics Automation Engineer",
                    courses:[
                        {
                            navName:"PCB Design"
                        },
                        {
                            navName:"Embedded System"
                        },
                        {
                            navName:"Embedded Linux"
                        },
                        {
                            navName:"IoT"
                        },
                        {
                            navName:"Matlab"
                        }
                    ]
                },
                {
                    navHead:"Industrial Automation",
                    courses:[
                        {
                            navName:"Master Program in Industrial Automation"
                        }
                    ]
                },
                {
                    navHead:"Electrical Power System Design and Simulation",
                    courses:[
                        {
                            navName:"AutoCAD Electrical"
                        },
                        {
                            navName:"EPLAN"
                        },
                        {
                            navName:"ETAP"
                        }
                    ]
                },
                {
                    navHead:"Mechanical Design",
                    courses:[
                        {
                            navName:"AutoCAD Mechanical"
                        },
                        {
                            navName:"Catia"
                        },
                        {
                            navName:"Creo"
                        },
                        {
                            navName:"SolidWorks"
                        },
                        {
                            navName:"NX-CAD"
                        },
                        {
                            navName:"Ansys"
                        },
                    ]
                },
                {   
                    navHead:"Computer Hardware and Networking",
                    courses:[
                        {
                            navName:"CCNA"
                        },
                        {
                            navName:"RedHat Linux"
                        },
                        {
                            navName:"AWS"
                        }
                    ]
                },
                {
                    navHead:"Software Development",
                    courses:[
                        {
                            navName:"C"
                        },
                        {
                            navName:"C++"
                        },
                        {
                            navName:"JAVA"
                        },
                        {
                            navName:"Python"
                        }
                    ]
                },
                {
                    navHead:"Full Stack Development",
                    courses:[
                        {
                            navName:"UI-UX Design"
                        },
                        {
                            navName:"Graphics Designer"
                        },
                        {
                            navName:"PHP Full Stack Developer"
                        },
                        {
                            navName:"MEAN Full Stack Developer"
                        },
                        {
                            navName:"MERN Full Stack Developer",
                            href:"/mern-stack"
                        },
                        {
                            navName:"Java Full Stack Developer"
                        },
                        {
                            navName:"Phyton Full Stack Developer"
                        },
                        {
                            navName:".Net Full Stack Developer"
                        }
                    ]
                },
                {
                    navHead:"Mobile App Development",
                    courses:[
                        {
                            navName:"Using Flutter"
                        },
                        {
                            navName:"Using React Native"
                        },
                    ]
                },
                {
                    navHead:"Software Testing",
                    courses:
                    [
                        {
                            navName:"SQL"
                        },
                        {
                            navName:"Manual Testing"
                        },
                        {
                            navName:"Selenium Using Java"
                        },
                        {
                            navName:"Selenium Using Python"
                        }
                    ]
                },
                {
                    navHead:"Special Program",
                    courses:[
                        {
                            navName:"Deep Learning"
                        },
                        {
                            navName:"Machine Learning"
                        },
                        {
                            navName:"Artificial Inteligence"
                        },
                        {
                            navName:"Data Science"
                        },
                        {
                            navName:"Data Analytics"
                        },
                        {
                            navName:"Virtual Reality"
                        },
                        {
                            navName:"Argumental Reality"
                        },
                        {
                            navName:"Robatic Process Automation"
                        }
                    ]
                },
                {
                    navHead:"Kids",
                    courses:[
                        {
                            navName:"Kids Keep Learning",
                            href:"/kids"
                        }
                    ]
                }
            ]
        },
        {
            navName:"Blog",
            href:"/blog"
        },
        {
            navName:"Login",
            icon:"fa-solid fa-angle-down",
            more:[
                {
                    navName:"Online Payment",
                    href:"online-payment"
                },
                {
                    navName:"Employee Login"
                },
                {
                    navName:"Student Login",
                    // href:"student-login"
                }
            ]
        },
        {
            navName:"Contact Us",
            href:"#contact"
        }
    ])

    const [ popupNav , setPopupNav ]=useState([]);
    const [ clas , setClas ]=useState();

    const popup = (pop) => {

        if(!pop.more){
            setPopupNav([])
        }
        else{
            setPopupNav([...pop.more])
        }
        
        if(pop.className){
            setClas(pop.className)
    
        }
        else{
            setClas()
        }
    
    }



    const popupHide = () =>{
        setPopupNav([])
    }

    return (<>

    <div className="inn-nav">
        <div className="inn-nav-body">
            <div className='logo-div'>
                <img src={logo}/>
            </div>
                <div className='nav-div'>

                    <nav>
                        {
                        navData.map((e)=>{
                            return(<>
                            <div className='nav-a'>
                                {e.href ? <a href={e.href} onMouseEnter={()=>{popup(e)}}> {e.navName} </a> :
                                <NavLink to={e.href} onMouseEnter={()=>{popup(e)}} >  {e.navName} <i className={e.icon}></i> </NavLink>
                            }
                            </div>
                            </>)
                        })
                        }
                    </nav>

                    {popupNav.length == 0 ? "" :                        
                        <div className='main-popup-nav'>
                            {clas == "training" ?
                        <div className={clas}>
                            <div className='training-body' onMouseLeave={popupHide}>

                            <div className='nav-1'>

                            {popupNav.slice(0 , 4).map((d)=>{
                                return(<>
                                    <h3> {d.navHead} </h3>
                                        <div className='train-content'>
                                            {d.courses.map((c)=>{
                                                return(<>
                                                <NavLink to={c.href}> {c.navName} </NavLink>
                                                </>)
                                            })}
                                        </div>
                                </>)
                            })}

                            </div>

                            <div className='nav-2'>

                            {popupNav.slice(4 , 7).map((d)=>{
                                return(<>
                                    <h3> {d.navHead} </h3>
                                        <div className='train-content'>
                                            {d.courses.map((c)=>{
                                                return(<>
                                                <NavLink to={c.href}> {c.navName} </NavLink>
                                                </>)
                                            })}
                                        </div>
                                </>)
                            })}

                            </div>

                            <div className='nav-3'>

                            {popupNav.slice(7 , 11).map((d)=>{
                                return(<>
                                <div className='nav-content'>
                                    <h3> {d.navHead} </h3>
                                        <div className='train-content'>
                                            {d.courses.map((c)=>{
                                                return(<>
                                                <NavLink to={c.href}> {c.navName} </NavLink>
                                                </>)
                                            })}
                                        </div>
                                </div>
                                </>)
                            })}

                            </div>
                            
                            </div>
                        </div>
                            :
                        <div className={clas} onMouseLeave={popupHide}>
                            {
                                popupNav.map((d)=>{
                                    return(<>
                                    <NavLink to={d.href}> {d.navName} </NavLink>
                                    </>)
                                })
                            }
                        </div>
                            }
                        </div>
                    }
                </div>

        </div>
    </div>

    </>);
}

export default Navigation;


 {/* { d.navHead && d.courses ?
                                
                                    <div className='nav-3'>

                                     <h3> {d.navHead} </h3>
                                        <div className='ser'>
                                            {d.courses.map((c)=>{
                                                return(<>
                                                <NavLink to={'/'}> {c.navName} </NavLink>
                                                </>)
                                            })}
                                        </div>
                                    </div>
                                     : */}