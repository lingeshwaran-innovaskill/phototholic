import { useEffect, useRef, useState } from "react";


//                 (Task) 
//       change the element color using useRef()


// function Lingesh(){ 
//   const setColor=useRef();          //directly connect to the dom(html element) 
//   const arr=['yellow','blue','grey','brown','violet'];   //used to store the colors

//   let changecolor=()=>{
    
//     let value=Math.floor(Math.random()*arr.length);  =>used to get any numbers (in this we get for array index value)
//       setColor.current.style.color=arr[value];     =>this is (useRef) used give the style for (p) using math value
//     //   console.log(value);
//                       }
 
                 //current is a predefined initial value in useRef

// return(
//     <>
//     <button onClick={changecolor}>Change</button>
//     <h1 rfe={setColor}>THE LEE</h1>
//     </>
// )

// }
// export default Lingesh;












//                 window size adjust 



// function  Changesize(){
//     const[width,setWidth]=useState(window.innerWidth);      //i apply the window width in this states
//     const[height,setHeight]=useState(window.innerHeight);


//                      (this is the event listener perdefined method)
//                                     |
//         useEffect(()=>{             |
//         window.addEventListener('resize',changewindow);            //
//                       },[width,height])        // => using dependency array when the state(variable)                                   
//                                                      is upadate then only it (useEffect) will called

//          let changewindow=()=>{
//             setWidth(window.innerWidth); => when i adjust the web page it will update the state then 
//             setHeight(window.innerHeight);   // only(useEffect) will called
//          }
//          return(
//             <>
//             <h1>web page height is : {height}</h1>    //for printing the state
//             <h1>web page width is : {width}</h1>
//             </>
//          )
// }
// export default Changesize;




