import { QRCodeCanvas } from "qrcode.react";
import "./form.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import TRANSFER from "../axx/axios";



function Form(){

    const location = useLocation();

    // for songs 9
    
    const songs = (location.state.Title.songs);
    const [qr , setQr]=useState(false);
    const [songsNum , setSongsnum] = useState();

    const [datas , setDatas] = useState({
        clientName:"",
        clientNumber:"",
        date:"",
        clientAddress:""
    })

    const [qrData , setQrData ]  = useState([]);

    const [err,setErr] = useState({});

    const errchecking = (d) =>{
        let err ={};

        if(d.clientNumber.length !== 10){
            err.num = 'enter the nummber';
        }

        if(d.clientName === ''){
            err.name = 'enter your name';
        }
    
        if(d.date === ''){
            err.date ="select the date";
        }

        if(d.clientAddress === ""){
            err.add = "give your address";
        }

        else if(d.clientAddress.length < 15){
            err.add = "enter valid address";
        }
        return err;
    }

    const storevalue = (e) =>{
    
        setDatas({...datas , [e.target.name]:e.target.value , ["Category"]:location.state.Title.category});
    
    }

const formSubmit = (e) =>{
        e.preventDefault();
        setErr(errchecking(datas))
    }

    useEffect(()=>{

       

        if(Object.keys(err).length === 0 && datas.clientName !=='' && datas.clientNumber !== '' && datas.clientAddress !== '' && datas.date !== ''){
            setDatas({
                clientName:'',
                clientNumber:'',
                clientAddress:'',
                date:''
            })
            TRANSFER.post('orders/postOrder',datas)
            .then(res  =>{ console.log(res.data);
                toast.success("order Booked");
                setQrData(res.data.data);
                setSongsnum(Math.floor(Math.random()*songs.length));
                setQr(true)
                })
            .catch(err => {console.log(err);
                toast.error(err.response.data.message )})

            // setTimeout(()=>{
            // setQr(true)},2000)

        }
    },[err , songs])



    return(<>

    <ToastContainer />

    <div className="form-div">

        <img src={location.state.Title.img} className="formbg"/>        

    <div className="form-title">

        <h1>Book Your {location.state.Title.eventname}</h1>

    </div>

    <div className="align">

    <div className="form-body align">

    <div className="mrg-form">

        <form onSubmit={formSubmit}  >
    <div className="form-align">
        <input type="text"   name="clientName"    placeholder="enter your name" style={{color:`${location.state.Title.inpcolor}`}}   onChange={storevalue} value={datas.clientName}/><br/>
        <p>{err.name}</p>
        <input type="number" name="clientNumber"  placeholder="enter your number" style={{color:`${location.state.Title.inpcolor}`}} onChange={storevalue} value={datas.clientNumber}/><br/>
        <p>{err.num}</p>
        <input type="date"   name="date" placeholder="select the event date" style={{color:`${location.state.Title.inpcolor}`}}      onChange={storevalue} value={datas.date} />
        <p>{err.date}</p>
        <textarea rows={5} cols={45} name="clientAddress" placeholder="enter your address" style={{color:`${location.state.Title.inpcolor}`}} onChange={storevalue} value={datas.clientAddress} />
        <p>{err.add}</p>
        <button style={{background:`${location.state.Title.color}`}}> Submit </button>
    </div>
        </form>
    </div>

    <div className="form-welcome">
        <h4 style={{color:`${location.state.Title.color}`}}>{location.state.Title.des}</h4>
    </div>

    </div>

    </div>

    <h5 id="exit"> <Link to={"/home"} className="p-2"> Back to home </Link> </h5>

    </div>

  {/*  for songs  */}

  { qr ? <div className="qr-songs">
        <div className="blur"></div>
        <div className="client-data">
            <h1> {location.state.Title.songsTitle} Mr/Mrs - <span> {qrData.clientName} </span></h1>
        </div>
        <div className="qr">
        <QRCodeCanvas id="qrr" value={songs[songsNum]} size={130} />
        </div>
    <h5 id="exit"> <Link to={"/home"}> Back to home </Link> </h5>
    </div>:""}
    </>)}

export default Form;