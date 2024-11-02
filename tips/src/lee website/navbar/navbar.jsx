import { NavLink, useNavigate } from 'react-router-dom';
import './nav.css';
import { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import logo  from './logo3.png';
// import { Background } from 'react-parallax';


function Navbar() {

    const [ nav , setNav ] = useState(false);

    const auth = useAuth();
    const navigate = useNavigate();

    const [ width , setWidth ] = useState(0);

    const handleWidth = () => {
        setWidth(window.pageYOffset);
    }

    useEffect(()=>{
    window.addEventListener('scroll',handleWidth);
    // return window.removeEventListener('scroll',handleWidth);
    },[width]);

    // const [log,SetLog]=useState();

    const logOut = () => {
        // auth.logout();
        navigate('/home');
        localStorage.removeItem('agent_viewer');
    }


    return (<>

    <div id='main' >

        <i class="fa-solid fa-bars p-2" id='menu-icon-navbar' onClick={()=>{setNav(!nav)}} ></i>

        <div className= { nav ? "main-nav active" : "main-nav" }  >

            <div className='logo'>

                <img src={logo} />

                <i class="fa-solid fa-x p-1" onClick={()=>{setNav(!nav)}} ></i>
            </div>

            <ul className='list p-0'>
                <li> <NavLink to={'/profile'}>    My profile  </NavLink></li>
                <li> <NavLink to={'/home'}>       Home     </NavLink></li>
                <li> <NavLink to={'/gallery'}>    Gallery  </NavLink></li>
                <li> <NavLink to={'/feedback'}>   Feedback </NavLink></li>
                <li> <NavLink to={'/orders'}>     Orders   </NavLink></li>
                <li>{(!localStorage.getItem('agent_viewer')) ? <NavLink to={'/login'}> Log-in </NavLink> : <NavLink onClick={logOut} id="log-out"> Log-Out </NavLink>}</li>
            </ul>

        </div>

    </div>

    </>);
}
export default Navbar;