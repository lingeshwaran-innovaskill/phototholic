import { useEffect, useState } from "react";
import axios from 'axios';

function Person1({chattings  }) {

    const [ chat , setChat ] = useState({
        person1:""
    });

    const chatFormSubmit = (e) => {
        e.preventDefault();
    }

    console.log(chat);

    const valueStore = (e) =>{
        setChat({...chat , [e.target.name]:e.target.value})
    }   

    const chatSubmit = () => {
        if(chat.person1.length > 2){

        axios.post("http://127.0.0.1:5555/chat" , chat , {
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res) => console.log(res) )
        .catch((err)=> console.log(err) )

    }
    }

    return(<>
    <div className="chat-div">
        <h1> LEE </h1>
        <form onSubmit={chatFormSubmit}>
            <input type="text" name="person1"  onChange={valueStore} value={chat.person1}/>
            <button onClick={chatSubmit}>Send</button>
        </form>
    </div>
    </>);
}

export default Person1;
