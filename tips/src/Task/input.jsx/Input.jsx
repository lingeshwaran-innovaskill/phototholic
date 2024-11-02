// import { useRef, useState ,useEffect } from "react";





// function Getdata() {

//     const inp=useRef();                      //it is used to change the dom element values(directly)
//     const [data1,setData1]=useState(); 

//     function inputdata()
//     {
//     inp.current.innerText=data1;     //print the get value  using userref
//     }


//     return (                            //get and update all the value in usestate 
//         <>

//         <input type="text"    value={data1}    onChange={e=>setData1(e.target.value)}/>  
//         <button onClick={inputdata}>Submit</button>
//       
//   <h1 ref={inp}>YOUR NAME</h1>      //ref is use to print the get value in that element
//         </>
//      );
//  }
// export default Getdata;