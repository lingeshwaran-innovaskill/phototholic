//                            useState example
import { useState } from "react";





//            creating table





// function App() {
//    const[data,setData]=useState([{name:"lingesh",mark:90},
//    {name:"reenu",  mark:80},
//    {name:"the lee",mark:70}
//    ]);
//     return ( <>
//           <table>
//         <tr> 
//         <th>S.no</th> 
//         <th>Name</th>              
//         <th>Mark</th>
//         </tr>
//         <tbody>
//     {  data.map((l)=>{            //it will work like for loop   
//     return(
//               <>
//               <tr>
//               <td>{l.id}</td>            
//               <td>{l.name}</td>  // it will print like line by line
//               <td>{l.mark}</td>
//               </tr>
//               </>
//           )})}
// </tbody>
// </table>
// <button onClick={lee}>add data</button>
//           </>
//      );
// }

// export default App;

















// function Lee() {
//    const[fname,setFname]=useState('The Lee');       //we use this usestate only
 //   function app(){                                 //in function we don't need to use variabe 


//    setFname(prompt("enter your name"));     1st method 
    
//         OR

//    let a =prompt('enter your name');         2nd method (we can use like this also)
//    setFname(a);

//    }
//    return ( 
//       <>

//       <h1>{fname}</h1>
//       <button onClick={app}>Change</button>
      
      
//       </>
//     );
// }

// export default Lee;





//                 example of using variable value changing


// function Lee() {
//     let username="lingesh";
//      function  changename(){
//         username=prompt('enter your name');           //it can't be change using this 
//      }

//     return ( 
//         <>
//          <h1>{username}</h1>
//          <button onClick={changename}>change</button>
//         </>
//      );
// }

// export default Lee;



