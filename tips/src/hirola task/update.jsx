
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {

    const location = useLocation();
    const navigate = useNavigate();

    const [user1,setUser1] = useState({
        content1:"",
        content2:"",
    })

    const [update,setUpdate] = useState({
        firstName:"",
        lastName:"",
        address:[{
            content1:"",
            content2:""
        }]
    })

    const formSubmit = (e) =>{
        e.preventDefault();
    }

    const updating = () => {

        axios.put(`http://127.0.0.1:1234/update?firstName=${location.state.d.firstName}` , update , {
        headers:{
            "Content-Type":"application/json"
        }})
        .then((res)=>{console.log(res);navigate('/')})
        .catch((err)=>{console.log(err)})

    }

    const handleChange = (e) =>{
        setUpdate({...update,[e.target.name]:e.target.value})
    }

    const valuechange = (e) => {
        setUser1({ ...user1 , [e.target.name] : e.target.value })
        setUpdate({ ...update , address:[{...user1}]})
    }

    useEffect(()=>{

        setUpdate({
            firstName:location.state.d.firstName,
            lastName:location.state.d.lastName
        })

        setUser1({
            content1:location.state.d.address[0].content1,
            content2:location.state.d.address[0].content2
        })

    },[])

  console.log(update)
return(<>



<div>
    <h1> Update </h1>
    <form onSubmit={formSubmit}>
    <input type="text"  placeholder="firstname"  name="firstName"  onChange={(e)=>handleChange(e)}  value={update.firstName} />
    <input type="text"  placeholder="lastname"   name="lastName"   onChange={(e)=>handleChange(e)}  value={update.lastName}/>
    <input type="text"  placeholder="content1"   name="content1"   onChange={(e)=>valuechange(e)}  value={user1.content1}/>
    <input type="text"  placeholder="content"    name="content2"   onChange={(e)=>valuechange(e)}  value={user1.content2}/>
    <button onClick={updating}> Submit </button>
    </form>

</div>

</>)
}
export default Update;
