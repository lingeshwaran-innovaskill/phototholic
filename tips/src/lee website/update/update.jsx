import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import TRANSFER from "../axx/axios";


function Update() {

    const location = useLocation();
    const navigate = useNavigate();

    const [update,setUpdate] = useState({
        clientName:"",
        clientNumber:"",
        date:"",
        clientAddress:""
    })

    const formSubmit = (e) =>{
        e.preventDefault();
    }

    const updating = () => {

        TRANSFER.put(`orders/putOrder?_id=${location.state.d._id}` , update )
        .then((res)=>{console.log(res);navigate('/orders')})
        .catch((err)=>{console.log(err)})

    }

    const handleChange = (e) =>{
        setUpdate({...update,[e.target.name]:e.target.value})
    }

    useEffect(()=>{

        setUpdate({
            clientName:location.state.d.clientName,
            clientNumber:location.state.d.clientNumber,
            clientAddress:location.state.d.clientAddress,
            date:location.state.d.date
        })

    },[])

    const [datas , setDatas] = useState(
        [
            {
                States:"TamilNadu",
                District:[{
                    DName:"Tirunelveli",
                    Bloods:["A+" , "A-" , "AB+" , "AB-"] 
                },
                {
                    DName:"Thuthukudi",
                    Bloods:["A-" , "A+"]
                },
                {
                    DName:"Tenkasi",
                    Bloods:["A2b+" ,  "O-" , "O+"]
                },
                {
                    DName:"Kanyakumari",
                    Bloods:["O+" , "A-" , "B+" , "B-"]
                }]
            }
            ,
            {
                States:"Kerala",
                District:[
                    {
                        DName:"Alapuzzha",
                        Bloods:["A+" , "O-"]
                    },
                    {
                        DName:"Kasaragod",
                        Bloods:["B+" , "O+"]
                }]
            }
            ,
            {
                States:"Kerala",
                District:[
                    {
                        DName:"Alapuzzha",
                        Bloods:["A+" , "O-"]
                    },
                    {
                        DName:"Kasaragod",
                        Bloods:["B+" , "O+"]
                }]
            }
        ])
    const [District , setDistrict] = useState();
    const [State , setState] = useState()

    const [Districts , setDistricts] = useState([]);
    const [Bloods , setBloods]  = useState([]);

    const changeDis = (dis) => {
        setState(dis.target.value);
        setDistricts(datas.find( (e) => e.States === dis.target.value).District);
    }

    const changeDistrict = (ele) =>{
        setDistrict(ele.target.value);
        setBloods(Districts.find((e)=>e.DName === ele.target.value).Bloods);
    }



  
return(<>



<div>
    <form onSubmit={formSubmit}>
    <input type="text"    placeholder="update your name"   name="clientName"   value = {update.clientName}   onChange={handleChange} />
    <input type="number"  placeholder="update your number" name="clientNumber" value = {update.clientNumber} onChange={handleChange}/>
    <input type="date"    placeholder="change the date"    name="date"         value = {update.date}         onChange={handleChange}/>
    <textarea rows={5} cols={30} placeholder="enter your address" name="clientAddress" value={update.clientAddress} onChange={handleChange}> </textarea>
    <button onClick={updating}> Submit </button>
    </form>

</div>

<div>
<select value={State} onChange={changeDis}>
<option> States </option>
    {datas.map((D)=>{
        return(<>
        <option value={D.States}>{D.States}</option>
        </>)
    })}
</select>

<select value={District} onChange={changeDistrict}>
<option> District </option>
{Districts.map((d)=>{
        return(<>
        <option value={d.DName}>  {d.DName}  </option>
        </>)
})}
</select>

<select>
<option> Bloods </option>
    {Bloods.map((e)=>{
            return(<>
            <option value={e}> {e} </option>
            </>)
        })}
</select>

</div>
</>)
}
export default Update;
