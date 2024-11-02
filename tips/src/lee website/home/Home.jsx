import { createContext, useContext , useEffect , useState } from "react";
import {Parallax} from 'react-parallax';
import "./home.css";

import Navbar from "../navbar/navbar";
import Marriage from './Marriage';
import Candid from "./candid";
import Des from "../description/des";
import Demo from "./demo";
import { useAuth } from "../auth";
import BookingForm from "../orderForm/basicForm";
import cam from "../images/cam1.jpg";
import cam1 from "../images/camera.jpg";
import png from './lee1.png';


function Home({data}){

    const Auth  = useAuth();

    const [ width , setWidth ] = useState(0)

    const handleWidth = () =>{
        setWidth(window.pageYOffset);
    } 

    useEffect(()=>{
    window.addEventListener("scroll" , handleWidth);
    },[width]);

    return(<>

    <div className="Home-main">
    <div className="Home">

    <Parallax strength={-120} bgImage={cam} blur={{min:-8 , max:8}}>

    <div className="homePic">
    <Navbar/>
    <div className="Home-div">
    <h1 style={{transform:`translateY(-${ width * .3 }px)`}}>{ (Auth.user != null) ? <span> Welcome {data.username} </span>:  'Hello Buddy' }</h1>
    </div>
    </div>

    </Parallax>

    </div>
    </div>


    <Marriage/>

    <Parallax bgImage={cam1} strength={-100} blur={{min:15 , max:-15}} >
        <div id="parallax-mrg">
        <h2>Welcome To</h2>
        <div className="img">
        <img src={png} data-aos="zoom-in" data-aos-duration="1000"/>
        </div>
        </div>
    </Parallax>

    <Candid/>
    <Demo />
    <BookingForm/>
    <Des/>

    </>)
}
export default Home;