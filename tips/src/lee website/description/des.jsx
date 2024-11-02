import './des.css';
import { Link } from 'react-router-dom';

import img from '../home/qr.png';
import { useEffect } from 'react';


function Des() {

    return (  <>


    <div id="main-div">

        <div className='title'>
            <h1>Lee's<span> Photoholic </span></h1>
        </div>

        <div className='body'>

        <div className='details'>

        <div className='icons'>
        <h2>Social Media</h2>

        <div className='icon'>
     :  <Link to={'https:/www.instagram.com/lee_____photography'} target='blank'>
        <i class="fa-brands fa-instagram"  ></i>
        </Link>

        <Link to={'https://wa.me/9082413467'} target='blank'>
            <i class="fa-brands fa-whatsapp"></i>
        </Link>

        <Link to={'https://twitter.com/actorvijay?lang=en'} target='blank'>
            <i class="fa-brands fa-x-twitter" ></i>
        </Link>

        <Link to={'https://email/lingeshwaran3496@gmail.com'} target='blank'>
        <i class="fa-regular fa-envelope"></i>
        </Link>
        
        </div>

        </div>

        <div className='icons bio'>
            <h2 >Photographer</h2> :  
            <h3 >Lingesh</h3>
        </div>

        </div>

        <div className='png-img'>
            <h3 >Visit Our Insta page !</h3> 
            <img src={img} />
        </div>
        </div>

    <div className='copyrights'>

        <h4>Copyright &copy; 2023 | Designed and
        Maintenance by <Link to={"https://www.instagram.com/lingesh_the____lee/"}> Lingesh </Link> | All
        Rights Reserved</h4>

    </div>

    </div>
    </>);
}

export default Des;