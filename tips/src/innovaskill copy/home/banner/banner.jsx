import { useState } from 'react';
import './banner.css';

import banner from "./images/BANNER1A.png";
import banner1 from './images/banner111.svg';
import { Link } from 'react-router-dom';


// for Animation 

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


function Banner() {


    const [btn , setBtn] = useState(false);

    const mousehov = () =>{
        setBtn(!btn)
    }
 
    const mouseLeft = () =>{
        setBtn(!btn)
    }

    return (<>
    <div className="banner-home">

        <img src={banner1}/>

        <div className='btns'>
            <button className={!btn ? "btn-1" : "btn-1-hov"} > Job Oriented Training </button>
            <button className={!btn ? "btn-2" : "btn-2-hov"} onMouseOver={mousehov} onMouseLeave={mouseLeft}> Kids Keep Learning </button>
        </div>

        <div className='btns-1'>
        <Link to={'/form'}> <button className='btn-enquiry'>  Enquiry Now  </button> </Link>
        </div>

        <div className='btns-icon'>
            <a href='https://wa.me/6380206760' target='blank'>
                <i class="fa-brands fa-whatsapp"></i>
            </a>
        </div>

        <div className='partiles-div'>
            {/* <BannerParticles id="banner-particles"/> */}
        </div>

    </div>
    </>);
}

export default Banner;

const BannerParticles = (props) => {

  // const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {

      await loadSlim(engine);

    }).then(() => {
      // setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({

      // background: {
      //   color: {
      //     value: "#000",
      //   },
      // },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
          resize:true
        },
        modes: {
          grab: {
            distance: 100,
          },
          push: {
            quantity: 4,
            distance:100,
            duration:1
        },
        repulse: {
            distance: 200,
            duration: 0.4,
        },
      },
      },
      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#fff",
          distance: 100,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 400,
        },
        opacity: {
          value: 0.5,
        },
        shape:{
          type: "circle",
        },
        size: {
          value: { min: 1 , max: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

return <Particles id={props.id} init={particlesLoaded} options={options} />

};

