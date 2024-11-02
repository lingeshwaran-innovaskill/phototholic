import './navi.css';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useState , useEffect } from 'react';
import axios from 'axios';
import AXX from '../routes/axios';

function Navigation(){

    const [navData , setNavData] = useState([
        {
            navName:"Home",
            href:"/"
        },
        {
            navName:"Discover Us",
            href:"/#welcome"
        },
        {
            navName:"Service",
            className:"service",
            more:[
                {
                    navName:"Web Design & Development",
                    href:'/#development'
                },
                {
                    navName:"Mobile App & Development (Android & iOS)"
                }
            ]
        },
        {
            navName:"Training",
            className:"training",
            more:[
                {
                    navHead:"Electronics Automation Engineer",
                    courses:[
                        {
                            navName:"PCB Design",
                            href:"/pcb"
                        },
                        {
                            navName:"Embedded System"
                        },
                        {
                            navName:"Automotive Embedded System"
                        },
                        {
                            navName:"Embedded Linux"
                        },
                        {
                            navName:"IoT"
                        },
                        {
                            navName:"Master Program in Matlab"
                        }
                    ]
                },
                {
                    navHead:"Industrial Automation",
                    courses:[
                        {
                            navName:"PLC(Master Program in Industrial Automation)"
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
                            navName:"AutoCAD Mechanical",
                            href:"/"
                        },
                        {
                            navName:"Catia",
                            href:"/"
                        },
                        {
                            navName:"Creo",
                            href:"/"
                        },
                        {
                            navName:"SolidWorks",
                            href:"/"
                        },
                        {
                            navName:"NX-CAD",
                            href:"/"
                        },
                        {
                            navName:"Ansys",
                            href:"/"
                        }
                    ]
                },
                {   
                    navHead:"Computer Hardware and Networking",
                    courses:[
                        {
                            navName:"CCNA",
                            href:"/ccna"
                        },
                        {
                            navName:"RedHat Linux",
                            href:"redhat-linux"
                        },
                        {
                            navName:"AWS",
                            href:"/aws"
                        }
                    ]
                },
                {
                    navHead:"Software Development",
                    courses:[
                        {
                            navName:"C",
                            href:"/c"
                        },
                        {
                            navName:"C++",
                            href:"/c++"
                        },
                        {
                            navName:"JAVA",
                            href:"/java"
                        },
                        {
                            navName:"Python",
                            href:"/python"
                        }
                    ]
                },
                {
                    navHead:"Full Stack Development",
                    courses:[
                        {
                            navName:"UI-UX Design",
                            href:"/ui-ux"
                        },
                        {
                            navName:"Graphics Designer",
                            href:"/"
                        },
                        {
                            navName:"PHP Full Stack Developer"
                        },
                        {
                            navName:"MEAN Full Stack Developer",
                            href:"/mean-stack"
                        },
                        {
                            navName:"MERN Full Stack Developer",
                            href:"/mern-stack"
                        },
                        {
                            navName:"Java Full Stack Developer",
                            href:"/java-stack"
                        },
                        {
                            navName:"Phyton Full Stack Developer",
                            href:"/"
                        },
                        {
                            navName:".Net Full Stack Developer",
                            href:"/"
                        }
                    ]
                },
                {
                    navHead:"Mobile App Development",
                    courses:[
                        {
                            navName:"Using Flutter",
                            href:"/"
                        },
                        {
                            navName:"Using React Native",
                            href:"/"
                        },
                    ]
                },
                {
                    navHead:"Software Testing",
                    courses:
                    [
                        {
                            navName:"SQL",
                            href:"/sql"
                        },
                        {
                            navName:"Manual Testing",
                            href:"/manual-testing"
                        },
                        {
                            navName:"Selenium Using Java",
                            href:"/automation-testing"
                        },
                        // {
                        //     navName:"Selenium Using Python"
                        // }
                    ]
                },
                {
                    navHead:"Special Program",
                    courses:[
                        {
                            navName:"Deep Learning",
                            href:"/deep-learning"
                        },
                        {
                            navName:"Machine Learning",
                            href:"/machine-learning"
                        },
                        {
                            navName:"Artificial Inteligence",
                            href:"/artificial-inteligence"
                        },
                        {
                            navName:"Data Science",
                            href:"/data-science"
                        },
                        {
                            navName:"Data Analytics",
                            href:"/data-analytics"
                        },
                        {
                            navName:"Sales Force",
                            href:"/sales-force"
                        }
                        // {
                        //     navName:"Virtual Reality"
                        // },
                        // {
                        //     navName:"Argumental Reality"
                        // },
                        // {
                        //     navName:"Robatic Process Automation"
                        // }
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
            navName:"Franchise Opportunity",
            href:"/franchise-opportunity"
        },
        {
            navName:"Login",
            className:"login",
            more:[
                {
                    navName:"Online Payment",
                    href:"/online-payment"
                },
                {
                    navName:"Employee Login"
                },
                {
                    navName:"Student Login",
                    href:"/student-login"
                }
            ]
        },
        {
            navName:"Contact Us",
            href:"/#contact"
        }

    ])

    const [ gettingNav , setGettingNav ] = useState([]);
    const [ trainNav , setTrainNav ] = useState([]);

    const [ menu , setMenu ] =useState(true);

    const menubar = () => {
        setMenu(!menu)
    }

    useEffect(()=>{

        AXX.get('admin/navGet')
        .then((res)=>{
            setGettingNav(res.data.data) })
        .catch( (err) => { })

        AXX.get('admin/getTraining')
        .then( (res) => {setTrainNav([{ ["navName"] : "Training" , ['more'] : res.data.data }]);
        }).catch( (err) => { })

       },[])


    return(<>

    <div className='inn-nav-main'>
        <nav className="inn-nav-body navbar navbar-expand-lg bg-light">

        <div className="container-fluid p-0">

            <div className="logo-div col-lg-3 col-md-6 col-sm-6 col-6">
                <a className="navbar-brand col-lg-12 col-md-10 col-sm-8 d-flex justify-content-center align-items-center p-0 m-0" href="/"><img src={logo} className='img-fluid'/></a>
            </div>

            {menu ?
                <i className="fa-solid fa-bars navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={menubar}></i>
                :
                <i className="fa-solid fa-x navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={()=>setMenu(true)}></i>
            }

            <div className="nav-div collapse navbar-collapse col-lg-9 col-md-9 my-lg-0 my-md-2 my-sm-2 px-lg-0 px-md-5 mx-sm-0 my-2 px-2" id="collapsibleNavbar">

                <ul className="navbar-nav col-lg-11 col-md-11 my-md-2 mx-lg-2 d-flex justify-content-between justify-content-md-between">

                    {gettingNav.slice(0,3).map( (g) => {
                        return(<>
                        {g.more.length == 0 ?
                        <li className="nav-item my-md-1">
                            {g.hrefLink != "" ?
                            <HashLink smooth to={g.hrefLink}> {g.navName} </HashLink>
                            :
                            <Link to={g.linkPage}>{g.navName}</Link>
                            }
                        </li>
                        :
                        <li className="nav-item dropdown  my-md-1">
                            <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{g.navName}</a>
                            <ul className='dropdown-menu service px-4 py-3 mx-4'>
                                {g.more.map( (subnav) => {
                                    return(<>
                                {subnav.hrefLink != "" ?
                                <li>
                                    <HashLink smooth className='dropdown-item  my-lg-2 my-md-2 ' to={subnav.hrefLink}> {subnav.navName} </HashLink>
                                    {/* <a className="dropdown-item  my-lg-2 my-md-2 " href={}>{subnav.navName} </a> */}
                                </li>
                                :
                                <li>
                                    <Link className="dropdown-item my-lg-2 my-md-2" to={subnav.linkPage}> {subnav.navName} </Link>
                                </li>
                                }
                                    </>)
                                })}
                        </ul>
                        </li>
                    }
                        </>)
                    })}

                    <li className="nav-item dropdown my-md-1">
                        {trainNav.map( (train) => {
                            return(<>
                                <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{train.navName}</a>
                                <ul className='dropdown-menu training px-4 py-2 mx-4'>
                                    {train.more.map( (traniSubnav) => {
                                        return(<>
                                            <li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
                                                <h3 className="dropdown-toggle" role="button" data-bs-toggle="dropdown"> {traniSubnav.navName} </h3>
                                            <ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
                                                {traniSubnav.more.map( (subnav2) => {
                                                    return(<>
                                                        <li>
                                                            <Link className="dropdown-item my-1"  to={subnav2.linkPage}> {subnav2.navName} </Link>
                                                        </li>
                                                    </>)
                                                })}
                                                </ul>
                                            </li>
                                        </>)
                                    })}
                                </ul>
                            </>)
                        })}
                    </li>

                    {gettingNav.slice(3,6).map( (g) => {
                        return(<>
                        {g.more.length == 0 ?
                        <li className="nav-item my-md-1">
                            {g.hrefLink != "" ?
                            // <a href={g.hrefLink}> {g.navName} </a>
                            <HashLink smooth to={g.hrefLink}> {g.navName} </HashLink>
                            :
                            <Link to={g.linkPage}>{g.navName}</Link>
                            }
                        </li>
                        :
                        <li className="nav-item dropdown  my-md-1">
                            <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{g.navName}</a>
                            <ul className='dropdown-menu service px-4 py-3 mx-4'>
                                {g.more.map( (subnav) => {
                                    return(<>
                                {subnav.hrefLink != "" ?
                                <li>
                                    <HashLink smooth className='dropdown-item  my-lg-2 my-md-2 ' to={subnav.hrefLink}> {subnav.navName} </HashLink>
                                    {/* <a className="dropdown-item  my-lg-2 my-md-2 " href={subnav.hrefLink}>{subnav.navName} </a> */}
                                </li>
                                :
                                <li>
                                    <Link className="dropdown-item my-lg-2 my-md-2" to={subnav.linkPage}> {subnav.navName} </Link>
                                </li>
                                }
                                    </>)
                                })}
                        </ul>
                        </li>
                    } 
                        </>)
                    })}

                </ul>

            </div>

        </div>

        {/* <div className="container-fluid p-0">

<div className="logo-div col-lg-3 col-md-6 col-sm-6 col-6">
    <a className="navbar-brand col-lg-12 col-md-10 col-sm-8 d-flex justify-content-center align-items-center p-0 m-0" href="/"><img src={logo} className='img-fluid'/></a>
</div>

{menu ?
    <i className="fa-solid fa-bars navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={menubar}></i>
    :
    <i className="fa-solid fa-x navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" onClick={()=>setMenu(true)}></i>
}

<div className="nav-div collapse navbar-collapse col-lg-9 col-md-9 my-lg-0 my-md-2 my-sm-5 px-lg-0 px-md-5 mx-sm-2 my-2 px-2" id="collapsibleNavbar">

<ul className="navbar-nav col-lg-11 col-md-11 my-md-2 mx-lg-2  d-flex justify-content-between justify-content-md-between">

    <li className="nav-item my-md-1">
        <Link to={"/"}>Home</Link>
    </li>

    <li className="nav-item  my-md-1">
        <a className="" href="/#welcome">Discover Us</a>
    </li>

    <li className="nav-item dropdown  my-md-1">
        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Service</a>
        <ul className='dropdown-menu service px-4 py-3 mx-4'>
            <li >
            <a className="dropdown-item  my-lg-2 my-md-2 " href='/#development'> Web Design & Development </a></li>
            <li><a className="dropdown-item my-lg-2 my-md-2" href='/'> Mobile App & Development <br/> (Android & iOS)</a></li>
            <li><Link className="dropdown-item my-lg-2 my-md-2" to={'/collages'}> Collage Training </Link></li>
        </ul>
    </li>

    <li className="nav-item dropdown my-md-1">

        <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Training</a>

            <ul className="dropdown-menu training px-lg-4 py-lg-2 ">

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
    <h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Electronics Automation Engineer</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/pcb"}>PCB Design</Link></li>
    <li><Link className="dropdown-item my-1" to={"/embedded"}>Embedded System</Link></li>
    <li><Link className="dropdown-item my-1" to={"/automotive-embedded-system"}>Automotive Embedded System</Link></li>
    <li><Link className="dropdown-item my-1" to={"/embedded-linux"}>Embedded Linux</Link></li>
    <li><Link className="dropdown-item my-1" to={"/iot"}>IoT</Link></li>
    <li><Link className="dropdown-item my-1" to={"/matlab"}>Master Program in Matlab</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
    <h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Industrial Automation</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/industrial-auto"}>PLC(Master Program in Industrial Automation)</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>IIoT(Industrial Internet of Things)</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
    <h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Electrical Power System Design and Simulation</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/acel"}>AutoCAD Electrical</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>EPLAN</Link></li>
    <li><Link className="dropdown-item my-1" to={"/etap"}>ETAP</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
    <h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Mechanical Design</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/"}>AutoCAD Mechanical</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>Catia</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>Creo</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>SolidWorks</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>NX-CAD</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>Ansys</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
    <h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Computer Hardware and Networking</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/ccna"}>CCNA</Link> </li>
    <li><Link className="dropdown-item my-1" to={"/redhat-linux"}> RedHat Linux</Link> </li>
    <li><Link className="dropdown-item my-1" to={"/aws"}>AWS</Link> </li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
<h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Software Development</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/c"}>C</Link></li>
    <li><Link className="dropdown-item my-1" to={"/C++"}>C++</Link></li>
    <li><Link className="dropdown-item my-1" to={"/java"}>JAVA</Link></li>
    <li><Link className="dropdown-item my-1" to={"/python"}>Python</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
<h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Full Stack Development</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/ui-ux"}>UI-UX Design</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>PHP Full Stack Developer</Link></li>
    <li><Link className="dropdown-item my-1" to={"/mean-stack"}>MEAN Full Stack Developer</Link></li>
    <li><Link className="dropdown-item my-1" to={"/mern-stack"}>MERN Full Stack Developer</Link></li>
    <li><Link className="dropdown-item my-1" to={"/java-stack"}>Java Full Stack Developer</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>Phyton Full Stack Developer</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>.Net Full Stack Developer</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
    <h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Mobile App Development</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/"}>Mobile App Development Using Flutter</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
    <h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Special Program</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/deep-learning"}>Deep Learning</Link></li>
    <li><Link className="dropdown-item my-1" to={"/machine-learning"}>Machine Learning</Link></li>
    <li><Link className="dropdown-item my-1" to={"/artificial-intelligence"}>Artificial Inteligence</Link></li>
    <li><Link className="dropdown-item my-1" to={"/data-science"}>Data Science</Link></li>
    <li><Link className="dropdown-item my-1" to={"/data-analyst"}>Data Analytics</Link></li>
    <li><Link className="dropdown-item my-1" to={"/sales-force"}>Sales Force</Link></li>
</ul>
</li>

<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
<h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Software Testing</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/sql"}>SQL</Link></li>
    <li><Link className="dropdown-item my-1" to={"/manual-testing"}>Manual Testing</Link></li>
    <li><Link className="dropdown-item my-1" to={"/automation-testing"}>Selenium Using Java</Link></li>
</ul>
</li>
<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
<h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Entrepreneural Training</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/digital-marketing"}>Digital Marketing</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>MS Office</Link></li>
    <li><Link className="dropdown-item my-1" to={"/solar"}>Solar Installation & Training</Link></li>
    <li><Link className="dropdown-item my-1" to={"/"}>CC TV Installation & Training</Link></li>
</ul>
</li>
<li className="nav-item dropdown my-md-3 mb-lg-2 text-start px-3 my-3">
<h3 className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Kids</h3>
<ul className="dropdown-menu train text-start px-lg-3 py-lg-2 col-lg-6 col-12 col-xl-12 col-md-10 col-sm-6">
    <li><Link className="dropdown-item my-1" to={"/kids"}>Kids Keep Learning</Link></li>
</ul>
</li>

            </ul>

    </li>

    <li className="nav-item  my-md-1">
        <Link to={"/franchise-opportunity"}>Franchise Opportunity</Link>
    </li>

    <li className="nav-item dropdown  my-md-1">
        <a className="dropdown-toggle" role="button" data-bs-toggle="dropdown">Login</a>
        <ul className="dropdown-menu login p-3 mx-lg-0 mx-md-0 mx-sm-0 mx-5">

            <li><Link className="dropdown-item my-1" to={"/online-payment"}> Online Pyment </Link></li>
            <li><Link className="dropdown-item my-1" to={"/"}> Employee Login </Link></li>
            <li><Link className="dropdown-item my-1" to={"/student-login"}> Student Login </Link></li>

        </ul>
    </li>

    <li className="nav-item  my-md-1">
        <a className="" href="/#contact">Contact Us</a>
    </li>

</ul>

</div>

        </div> */}

        </nav>
    </div>

    </>)
}
export default Navigation;
