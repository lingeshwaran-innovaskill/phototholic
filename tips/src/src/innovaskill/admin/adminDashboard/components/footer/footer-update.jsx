import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../dashboard/dashboard";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import './admin-footer.css'
import AXX from "../../../../routes/axios";

function NavUpdate(){

    const location = useLocation();
    const navigate = useNavigate();

    const [ updateData , setUpdateData ] = useState([]);

    const storingValue = (ele) => {
        setUpdateData({...updateData , [ele.target.name]:ele.target.value});
    }

    const upPost =  (update) => {
        AXX.put(`admin/${update}`,updateData)
        .then((res)=>{toast.success('updated');navigate('/footer')})
        .catch((err)=>{toast.error('updated failed')})
    }

    useEffect(()=>{

        if(location.state.train){
            setUpdateData({
                trainingTitle:location.state.train.trainingTitle,
                trainingLink:location.state.train.trainingLink
            });
        }

        else{
            setUpdateData({
                serviceTitle:location.state.service.serviceTitle,
                serviceLink:location.state.service.serviceLink
            });
        }
    },[])

    // console.log(updateData);

    return(<>

    <Dashboard/>

        <div className="container admin-footer-update">

            <div className="row ">
                <div className="col-12  back">
                    <Link to={-1} className="py-1 px-3 float-end"> Back </Link>
                </div>
            </div>

            {location.state.train ?

            <div className="row d-flex justify-content-center align-items-center">
                <div className="col">
                        <input type="text" placeholder="Training Title" name="trainingTitle" onChange={storingValue} value={updateData.trainingTitle}/>
                        <input type="text" placeholder="Training Link"  name="trainingLink" onChange={storingValue} value={updateData.trainingLink}/>
                    <div>
                        <button onClick={()=>upPost('updateTrain?_id='+location.state.train._id)}> Submit </button>
                    </div>
                </div>
            </div>

            :

            <div className="row  d-flex justify-content-center align-items-center">
                <div className="col">

                    <input type="text" placeholder="Service Title" name="serviceTitle" onChange={storingValue} value={updateData.serviceTitle}/>
                    <input type="text" placeholder="Service Link"  name="serviceLink" onChange={storingValue} value={updateData.serviceLink}/>

                    <div>
                        <button onClick={()=>upPost('updateService?_id='+location.state.service._id)}> Submit </button>
                    </div>

                </div>
            </div>

            }
        </div>

    </>)
}

export default NavUpdate;
