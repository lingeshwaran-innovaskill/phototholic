import { useEffect, useState } from "react";
import Courses from "./course";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../dashboard/dashboard";
import axios from 'axios';
import { toast } from "react-hot-toast";
import AXX from "../../../../routes/axios";

function UpdateCourse(){

    const location = useLocation();

    const navigate = useNavigate();

    const [ courseImg , setImg ] = useState();

    const [ updateData , setUpdateData ] = useState({
        courseHead:"",
        courseDetails:"",
        courseLink:"",
        courseImg:""
    })

    const updateStoring = (e) =>{
        setUpdateData({...updateData , [e.target.name] : e.target.value});
    }

    const imageUploding = (e) =>{

        const imageFile = new FileReader
        imageFile.readAsDataURL(e.target.files[0])
        imageFile.onload = () => {
            // console.log(imageFile.result)
            setImg(imageFile.res)
            setUpdateData( (updateData) => { 
            return {...updateData , courseImg : imageFile.result } } )
        }

        imageFile.onerror =  (err) => {
            // console.log("error" , err)
            setUpdateData((img) => {
                return {...updateData}
            })
        }

    }

    // console.log(courseImg);
    // console.log(updateData);

    const updating = () => {

        AXX.put(`admin/courseUpdate?_id=${location.state.e._id}` , updateData)
        .then( (res) => {
            // console.log(res.data);
            navigate("/course");
            toast.success("updated");
        })
        .catch( (err) => {
            // console.log(err);
            toast.error('updating failed');
        })

    }

    const updateForm = (e) => {
        e.preventDefault();
    }

    useEffect(()=>{
        setUpdateData({
            courseHead:location.state.e.courseHead,
            courseDetails:location.state.e.courseDetails,
            courseLink:location.state.e.courseLink,
            // courseImg:location.state.e.courseImg
        })
        setImg(location.state.e.courseImg)
    },[])

    return(<>

    <Dashboard/>

    <div className="container updating-course d-flex flex-column justify-content-evenly align-items-center ">

        <div className="col-10 form-back-btn d-flex justify-content-end align-items-center my-2">
            <Link to={-1} className="col-1 text-center py-1 "> Back </Link>
        </div>

        <form onSubmit={updateForm} className="row">

            <div className="col-lg-12 d-flex flex-column justify-content-center align-items-start">

               
                <h3> Course Head : </h3>
                <input type="text" name="courseHead" className="col-lg-12 my-2 px-2 py-1" onChange={updateStoring} value={updateData.courseHead}/> 

                <h4> Course content :</h4>
                <textarea type="text" name="courseDetails" className="my-2 px-2 py-2" onChange={updateStoring} value={updateData.courseDetails} cols={42} rows={3}>
                </textarea>

                <h4> Course Link :</h4>
                <input type="text" name="courseLink" className="col-lg-12 my-2 px-2 py-1"  onChange={updateStoring} value={updateData.courseLink}/>

                <h3> Course Image </h3>
                <input type="file" name="courseImg" className="col-lg-12 my-2 px-2 py-1" accept="jpeg/png/jpg" onChange={imageUploding}/>
                
                <div className="col-lg-12  my-2 d-flex justify-content-center align-items-center">
                    <button className="col-lg-5 py-2" onClick={updating}> Submit </button>
                </div>

            </div>

        </form>

    </div>

    </>)
}
export default UpdateCourse;
