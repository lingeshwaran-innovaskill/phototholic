import { useState } from "react";
import B from "./child";

function Parent(){

    const[getcolor,setGetcolor]=useState();

function a(d){
    setGetcolor(d);
}

return(
    <>
    <div className="cdiv" style={{background :`${getcolor}`}}>

    </div>
    <B colors={a}/>
    </>

)}
export default Parent;
