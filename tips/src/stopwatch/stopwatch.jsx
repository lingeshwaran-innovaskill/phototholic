import { useEffect, useState } from "react";




function Stopwatch(){

    const [timer,setTimer]=useState(0);
    const [timeon,setTimeon]=useState(false);


    useEffect(()=>{
        let clear=null;

        if(timeon){
            clear=setInterval(()=>{
            setTimer(e=>e+1);
            },10)
        }
        else{
            clearInterval(clear);
        }

        return ()=> clearInterval(clear) 

    },[timeon])
  


    return(<>

<div className="stopwatch-div">

    <div className="stopwatch-body">
    
    <div className="time" style={{display:"flex"}}>
        
    <h1>{('0' + Math.floor((timer / 60000) % 60)).slice(-2)}:</h1>
    <h1>{('0' + Math.floor((timer / 1000) % 60)).slice(-2)}:</h1>
    <h1>{('0' + Math.floor((timer / 10) % 100)).slice(-2)}</h1>

    </div>

    <button onClick={()=>setTimeon(true)}>Start</button>
    <button onClick={()=>setTimeon(false)}>Stop</button>
    <button onClick={()=>setTimeon(true)}>Resume</button>
    <button onClick={()=>setTimer(0)}>Re-set</button>

    
    </div>

</div>
    </>)
}
export default Stopwatch;