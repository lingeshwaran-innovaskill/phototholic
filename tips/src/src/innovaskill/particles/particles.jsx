import "./particles.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.


const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);

  // useEffect(() => {
  //   initParticlesEngine(async (engine) => {

  //     await loadSlim(engine);

  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, []);

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
      fpsLimit: 120,
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
      // detectRetina: true,
    }),
    [],
  );

return <Particles id={props.id} init={particlesLoaded} options={options} />

};

export default ParticlesComponent;