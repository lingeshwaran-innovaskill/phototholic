import { useEffect, useState } from "react";




function Lee(){

    const[data,setData]=useState([]);
    
    
    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/users',{
            method:'GET',
            headers:{'Content-type':'application/json'}

        }).then(res=>res.json()).then(json=>setData(json))
        .catch(err=>console.log(err))



    },[])

    function  setdel(id){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
                    method:'DELETE',
                    headers:{'content-type':'application/json'}

                }).then(res=>res.json()).then(l=>setData((l)=>l.filter(e=>e.id!=id)))
                .catch(err=>console.log(err))

    // const del=data.filter(e=>e.id!=id)
    // setData(del);
    // console.log(del)
    }

    
    
    return(<>
           <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>name</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                </tr>
                </thead>
                <tbody>
                    {data.map((e)=>{
                        return(<>
                       <tr>
                        <td>{JSON.stringify(e.id)}</td>
                        <td>{JSON.stringify(e.name)}</td>
                        <td>{JSON.stringify(e.username)}</td>
                        <td>{JSON.stringify(e.email)}</td>
                        <td>{JSON.stringify(e.address)}</td> 
                        <button onClick={()=>setdel(e.id)}>DELETE</button>
                       </tr>
                       </>)
                                   } 
                        )}
                </tbody>
            </table>   

    
    </>)
}
export default Lee;