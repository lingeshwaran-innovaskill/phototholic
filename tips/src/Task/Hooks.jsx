import { useRef, useState } from "react";
  
  



  
    function Task() { 

    const setcolor=useRef();
    // const colors=['aqua','grey','blue'];

   let changecolor=()=>{

    // const value1=Math.floor(Math.random( )*255);
    // const value2=Math.floor(Math.random( )*255);
    // const value3=Math.floor(Math.random( )*255);

    // const arr='rgb('+value1+","+value2+","+value3+')'              

    
    //                       hex values(like #12ef13)  => color code

    //hex values=0 to 15 0 to 9=>digits a to f  a=10,b=11,c=12,d=13,e=14,f=15  



    let words="0123456789ABCDEF";
    let sybol="#";

    for(let i = 0 ; i < 6 ; i++ ){
      sybol+=words[Math.floor(Math.random()*words.length)]
    setcolor.current.style.backgroundColor=sybol;
    console.log(sybol); 
    }

  
    return ( 
        <>
        <body>

        <button onClick={changecolor}>Change</button>
        <h1 >THE LEE</h1>
        <div className="Task" ref={setcolor} >

        </div>
        </body>
        </>
     );
}
export default Task;



