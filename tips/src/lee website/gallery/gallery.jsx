import Navbar from "../navbar/navbar";
import './gallery.css'

import Plx from 'react-plx';

// import headimg from "../home/camera3.jpg"
import headimg from "../home/camera1.jpg"


import cam1 from '../images/lee.JPG'
import cam2 from '../images/cam5.jpg'
import cam3 from '../images/cam6.jpg'
import cam4 from '../images/cam7.jpg'
import cam5 from '../images/cam8.jpg'
import cam6 from '../images/cam9.jpg'
import cam7 from '../images/cam10.jpg'
import cam8 from '../images/cam11.jpg'
import cam9 from '../images/cam12.jpg'
import cam10 from '../images/cam13.jpg'
import cam11 from '../images/cam14.jpg'
import cam12 from '../images/cam15.jpg'
import cam13 from '../images/cam16.jpg'
import cam14 from '../images/cam17.jpg'
import cam15 from '../images/cam18.jpg'
import cam16 from '../images/cam19.jpg'
import cam17 from '../images/cam20.jpg'
import cam18 from '../images/cam21.jpg'
import cam19 from '../images/cam22.jpg'
import cam20 from '../images/cam23.jpg'
import cam21 from '../images/cam24.jpg'
import cam22 from '../images/cam25.jpg'
import cam23 from '../images/cam26.jpg'
import cam24 from '../images/cam27.jpg'
import cam25 from '../images/cam28.jpg'
import cam26 from '../images/cam29.jpg'
import cam27 from '../images/cam30.jpg'




import { useState } from "react";
import Des from "../description/des";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



function Gallery() {

  const Auth = useAuth();
  const navigation = useNavigate();

  if(!Auth.user){

}


    const gal=([{img:cam27},{img:cam23},{img:cam20},{img:cam2},{img:cam3},{img:cam4},{img:cam5},{img:cam6},{img:cam7}])
    const gal1=([{img:cam24},{img:cam21},{img:cam8},{img:cam9},{img:cam10},{img:cam11},{img:cam12},{img:cam13},{img:cam14}])
    const gal2=([{img:cam26},{img:cam25},{img:cam22},{img:cam15},{img:cam16},{img:cam17},{img:cam18},{img:cam19}])

    const totalGal = ([...gal,...gal1,...gal2]);

    console.log(totalGal);

    return (
        <>
        <Navbar />
        <div className="main-gal">

        <div id="banner-img">

        <img src={headimg} />

        <h2 onClick={()=>localStorage.removeItem('auth')} className="gal-quotes" data-aos="fade-right"> Create the things you wish existed </h2>
        </div>

        <h1 data-aos="fade-right" >Our <span>Clickz</span></h1>

        <div className="gallery">

            <div className="gal-img">
            {gal.map(i=>{
                return( <>
                <div className="gal">
                <img src={i.img}  className="g" data-aos="fade-right"/>
                </div>
                </> )
            })}
            </div>

            <div className="gal-img">
                {gal1.map((i)=>{
                    return(
                    <div className="gal" >
                    <img src={i.img} className="g" data-aos="fade-down"/>
                    </div>
                    )
            })  }
            </div>

            <div className="gal-img">
                {gal2.map((i)=>{
                    return(
                    <div className="gal">
                    <img src={i.img} className="g" data-aos="fade-left"/>
                    </div>
                    )
            })  }
            </div>
    
        </div>
            <h1 data-aos="fade-down" >The <span>End</span></h1>
        </div>

        <Des/>

        </>
    );
}

export default Gallery;