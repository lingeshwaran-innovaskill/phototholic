
import { useEffect, useState } from 'react';
import './demo.css';

import img from './insta.jpg'

function Demo() {

    const [width,setWidth] = useState()
   
    const handleWidth = () =>{
        setWidth(window.pageYOffset);
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleWidth)
    },[width]);

    return ( <>
    <div className="demo">

        <div className='img-div' style={{transform:`translateY(-${width * .02}px)`}} >
        <img src={img} data-aos="fade-down-right"/>
        </div>

        <div className='map' style={{transform:`translateY(-${width * .02}px)`}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.542533674352!2d72.8470867871516!3d19.046775197501013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d72abf2d35%3A0x5ba0b162df2aa82e!2sDharavi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700134588787!5m2!1sen!2sin" data-aos="fade-down-left" ></iframe>
        </div>

   </div>

    </> );
}
export default Demo;