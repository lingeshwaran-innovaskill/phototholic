import './nav.css';
import Logo from './images/logo.png';
import wards from './images/wards.png';

import { NavLink } from 'react-router-dom'
import { useState, useSyncExternalStore } from 'react';

function Navigation() {


    const [ nav , setnav ] = useState([
        {
            navName:"Home"
        },
        {
            navName:"About",
        },
        {
            navName:"Blog",
            icon:"fa-solid fa-angle-down",
            rotateName:"blog-nav",
            more:[
                {
                    navName:"Industrial Service"
                },
                {
                    navName:"Associate with us"
                }
                 ]
        },
        {
            navName:"More",
            icon:"fa-solid fa-angle-down",
            rotateName:"more",
            more:[
                {
                    navName:"Service",
                    more:[
                        {
                            navName:"Industrial Service"
                        },
                        {
                            navName:"Associate with us"
                        }
                         ]
                },
                {
                    navName:"Training",
                    more:[
                        {
                            navName:"Technology learning"
                        },
                        {
                            navName:"Kids keep learning"
                        },
                        {
                            navName:"Collage activities"
                        },
                        {
                            navName:"Registration form"
                        }
                    ]
                },
                {
                    navName:"Careers"
                },
                {
                    navName:"Event"
                },
                {
                    navName:"Certificate"
                },
                {
                    navName:"Contact"
                }
            ]

        }
    ])

    //navigation popup

    const [arrow , setArrow] = useState(false); 
    const [down,setdown] = useState();
    const [ more , setMore ] = useState([]);

    console.log(down)
    const moreData = (t) =>{
        console.log(t);
        if(t){
        setMore([...t])
        setArrow(!arrow)
        }
    }
    const dropdown = (t) =>{
        setdown(t)
    }


    //navigation bg

    const [scrollNav , setScrollNav] = useState(false);

    const changeNavbg = () => {

        if(window.scrollY >= 400){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }


    window.addEventListener("scroll" , changeNavbg);


return(<>
    <div className="navigation">

        <div className="nav-image">
            <img src={Logo}/>
        </div>

        <div className="nav-menu">

            <nav>
                {nav.map((e) => {
                    return(<>
                    <div className='nav-div'onMouseMove={()=>dropdown(e.navName)} >
                        <NavLink to={'/'} onMouseEnter={()=>moreData(e.more)} > {e.navName}
                        <i class={arrow && down == e.navName ? `${e.icon} ${e.rotateName}` : e.icon }> </i>
                        </NavLink>
                    </div>
                    </>)
                })}
            </nav>

            {arrow ?
            <div className={arrow ? "child-nav ani" : "child-nav"}>
                <div className='exit-icon'>
                <i class="fa-regular fa-x" onClick={()=>setArrow(!arrow)} title="Close"></i>
                </div>
                <div className='child-body-nav'>
                {more.map((i) => {
                    return(<>
                    <div className='nav-div'>
                        <NavLink to={'/'}> {i.navName} </NavLink>
                    </div>
                    </>)
                })}
                </div>
            </div>
    : ""  }

    <div className={scrollNav ? "scroll-nav":'scroll-nav-hide'}>
        <div className='scroll-body'>
            <a href='#trending'> Trending </a>
            <a href='#client'> Client </a>
            <a href=''> Demo </a>
        </div>
    </div>

        </div>

        <div className="wards">
            <img src={wards} />
        </div>
    </div>
</>);
}

export default Navigation;