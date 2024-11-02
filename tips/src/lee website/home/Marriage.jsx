import { useEffect, useRef, useState } from "react";
import "./Marriage.css";
import { Link  } from "react-router-dom";

import m1 from "./marriageimg/m1.jpg";
import m2 from "./marriageimg/m2.jpg";
import m3 from "./marriageimg/m3.avif";
import m4 from "./marriageimg/m4.avif";
import m5 from "./marriageimg/m5.webp";
import m6 from "./marriageimg/m6.webp";
import m7 from "./marriageimg/m7.webp";
import formbg from '../formbg.jpg';


function Homedes(){

    // const MF=useNavigate();

    const Title = {
        eventname:"Wedding Function",
        des:"Your Happily ever Starts from Here",
        color:"rgb(231, 62, 231)",
        img:formbg,
        category:"Wedding Shoot",
        songs:[
        'https://www.youtube.com/watch?v=NpRR1BrYliI',
        'https://youtube.com/watch?v=CAsibTzCFzI',
        "https://www.youtube.com/watch?v=LoPf32nKYb8",
        "https://www.youtube.com/watch?v=UWaotTkNCPk",
        "https://www.youtube.com/watch?v=eG5Zx7qq2C4",
        "https://www.youtube.com/watch?v=hfsFOP3TYVQ",
        "https://www.youtube.com/watch?v=l_At-vg94yE",
        "https://www.youtube.com/watch?v=YlMAhUrXFiM",
        "https://www.youtube.com/watch?v=Y3-PeuQ7nvY",
        "https://www.youtube.com/watch?v=gB1gPmtDohY",
        "https://www.youtube.com/watch?v=iHagLitT-nI",
        "https://www.youtube.com/watch?v=qoZncUT-B9Y",
        "https://www.youtube.com/watch?v=zLcrEO-eIOQ",
        "https://www.youtube.com/watch?v=2NrpwkyoTrI",
        "https://www.youtube.com/watch?v=UgjtxhV08Ao",
        "https://www.youtube.com/watch?v=BQE2hrC_gFo",
        "https://www.youtube.com/watch?v=EvMS73TWIQA"
        ],
    songsTitle:"Scan the Qr and Enjoy the song with Your Loved one's"
    }

    const [ offset , setOffset ] = useState(0);

    const handleWindow = () => {
    setOffset(window.pageYOffset);
    }

    useEffect(()=>{
    window.addEventListener('scroll',handleWindow);
    // return () => window.removeEventListener('scroll',handleWindow);
    },[offset]);

    const [img,setImg]=useState([m3,m2,m1,m4,m5,m6,m7]);

    const [imgCount,setImgCount]=useState(0);

    const imgIncrement=()=>{
        setImgCount((imgCount==img.length-1)?0:imgCount+1);
    }

    const imgDecrement=()=>{
        setImgCount((imgCount==0)?img.length-1:imgCount-1);
    }

    const imgSlide =(index)=>{
        setImgCount(index);
        // color.current.style.color='black';
    }

    // setInterval(()=>{
    //     imgIncrement()  
    // },5000)

return(

<div className="main-des" style={{ transform:`translateY(-${offset * .15 }px)` }}>

    <h1 id="title" >Wedding <span>Photography</span></h1>

    <div id="body">
    <div className="M-body">

        <div className="description" data-aos="flip-up" >
        <h2>About Wedding Photography</h2>
        <h3>Wedding photography is a specialty in photography that is primarily focused on the photography of events and activities relating to weddings. It may include other types of portrait photography of the couple before the official wedding day, such as a pre-wedding engagement session. Wedding photography is a specialty in photography that is primarily focused on the photography of events and activities relating to weddings. It may include other types of portrait photography of the couple before the official wedding day, such as a pre-wedding engagement session.</h3>
        </div>

        <div className="des-img" data-aos="flip-up">
        <img src={img[imgCount]} onClick={imgIncrement} alt="error" />
        <img src={img[imgCount]} onClick={imgDecrement} alt="error" />
        </div>

        {/* <button onClick={imgDecrement}>{imgCount}</button>
        <button onClick={imgIncrement}>{imgCount}</button> */}
        </div>

        <div className="imgSlide" >

        {img.map((img,index)=>{
            return( <b key={index} onClick={()=>imgSlide(index)} >.</b>)
        })}

        </div>

        <Link to={'/form'} state={{Title}}>
        <button id="btn"> Book Here </button>
        </Link>

        </div>

        </div>
)}

export default Homedes;
