import axios from "axios";
import { useState } from "react";

function Image(){

    const [img , setImg] = useState();
    // const [title , setTitle] = useState();
    const [data , setData]   = useState({
        title:"",
        // img : img,
        user:""
    })

    console.log(data);

    const change = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    // const Uploadimage = (e) => {
    //     const reader = new FileReader;
    //     reader.readAsDataURL(e.target.files[0]);
    //     reader.onload = () => {
    //         console.log(reader.result);
    //         setImg(reader.result);
    //         setData((prevData)=>{
    //             return {...prevData, img : reader.result}
    //         })}
    //     reader.onerror = (err) => {
    //         console.log('error' , err);
    //         setData((prevData)=>{
    //             return {...prevData}
    //         })
    //     }
    // }

const imagePost = (e)=>{
    e.preventDefault();
    console.log(data)
    axios.post('http://127.0.0.1:3055/api/imagepost',data,{
        headers:{
                "Content-Type":"applicaiton/json"
            }
        }).then((res)=>console.log(res))
          .catch((err)=>console.log(err))
}

return(<>
    <div className="imgup">
            <input type="text" placeholder="title" name="title" onChange={(e)=>change(e)} value={data.title} />
            <br/>
            <input type="text" placeholder="name" name="user" onChange={(e)=>change(e)} value={data.user} />
            <br/>
    
            {/* <label for='img' >upload photo</label>
            <input type="file" accept="image/*" style={{visibility:'hidden'}} id="img" name="img" onChange={Uploadimage} /> */}
            <button type="submit" onClick={imagePost}>submit</button>
            <img width={"50px"} height={"50px"} src={img} />
            {/* <button onClick={imagePost}> Upload </button> */}
    </div>

    <App/>
    </>);
}

export default Image;

function App(){
    const[image,setImage]=useState("");
    const[data,setData]=useState({
        title : "",
        image : image
    })
    // const nav= useNavigate()

    const handleChange=(e)=>{
      setData({...data,[e.target.name]:e.target.value})
    }

    const converttoBase64=(e)=>{
        var reader=new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=()=>{
          console.log(reader.result)
          setData((prevAddEmp)=>{
            return {...prevAddEmp, image : reader.result}
          })
          // setImage(reader.result)
        }
        reader.onerror=(error)=>{
          console.log("error:",error);
          setData((prevAddEmp)=>{
            return {...prevAddEmp}
          })
        };      
    }
    
   const handleClick=(e)=>{
      e.preventDefault();
      console.log(data);
      axios.post('http://127.0.0.1:3013/api/v1/postUsers',data,{
      headers:{
        "Content-Type":"application/json"
      }
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    }
  
    return(
        <>
          {/* <button className='btn' onClick={(()=>nav("/profile"))}> Profile
            <i class="fa-regular fa-user"></i></button> */}


            {/* <button><Link to='/submit'>Profile</Link></button> */}

        {/* <fieldset>
            <form> */}
                
                <input type="text" placeholder="title" name='title'   onChange={(e)=>handleChange(e)} value={data.title}/> <br /> <br />
                <input accept='image/*' id="image" style={{visibility:'hidden',width:"0px",height:"0px"}} 
                    type='file' onChange={converttoBase64}/><br></br><br></br>
                <label for="image" id="imageupload">Upload Profile</label>
                
          <br></br> <br />                <button onClick={handleClick}>Send</button>
            {/* </form>
        </fieldset> */}
        
        </>
    )
}