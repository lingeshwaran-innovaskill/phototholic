import { useState, useEffect } from "react";
import "./Insta.Explore.css";
import "./popup/Explore.Popup.css";
import ExploreNav from "./routing/Insta.Nav";
import ExplorePopup from "./popup/Explore.popup";

import video1 from "./Media/Videos/1.mp4";
import video2 from "./Media/Videos/2.mp4";
import video3 from "./Media/Videos/3.mp4";
import video4 from "./Media/Videos/4.mp4";
import video5 from "./Media/Videos/5.mp4";
import video6 from "./Media/Videos/6.mp4";
import video7 from "./Media/Videos/7.mp4";
import video8 from "./Media/Videos/8.mp4";
import video9 from "./Media/Videos/9.mp4";
import video10 from "./Media/Videos/10.mp4";
import video11 from "./Media/Videos/11.mp4";
import video12 from "./Media/Videos/12.mp4";

import img1 from './Media/images/1.JPG';
import img2 from './Media/images/2.JPG';
import img3 from './Media/images/3.JPG';
import img4 from './Media/images/4.JPG';

import pro1 from "./Media/images/profile/p1.jpg";
import pro2 from "./Media/images/profile/p8.jpg";
import pro3 from "./Media/images/profile/p3.jpg";
import pro4 from "./Media/images/profile/p4.jpg";
import pro5 from "./Media/images/profile/p5.jpg";
import pro6 from "./Media/images/profile/p6.jpg";
import pro7 from "./Media/images/profile/p7.jpg";
import pro9 from "./Media/images/profile/p9.jpg";
import pro10 from "./Media/images/profile/p10.jpg";

import vj1 from "./Media/images/profile/vj1.jpg";
import vj2 from "./Media/images/profile/vj2.jpg";
import Insta from "./routing/Main";


function Explore() {

    const [medias , setMedias] = useState([
        {
        id : 0,
        profile:pro1,
        videos:video1,
        profileName:"mom's_little_soilders",
        quotes:"And in this World She is my world",
        hash:"#amma ",
        likes:"1m",
        comments:"100k",
        date:"may 12",
        commentName:"Eshwara",
        comment:"(amma) is the most beautiful feeling in the world"
        },
        {
        id : 1,
        profile:pro2,
        videos:video2,
        profileName:"moto_tube",
        quotes:"four wheels moves the body two wheels moves the soul",
        hash:"#bikecraze  #trending  #bikes ",
        likes:"1k",
        comments:"200",
        date:"february 2",
        commentName:"ananth",
        comment:"bike lub"
        },
        {
        id : 2,
        profile:vj1,
        videos:video3,
        profileName:"endrum_thalapathy_vazhiyil",
        quotes:"En Nenjil Kudirukum.....",
        hash:"#vijay #thalapathy #words",
        likes:"10.5k",
        comments:"1k",
        date:"march 3"
        },
        {
        id : 3,
        profile:pro4,
        videos:video4,
        profileName:"music_world",
        quotes:"Melophile",
        hash:"#music ",
        likes:"14k",
        comments:"140",
        date:"april 4",
        commentName:"vetri",
        comment:"music speaks when words can't"
        },
        {
        id : 4,
        profile:pro5,
        img: [img1],
        profileName:"endrum_thalapathy_vazhiyil",
        quotes:"andrum,inndrum,enndrum thalapathy valiyil",
        hash:"",
        likes:"6k",
        comments:"600",
        date:"may 5",
        
        },
        {
        id : 5,
        profile:pro6,
        videos:video6,
        profileName:"quotes_mania",
        quotes:"Love What you Have.....",
        hash:"#love #reels",
        likes:"01k",
        comments:"100",
        date:"june 14"
        },
        {
        id : 6,
        profile:vj2,
        videos:video7,
        profileName:"vj_words",
        quotes:"Kill them with your success and bury them with your smile",
        hash:"#vj #speech #master #thalapathy",
        likes:"5k",
        comments:"100",
        date:"june 26",
        commentName:"JD",
        comment:"Stress buster"
        },
        {
        id : 7,
        profile:pro7,
        videos:video8,
        profileName:"vj_words",
        quotes:"if you can count your money, work harder",
        hash:"#money #love ",
        likes:"5k",
        comments:"100",
        date:"july 7"
        },
        {
        id : 8,
        profile:pro9,
        img: [img2],
        profileName:"alone_beatz",
        quotes:"be alone it's peacefull",
        hash:"#vj #speech #master #thalapathy",
        likes:"5k",
        comments:"100",
        date:"august 8"
        },
        {
        id : 9,
        profile:pro4,
        videos:video10,
        profileName:"music_world",
        quotes:"una pakkuren ulla unnaruren naan kadhalaaa!!!",
        hash:"#vj #speech #master #thalapathy",
        likes:"5k",
        comments:"100",
        date:"september 9"
        },
        {
        id : 10,
        profile:pro7,
        videos:video11,
        profileName:"MCU",
        quotes:"Of all the things i've lost",
        hash:"#broke",
        likes:"100k",
        comments:"10k",
        date:"october 10",
        commentName:"Eshwara",
        comment:"and my story goes on, without You"
        },
        {
        id : 11,
        profile:pro6,
        videos:video12,
        profileName:"MCU",
        quotes:"Marvel hate the word LOVE",
        hash:"#love ",
        likes:"100k",
        comments:"10k",
        date:"october 10",
        commentName:"lee",
        comment:"Habibi come to Loki Universe"
        },
        {
        id:12,
        profile:pro5,
        videos:video5,
        profileName:"paths_of_meaning",
        quotes:"It's all about finding the calm in the chaos",
        hash:"#life #quotes",
        likes:"6k",
        comments:"600",
        date:"may 5"
        },
        {
        id : 13,
        profile:pro5,
        img: [img3],
        profileName:"quotes_mania",
        quotes:"nothing is more attractive more than loyalty",
        hash:"#love #loyal",
        likes:"5k",
        comments:"100",
        date:"august 8"
        },
         {
        id : 14,
        profile:pro4,
        img: [img4,img1,img2,img3],
        profileName:"quotes_mania",
        quotes:"Love yourself",
        hash:"#love #yourself",
        likes:"5k",
        comments:"100",
        date:"august 8"
        }
    ])


const [ show , setShow] = useState(false);
const [meidaIndex , setMediaIndex] = useState();

const Media = (data) => {
    setShow(true);
    setMediaIndex(medias.findIndex((e =>e.id === data.id)));
}
    return (<>

    <ExploreNav/>

{show && 
    <ExplorePopup media={medias} index={meidaIndex} hide={setShow}/>
}


<div className="Explore-main-div">

    <div className="Explore-body-right">

        <div className="Explore-media">

            {medias.slice(0 , 5).map((m)=>{
                return(<>
                    <div className="Media-content" id={`mediaid-${m.id}`}> 
                        <div className="video-div">
                            {m.videos ?
                            <video src={m.videos} onClick={()=>Media(m)}/>
                            :
                            <img src={m.img[0]} onClick={()=>Media(m)}/> 
                            }
                        </div>
                        <div className="likes-comments">
                            <div>
                                <i class="fa-solid fa-heart"> <span> {m.likes} </span> </i>
                                <i class="fa-solid fa-comment"> <span> {m.comments} </span> </i>
                            </div>
                        </div>
                    </div>
                </>)
            })}

        </div>

        <div className="Explore-media">

            {medias.slice(5 , 10).map((m)=>{
                return(<>
                        <div className="Media-content" id={`mediaid-${m.id}`} >
                            <div className="video-div">
                            {m.videos ? 
                            <video src={m.videos} onClick={()=>Media(m)}/> 
                            : 
                            <img src={m.img} onClick={()=>Media(m)} alt="error"/>
                            }
                            </div>
                            <div className="likes-comments">
                                <div>
                                    <i class="fa-solid fa-heart"> <span> {m.likes} </span> </i>
                                    <i class="fa-solid fa-comment"> <span> {m.comments} </span> </i>
                                </div>
                            </div>
                        </div>
                </>)
            })}

        </div>

        <div className="Explore-media">

                {medias.slice(10,15).map((m)=>{
                    return(<>
                            <div className="Media-content" id={`mediaid-${m.id}`} >
                                <div className="video-div">
                                {m.videos ? 
                                <video src={m.videos}  onClick={()=>Media(m)}/> 
                                : 
                                <img src={m.img[0]} onClick={()=>Media(m)} alt="error"/>
                                }
                                </div>
                                <div className="likes-comments">
                                    <div>
                                        <i class="fa-solid fa-heart"> <span> {m.likes} </span> </i>
                                        <i class="fa-solid fa-comment"> <span> {m.comments} </span> </i>
                                    </div>
                                </div>
                            </div>
                    </>)
                })}

        </div>

    </div>
   

</div>
</>);
}

export default Explore;
