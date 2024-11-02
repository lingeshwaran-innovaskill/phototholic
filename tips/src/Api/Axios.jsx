import axios from "axios";
import { useEffect, useState } from "react";

function Table() {
    const[tab,setTab]=useState([])
    useEffect(()=>{
         axios.get('https://jsonplaceholder.typicode.com/posts',{
            headers:{
                'Content-type':"application/json"
            }
         }).then(res=>setTab(res)) .catch(err=>console.log(err)) 
    });
    return (
        <>
        <table>
            <thead>
                <tr>
                    <th>users id</th>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
                {tab.map((e)=>{
              return( <>
                    <tr>
                        <td>{e.userId}</td>
                        <td>{e.id}    </td>
                        <td>{e.title} </td>
                        <td>{e.body}  </td>
                    </tr>
                    </>
                   )
                })
                }
            </tbody>
        </table>
        
        </>
     );
}

export default Table;


































// function Lingesh() {
//     const [pos,setPos]=useState([]);
//     const[url,setUrl]=useState('posts');

//     useEffect(()=>{
//      axios.get(`https://jsonplaceholder.typicode.com/${url}/?id/=9`,{
//         headers:{
//             'Content-type':"application/json"
//                }

//      }).then(e=>setPos(e.data)) .catch(err=>console.log(err))  //the axios method will automatically 
//                                                                 //    cchange the json file 
//     })
//     return ( 
//         <>
// <button onClick={()=>{setUrl('posts')}}>posts</button>
// <button onClick={()=>{setUrl('comments')}}>comments</button>
// <button onClick={()=>{setUrl('users')}}>users</button>
// <button onClick={()=>{setUrl('photos')}}>photos</button>
// <button onClick={()=>{setUrl('todos')}}>todos</button>
// <button onClick={()=>{setUrl('albums')}}>albums</button>
// {pos.map((lee)=>{

//       return(
//         <pre>{JSON.stringify(lee)}</pre>              //change the json file to string 
//       )                                               //for print the web page

// })}
//         </>
//      );
// }

// export default Lingesh;




