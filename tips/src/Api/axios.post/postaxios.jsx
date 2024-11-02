import axios from "axios"



function Axiosapi(){
   let obj={
    name:"lingesh",
    email:'lingesh@gmail.com',
    no:90223
   };

    axios.post('https://jsonplaceholder.typicode.com/posts',obj,{
        headers:{"Content-Type":"application/json"}
    }).then(res=>console.log(res.data)).catch(err=>console.log(err))
    
    axios.delete('https://jsonplaceholder.typicode.com/posts/101',{
        headers:{'Content-Type':'application/json'}
    }).then(res=>console.log(res)).catch(err=>console.log(err))
    return(
        <h1>axios post method</h1>
    )
};

export default Axiosapi;
