import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Dashboard from "../../dashboard/dashboard";


export default function ObjDel(){

    const location = useLocation();

    const [ objDel , setObjDel ] = useState([location.state.e]);

    const delObj = () => {
        axios.patch(`http://127.0.0.1:1234/innovaskill/api/admin/navUpdateObj?navName=${location.state.e.navname}`, objDel , {
            headers:{
                "Content-Type":"application/json"
            }
        }).then( (res) => {console.log(res.data)})
        .catch( (err) => {console.log(err)} )
    }

    return(<>

    <Dashboard/>

    <div className="container">
        <div className="row">

            {objDel.map((obj)=>{
                return(<>
                    <input type="text"  value={obj.navName}/>
                    <input type="text"  value={obj.linkPage}/>
                </>)
            })}

        <button onClick={delObj}> Delete </button>
        </div>
    </div>
    </>)
}