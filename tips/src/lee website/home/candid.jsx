import img1 from './candid/lav1.JPG';
import img2 from './candid/lav2.JPG';
import img3 from './candid/lav3.JPG';
import img4 from './candid/smeha.JPG';
import img5 from './candid/lavs5.JPG';
import img6 from './candid/lavs6.JPG';
import img7 from './candid/lavss.JPG';
// import formbg from '../f1 (1).jpg';
import formbg from './candid/boy.jpg';





import './candid.css';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserD } from './Home';

let  decre = '<';
let  incre = ">";

const img=[img2,img1,img3,img4,img5,img6,img6,img7];

function Candid() {

    const Title = {
        eventname : "Candid Photography",
        des       : "The Littlest things in life is where we find real , true joy",
        color     : "teal",
        category  :"Candid Shoot",
        inpcolor  : 'white', 
        img       : formbg,
        songs     : [ "https://www.youtube.com/watch?v=SA7AIQw-7Ms" ,
                      "https://www.youtube.com/watch?v=kJQP7kiw5Fk" ,
                      "https://www.youtube.com/watch?v=gOsM-DYAEhY" ,
                      "https://www.youtube.com/watch?v=syFZfO_wfMQ" ,
                      "https://www.youtube.com/watch?v=PT2_F-1esPk" ,
                      "https://www.youtube.com/watch?v=60ItHLz5WEA" ,
                      "https://www.youtube.com/watch?v=gCYcHz2k5x0" ,
                      "https://www.youtube.com/watch?v=ZdMZ40GSVmc" ,
                      "https://www.youtube.com/watch?v=3wDiqlTNlfQ" ,
                      "https://www.youtube.com/watch?v=0-7IHOXkiV8"
                    ],
        songsTitle:"Enjoy the song buddy!!!"
    }

    const [width,setWidth]=useState(0);

    const handleWidth = () =>{
        setWidth(window.pageYOffset)
    }

    useEffect(()=>{
        window.addEventListener('scroll' , handleWidth)
    },[width]);

    const [imgCount,setImgCount]=useState(1);


    const imgIncrement=()=>{
        setImgCount((imgCount==img.length-1)?0:imgCount+1);
    }

    const imgDecrement=()=>{
        setImgCount((imgCount==0)?img.length-1:imgCount-1);
    }

    return ( <>
   
    <div className="candid-div" style={{transform:`translateY(-${width * .06}px)`}}>

    <h1 data-aos="fade-down">Candid <span> Photography </span> </h1>

        <div className='candid-title' >
            <h2 >About Candid Photography</h2>
            <h3>A candid photograph is a photograph captured without creating a posed appearance. The candid nature of a photograph is unrelated to the subject's knowledge about or consent to the fact that photographs are being taken, and are unrelated to the subject's permission for further usage and distribution</h3>
        </div>

        <div className='candid-body'>   
        <div className='candid-img'>

        <button onClick={imgDecrement} id='btn1' >{decre} </button>

        {/* <div className='image'> */}

        <img src={img[imgCount == 0 ? img.length-1 : imgCount-1 ]} id='imgg1'/>
        <img src={img[imgCount]}   className='img2'/>
        <img src={img[imgCount == img.length-1 ? 0 :imgCount+1 ]} id='imgg2' /> 

        {/* </div> */}

        <button onClick={imgIncrement} id='btn2'> {incre} </button>

        </div>

        </div>

        <Link to={'/form'} state={{Title}}>
            <button id='btn'>Book here</button>
        </Link>

    </div>

    </> );
}

export default Candid;