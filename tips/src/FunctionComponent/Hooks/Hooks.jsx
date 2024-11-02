//                        useEffect example

//                          [Task - 1]



import { useEffect, useState } from "react";


function Lee() {

    const[count,setCount]=useState(0);
    const[count1,setCount1]=useState(0);
    const[count2,setCount2]=useState(0);

    // let multiple;

    let counting=()=>{
        setCount(count+1);
    }
   

    // useEffect(()=>{
    // setTimeout(()=>{
    //      multiple
    // },2000)
    // },[])
    

    useEffect(()=>{
        setCount1(count*3);
         setCount2(count1/3);
    },[count,count1])
    

    // useEffect(()=>{
      
    // },)

    return(
        <>
        <h1>The count is : {count} X {count1}</h1>

        <h1>The Divide count is : {count2}</h1>
        
        <button onClick={counting}>click</button>
        
        </>
        
    )
}

export default Lee;

                         //simple multiple using useEffect


// function App(){
//     const[a,setA]=useState(0);         
//     const[b,setB]=useState(0);

//     let counting1=()=>{           
//         setA(a+1);       //when the button is clicked it will add
//     }

//     useEffect(()=>{ 
//       setB(a*2);         //that added variable is multiple with the value
//     })

//     return(
//         <>
//         <h1>count is {a} X {b}</h1>
//         <button onClick={counting1}>Click</button>
//         </>
//     )
//  }







