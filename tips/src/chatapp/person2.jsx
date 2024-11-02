import axios from "axios";
import { useState } from "react";
import React from "react";



function Person2(){

    const [ chat , setChat ] = useState({
        person2:""
    })

    const formChatSubmit = (e) =>{
        e.preventDefault();
    }

    const valueStore = (e) =>{
        setChat({...chat , [e.target.name]:e.target.value})
    }  

    const sendData = () =>{
        if(chat.person2.length > 2 ){

        axios.post("http://127.0.0.1:5555/chat" , chat , {
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res=>console.log(res))
        .catch(err=>console.log(err))
        }
    }
    return (<>
    <div>
        <h1> LEO </h1>
        <form onSubmit={formChatSubmit}>
            <input type="text" name="person2" onChange={valueStore} value={chat.person2}/>
            <button onClick={sendData}>Send</button>
        </form>
    </div>
    </>);
}

export default Person2;