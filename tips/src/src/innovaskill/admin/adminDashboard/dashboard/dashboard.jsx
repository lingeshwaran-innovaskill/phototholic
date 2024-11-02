import React, { useContext, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link , useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './dashboard.css';
import { IconContext } from 'react-icons';
import logo from './images/logo.png';
import { ToastContainer } from 'react-toastify';


function Dashboard(){

  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const redirected = () => {
    localStorage.removeItem('auth')
    navigate('/admin')
  }

  return (<>
  <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />

<div className='admim-dashboard container-fluid p-0 '>

      <div className='admin-nav navbar d-flex position-fixed'>

        <div className='row p-0 m-0 d-flex justify-content-evenly align-items-center'>

          <div className='menu-bars col-3 p-0 d-flex justify-content-between align-items-center'>
            <i className="fa-solid fa-bars px-3"   onClick={showSidebar}></i>
            <img src={logo} className='img-fluid'/>
          </div>

          <div className='menu-bars log-out col-8 p-0 d-flex justify-content-end align-items-end' >
            {/* <img src={logo} className='img-fluid'/> */}
            <button className='col-2  py-1' onClick={redirected}> Log-Out </button>
            {/* <Link>
            Log-out
            </Link> */}
          </div>

      </div>

    </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

          <ul className='nav-menu-items p-0' >
            <li className='navbar-toggle'>

              <div className='menu-bars'>
                <i className="fa-solid fa-x px-3" onClick={showSidebar}></i>
              </div>

            </li>
            {SidebarData.map((item, index) => {
              return (<>
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
                </>);
            })}
          </ul>
        </nav>
</div>

    </>
  );
}

export default Dashboard;
