import { useEffect, useState } from "react";


//                                 //fetch api example 

// function Api() {
//     const [data,setData]=useState([]);
//     const [url,setUrl]=useState('posts');

// useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${url}`,{
//     method:'GET',
// header:{
//     "Content-type":'application/json'
// }
//     }).then(res=>res.json()).then(json=>setData(json))    //in fetch 1st we need to change the object to json file 
//       .catch(err=>console.log(err))                       //then only it will  print 
// }) 


//     return ( <>
// <button onClick={()=>setUrl('posts')}>posts</button>           //button is working in call back function
// <button onClick={()=>setUrl('comments')}>comments</button>     //when i click the button it will update 
// <button onClick={()=>setUrl('users')}>users</button>           //in the (url) the data will be changed 
// <h1>{url}</h1>
// {
//     data.map((e)=>{return(
//         <pre>{JSON.stringify(e)}</pre>        //in fetch we need to change json file to string  
//             )                                 //using this keyword
        
//     })
// }
// </>);
// }

// export default Api;































//           using fetch(print in console)


// function ApiTrain() {



// useEffect(()=>{ 
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//      header:{
//         "Content-type":"application/json"
//      }
//     }).then(res=>res.json()).then(resq=>console.log(resq))
//       .catch(err=>console.log(err))
// })
//     return (  
//         <>
        
//         </>
//     );
// }

// export default ApiTrain;