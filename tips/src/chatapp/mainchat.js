import { useEffect, useState } from "react";
import axios from "axios";
import './chat.css';
import Person1 from "./person1";
import Person2 from "./person2";

function MainChat(){

    const [ chat , setChat ] = useState([]);

    console.log(chat);

useEffect(()=>{
      axios.get('http://127.0.0.1:5555/chat' , {
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>{setChat(res.data.chatData)})
        .catch((err)=>{console.log(err)})
    },[])

    const deleteChat = (id) => {
        axios.delete(`http://127.0.0.1:5555/chat?_id=${id}`,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=> {setChat((e) => e.filter(del => del._id != id ));
                        console.log(res)} )
        .catch((err)=>console.log(err))
    }


    return (<>
    <div className="chat-main">

    <div className="person1">
    <Person1 />
    </div>

    <div className="person2">
    <Person2 />
    </div>

    </div>
{/* <button onClick={Showchat}>Show</button> */}
<div className="chattings">

    
    <div className="chat-body">
    {chat.map((c) => {
        return(<>
        {c.person1 ? <div className="chat-1"> <h2 > LEE - {c.person1} </h2> <button onClick={()=>deleteChat(c._id)}>delete c1</button> </div>:
                     <div className="chat-2"> <h2 > LEO - {c.person2} </h2> <button onClick={()=>deleteChat(c._id)}> delete c2 </button> </div> }
        </>)
    })}
    </div>
    
</div>
    </>);
}

export default MainChat;