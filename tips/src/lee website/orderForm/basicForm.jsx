import './basicForm.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from './formbg.jpg';
import { Parallax } from 'react-parallax';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TRANSFER from '../axx/axios';



function BookingForm() {

    const [data,setData] = useState({
        clientName:"",
        clientNumber:'',
        Category:'',
        clientAddress:'',
        date:''
    })

    const [err,setErr]=useState({});

    const errChecking = (data) =>{
        let err = {};
        if(data.clientName === ''){
            err.name = 'please enter your name'
        }

        if(data.clientNumber === ''){
            err.num = 'enter your number'
        }

        else if(data.clientNumber.length != 10){
            err.num = 'enter a valid number'
        }

        if(data.Category === ""){
            err.sho = "select the events"
        }

        if(data.clientAddress === ""){
            err.add = "enter your address"
        }

        if(data.date === ""){
            err.date = "select the date"
        }

        return err;

    }

const toastFun = () => {
    toast.success('Login Successfully!');
    console.log(toast);
}

const valueStore = (e) =>{
    setData({...data , [e.target.name]:e.target.value})
    console.log(data);
}

const formSubmit  = (e) =>{
    e.preventDefault();
    setErr(errChecking(data))
}

useEffect(()=>{

    if(Object.keys(err).length===0 && data.clientAddress !== '' && data.clientName !== '' && data.clientNumber !== "" && data.Category !== ''){
        setData({
            clientAddress:"",
            clientNumber:"",
            clientName:"",
            Category:"",
            date:''
        })

        TRANSFER.post('orders/postOrder' , data )
        .then((res)=>{console.log(res); toast.success(`booked successfully mr/mrs : ${data.clientName}`)})
        .catch((err)=>{console.log(err.response.data.message);
        toast.error("something went wrong")})

    }

},[err])

    return (<>
    <h1 id='book-h1' onClick={toastFun} 
    // data-aos="fade-up"
    data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="1000"
     data-aos-duration="200"
    > Other Event Order Here! </h1>
    <ToastContainer position = "top-left" />
    <div className='book-div'>

<Parallax bgImage={bg} strength={-100} blur ={{min:15 , max:-15}}>

<div className="main-book">
    {/* <img src={bg} id='book-img'/> */}
    <div className='book-title'>
    {/* <h1> Other Event Order Here! </h1> */}
    <div className='book-quotes'>
        <h2>
            Let's Capture The Momment
        </h2>
    </div>
    </div>

<form className='book-form' onSubmit={formSubmit}>

<div className="book-ele">

<div className='ele' >
    <label> Name : </label><br />
    <input type="text" placeholder='enter your name' name='clientName' onChange={valueStore} value={data.clientName}/> <br />
    <p>{err.name}</p>
</div>

<div className='ele'>
    <label> Number : </label><br />
    <input type="number" placeholder='enter your number' name='clientNumber' onChange={valueStore} value={data.clientNumber}/> <br />
    <p>{err.num}</p>
</div>

<div className='ele1'>
    <div className='ele' >
        <label> Selete the events : </label><br/>
        <input list='Shoots'  placeholder='select the event' name='Category' onChange={valueStore} value={data.Category}/>

        <datalist id='Shoots'>
        <option value="Photo-Shoot"></option>
        <option value="Baby-Shower"></option>
        <option value="Pre-Wedding"></option>
        </datalist>
        <p>{err.sho}</p>
    </div>

<div className='ele' >
    <label> Date : </label><br />
    <input type="date"  placeholder='enter your number' name='date' onChange={valueStore} value={data.date}/> <br />
    <p>{err.date}</p>
</div>
</div>

<div className='ele'>
<label> Enter Your Address :</label><br/>
    <textarea rows={7} cols={35} placeholder='enter your address' name='clientAddress' onChange={valueStore} value={data.clientAddress}></textarea><br/>
    <p>{err.add}</p>
</div>

    <button > Submit </button>

</div>
</form>

</div>
</Parallax>
</div>
</>);
}
export default BookingForm;