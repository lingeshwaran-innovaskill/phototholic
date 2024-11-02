import Navbar from "../navbar/navbar";
import aboutCam from '../images/cam.jpg'
import banner from '../c1 (6).jpg';
import './feedback.css'
import Des from "../description/des";
import img from '../images/cam4.jpg';
import { useEffect, useState } from "react";
import axios from 'axios';
import TRANSFER from "../axx/axios";


function Feedback({name}){

    const icons = [
    {
        name:"Excellent",
        icon:"fa-solid fa-face-kiss-wink-heart fa-bounce",
        value:"lee"
    },{
        name:"Good",
        icon:"fa-solid fa-face-laugh fa-beat",
        value:"lingesh"
    },{
        name:"Better",
        icon:"fa-solid fa-face-smile fa-spin-pulse",
        value:"eshwara"
    },{
        name:"Bad",
        icon:"fa-solid fa-face-smile fa-fade",
        value:" Sometimes Feelings are Difficult to Explain"
    }]

    const [feedData,setFeedData]=useState([]);
    const [getFeed ,setGetFeed]=useState([]);

    const iconDetails = (value , name) =>{
        console.log(feedData);
        setFeedData([{...feedData , ['value'] : value , ['name'] : name }]);

        TRANSFER.post('feedbacks/postFeedback', feedData)
        .then(res => console.log(res))
        .catch(err => console.log(err))

    }

    useEffect(()=>{

        axios.get('http://127.0.0.1:5555/leePhotoholic/api/feedbacks/getFeedback',{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => {console.log(res.data) ; setGetFeed(res.data.feed)})
        .catch(err  => console.log(err))

    },[feedData])

    const delFeed = (id) =>{

        axios.delete(`http://127.0.0.1:5555/leePhotoholic/api/feedbacks/deleteFeedback?id=${id}`,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => setGetFeed((del) => del.filter( d => d._id != id)))
          .catch(err => console.log(err))

         console.log(id);

    }

    console.log(feedData);

// pagination

const [feedPage , setFeedPage] = useState(1);
const [showFeed , setShowFeed] = useState(2);

const lastFeedData  = feedPage * showFeed;
const firstFeedData = lastFeedData - showFeed;
const storeFeedData = getFeed.slice(firstFeedData , lastFeedData);

// paginationNumber

let total = getFeed.length;

let numbers = []

for(let i = 1 ; i <= Math.ceil(total / showFeed) ; i++){
numbers.push(i)
}

    return ( <>

    <Navbar/>

<div className="feed-div"> 

    <div className='feed-banner-img'>

    <img src={banner} alt="err"/>

    <h1 className="feed-quotes" > If We Shield Ourselves from all Feedback , We Stop Growing</h1>
    <h1 className="feed-quotes"  > Good Feedback is the key to Imporvement </h1>

    </div>

    {/* <h1 id="feed-title"> React Your <span>Experiance</span> With Us</h1> */}

    <div className="feed-head">

    <h1 id="feed-title" data-aos="fade-right"> React Your <span>Experiance</span> With Us</h1>

    </div>

    <div className="feedbody">

    <img src={img} />

    <div className="user-react">

    {icons.map((i)=>{
        return(<>
            <i class={i.icon} onClick={()=>iconDetails(i.value,i.name)} title={i.name}></i>
        </>)
    })}

    </div>

    <div className="feedbacks">

    {storeFeedData.map((i)=>{
        return(<>
        <div className="user" data-aos="fade-right">
        <h4>Thanks for your Feedback - <small style={{opacity:".5"}}> lingeshwaran3496@gmail.com{name.email} </small>
        <i className="fa-solid fa-trash-can" onClick={()=>delFeed(i._id)}></i>
        </h4>
        <h1>{name.firstname}</h1>
        <p>{i.value}</p>
        </div>
        </>)
    })}

    {/* pagination numbers */}


    </div>

    <div className="pagination">
<ul>
    {numbers.map((n)=>{
        return(<>
        <li onClick={()=>setFeedPage(n)}>    {n}    </li>
        </>)
    })}

</ul>

    </div>

   
    </div>

</div>

    <Des/>
    </> );
}
export default Feedback;