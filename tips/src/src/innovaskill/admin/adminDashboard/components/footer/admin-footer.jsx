import { useEffect, useState } from 'react';
import Dashboard from '../../dashboard/dashboard';
import './admin-footer.css';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import AXX from '../../../../routes/axios';
import Animation from '../../../../loading ani/loading';


function AdminFooter(){
    const [up , setUp]= useState();

    const [trainData , setTrainData] = useState([]);
    const [serviceData , setServiceData] = useState([]);

    const [train , setTrain] = useState({
        trainingTitle:'',
        trainingLink:""
    })

    const [service , setService] = useState({
        serviceTitle:'',
        serviceLink:""
    })

    const storeValue = (ele , key) => {
        if(key == 'train'){
            setTrain({...train,[ele.target.name]:ele.target.value})
        }
        else{
            setService({...service, [ele.target.name]:ele.target.value})
        }
    }

    const post = (key) => {

        if(key == 'train'){

            if(train.trainingTitle == "" || train.trainingLink == "" ){
                toast.error('enter training both fields')
                console.log('train2')
            }

        else{

            AXX.post("admin/postTrain" , train)
            .then((res)=>{console.log(res.data);toast.success('training posted');setUp(res)})
            .catch((err)=>{console.log(err)})

            setTrain({
                trainingLink:'',
                trainingTitle:""
            });
            }

        }

        else{

            if(service.serviceLink == "" || service.serviceTitle == ""){
                toast.error('enter service both fields')
            }

        else{
                AXX.post("admin/postService" , service)
                .then((res)=>{console.log(res.data);toast.success('service posted');setUp(res)})
                .catch((err)=>{console.log(err)});

                setService({
                    serviceTitle:"",
                    serviceLink:""
                });
            }

        }

    }

    const deleteObj= (del) => {

        if(window.confirm('are you want to delete')){
            AXX.delete(`admin/${del}`)
            .then((res)=>{console.log(res.data) ; setUp(res) ; toast.success('data deleted')})
            .catch((err)=>{console.log(err)})
        }
        else{
            toast('it was not deleted')
        }

    }

    useEffect(()=>{

        AXX.get('admin/getTrain')
        .then((res)=>{console.log(res.data);setTrainData(res.data.data)})
        .catch((err)=>{console.log(err)})

        AXX.get('admin/getService')
        .then((res)=>{console.log(res.data);setServiceData(res.data.data)})
        .catch((err)=>{console.log(err)})

    },[ train , service , up])

    console.log(serviceData);

    return(<>
    <Dashboard/>
    {/* <Animation/> */}
    <div className='container admin-footer-main '>
        <div className='col-12'>

            <table className='table table-bordered'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th className='col-1 text-center'>S No</th>
                        <th className='col-3'>Title</th>
                        <th className='col-3'>link Name</th>
                        <th className='col-2'>Edit</th>
                    </tr>
                </thead>
                <tr>
                    <td colSpan={4} className='text-center'>    <h3>Training</h3>  </td>
                </tr>
                <tbody className='admin-train'>
                    {trainData.map((train,i)=>{
                        return(<>
                                <tr>
                                    <td>{i+1}</td>
                                    <td>{train.trainingTitle}</td>
                                    <td>{train.trainingLink}</td>
                                    <td className='d-flex justify-content-evenly align-items-center footer-train-edit'>
                                        <Link to={'/footer-update'} state={{train}} className='py-1 px-3' > Update </Link>
                                        <button onClick={()=>deleteObj('deleteTrain?_id='+train._id)} className='py-1 px-3'> Delete </button>
                                    </td>
                                </tr>
                        </>)
                    })}
                </tbody>
                <tbody className='admin-service'>
                <tr>
                    <td colSpan={4} className='text-center'> <h3>Service</h3> </td>
                </tr>
                    {serviceData.map((service,i)=>{
                        return(<>
                            <tr>
                                <td className='text-center'>{i+1}</td>
                                <td>{service.serviceTitle}</td>
                                <td>{service.serviceLink}</td>
                                <td className='d-flex justify-content-evenly align-items-center footer-service-edit'>
                                    <Link to={'/footer-update'} state={{service}} className='py-1 px-3'> Update </Link>
                                    <button onClick={()=>deleteObj('deleteService?_id='+service._id)} className='py-1 px-3'> Delete </button>
                                </td>
                            </tr>
                        </>)
                    })}
                </tbody>
            </table>

        </div>
        <div className='row'>
            <h1> Training Domain </h1>
            <div className='col'>
                <input type='text' name='trainingTitle' placeholder='Training Title' onChange={(e)=>storeValue(e,"train")} value={train.trainingTitle}/>
                <input type='text' name='trainingLink' placeholder='Training Link' onChange={(e)=>storeValue(e,"train")} value={train.trainingLink}/>
                <button onClick={()=>post("train")}> Submit </button>
            </div>
        </div>
        <div className='row'>
            <h1> Service Domain </h1>
            <div className='col'>
                <input type='text' name='serviceTitle' placeholder='Service Title' onChange={storeValue} value={service.serviceTitle}/>
                <input type='text' name='serviceLink' placeholder='Service Link' onChange={storeValue} value={service.serviceLink}/>
                <button onClick={post}> Submit </button>
            </div>
        </div>
    </div>

    </>)
}
export default AdminFooter;
