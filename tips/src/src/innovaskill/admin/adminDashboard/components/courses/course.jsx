import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import Dashboard from '../../dashboard/dashboard';
import './course.css';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
import toast from 'react-hot-toast';
import AXX from '../../../../routes/axios';

function Courses(){

    const [ get , setGet ] = useState();

    const [courseImg,setImg] = useState();

    const [coursePost , setCoursePost] = useState({
        courseHead:"",
        courseDetails:"",
        courseLink:"",
        courseImg:""
    })

    const storingData = (e) => {
        setCoursePost( { ...coursePost , [e.target.name] : e.target.value } )
    }

    const errorChecking = (d) =>{
        if(d.courseHead == "" || d.courseDetails == "" || d.courseLink == "" || d.courseImg == '' ){
            alert('fill all the fields')
        }
    }

    // const imageUploding = (e) =>{

    //     const imageFile = new FileReader;
    //     imageFile.readAsDataURL(e.target.files[0]);

    //     imageFile.onload = () => {
    //         console.log(imageFile.result)
    //         setImg(imageFile.result)

    //         setCoursePost( (updateData) => {
    //         return {...updateData , courseImg : imageFile.result } } )
    //     }

    //     imageFile.onerror =  (err) => {
    //         console.log("error" , err)
    //         setCourseData((img) => {
    //             return {...img}
    //         })
    //     }
    // }

    const imgTostring = async(file) => {
        const reader = new FileReader
        await reader.readAsDataURL(file)
        const image = new Promise( ( success , error ) => {
            reader.onload = () => {success(reader.result) ; setCoursePost( (update) => { return {...update , courseImg : reader.result }} )}
            reader.onerror = (err) => error(err)
        })
        return image
    }

    const imageUploding = async(e) =>{
        const file = e.target.files[0];
        const image = await imgTostring(file);
        setImg(image);
    }

    const formSubmit=async(e) => {

        e.preventDefault();

        errorChecking(coursePost);

        if(coursePost.courseHead != "" && coursePost.courseDetails != "" && coursePost.courseLink != "" && coursePost.courseImg != '' ){

            setCoursePost({
                courseHead:"",
                courseLink:"",
                courseDetails:"",
                courseImg:""
            })

            setImg({
                courseImg:""
            })

            await AXX.post( "admin/coursePost" , coursePost )
            .then( (res) => {
                console.log(res.data);
                toast.success('course posted')
             })
            .catch( (err) => {
                console.log(err);
                toast.error('upload failed')
            })

        }

    }

    const deletingData = (id) => {

        if(window.confirm('want to delete')){
            AXX.delete(`admin/courseDelete?_id=${id}`)
            .then( (res)=> {
                console.log(res.data);
                setGet(res.data)
                toast.success(res.data.message);
            })
            .catch( (err) => {
                console.log(err) ;
                toast.error('data was not deleted');
            })
        }

        else{
            toast('data was not deleted');
        }

    }

    const [ courseData , setCourseData ] = useState([]);

    useEffect(()=>{

        AXX.get('admin/courseGet')
        .then( (res) => {
            setCourseData(res.data.data)
         }).catch((err)=>{})

    },[ coursePost , get ])


return(<>

<Dashboard/>

    <div className="admin-course-table container-fluid">

    <div className="container">

        <div className="row table-head d-flex justify-content-between align-items-center">

            <h2 className='col-4 my-3 '>Job Oriented Programs </h2>

            <div className="col-2">
                <a href='#form' className='py-1 px-3'> <i class="fa-solid fa-plus"></i> Create</a>
            </div>

        </div>

    <table className="table table-bordered mb-5 text-center">

        <thead className='bg-primary'>
            <tr className='text-white'>
                <th className='col-1'> S No  </th>
                <th className='col-3'> Heading </th>
                <th className='col-4'> Image </th>
                <th className='col-2'> Content </th>
                <th className='col-1'> Links </th>
                <th className='col-2'> Edit </th>
            </tr>
        </thead>

        <tbody className='table-body'>
            {courseData.map((e , f)=>{
                return(<>
                <tr key={f} className='my-3'>
                    <td> {f+1} </td>
                    <td>{e.courseHead}</td>
                    <td className='d-flex justify-content-between align-items-center'>
                        <div className='setWidth'>
                            <img src={e.courseImg}/>
                        </div>
                    </td>
                    <td>{e.courseContent ? e.courseContent : e.courseDetails}</td>
                    <td> {e.courseLink} </td>
                    <td className='d-flex'>
                    <Link to={'/course-update'} state={{e}} className='update mx-1 py-1 px-3'> Update </Link>
                    <button className='delete mx-1 py-1 px-3' onClick={()=>deletingData(e._id)}> Delete </button> </td>
                </tr>
                </>)
            })}
        </tbody>

    </table>

    <div className="row course-upload my-5" id='form'>

        <div className="col-12">
            <h2>Upload Course</h2>
        </div>

        <form onSubmit={formSubmit} className='row d-flex justify-content-center align-items-center ' >

            <div className="col-4 d-flex flex-column justify-content-center align-items-center">

                <input type='text' name='courseHead' className='col-10 my-2 py-2 px-4' placeholder='Content Heading' onChange={storingData} value={coursePost.courseHead}/>
                <input type='text' name='courseDetails' className='col-10 my-2 py-2 px-4' placeholder='Content Details' onChange={storingData} value={coursePost.courseDetails}/>
                <input type='text' name='courseLink' className='col-10 my-2 py-2 px-4' placeholder='Content Link' onChange={storingData} value={coursePost.courseLink}/>

                <input type='file' accept='.svg ,.jpg,.jpeg,.png' className='col-10 my-2 py-2 px-4 custom-file-input' id='files' name='courseImg' onChange={imageUploding} />

                <div className="col-12 my-3  d-flex justify-content-center align-items-center">
                    <button className='col-4 py-1'> Submit </button>
                </div>

            </div>

        </form>

    </div>

    </div>
</div>

</>)

}
export default Courses;

