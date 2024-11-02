import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../../dashboard/dashboard";
import { toast } from "react-hot-toast";
import AXX from "../../../../routes/axios";

function UpdateNav(){

    const location = useLocation();
    const navigate = useNavigate();

    const [ saveUpNav , setSaveUpNav ] = useState();

    const [ navUpdate , setNavUpdate ] = useState([]);

    const navAdd = (ind) => {
        const updatedNestedData = [...navUpdate]; 
        updatedNestedData[ind].more.push({ navName: '', linkPage: "" ,hrefLink :""});
        setNavUpdate(updatedNestedData);
    };

    // const updateNav = (index , key , value) =>{
    //     const updatedNestedData = [...navUpdate];
    //     updatedNestedData[index].key = value;
    //     setNavUpdate(updatedNestedData);
    // }

    const updateNavMore = (index , subindex , key , value) => {
        const updatedNestedData = [...navUpdate];
        updatedNestedData[index].more[subindex][key] = value;
        setNavUpdate(updatedNestedData);
        // console.log(index,subindex,key,value);
    }

    const delObj = (mainindex , subindex) => {
        const deleteObj = [...navUpdate];
        deleteObj[mainindex].more.splice(subindex,subindex);
        setNavUpdate(deleteObj);
    }

    useEffect(()=>{

        if(location.state.e){
            setNavUpdate([location.state.e])
        }
        else{
            setNavUpdate([location.state.nav])
        }

    },[])

    const formSubmit = async(e) => {

        if(location.state.e){

            await AXX.put(`admin/updateTraining?_id=${location.state.e._id}` , navUpdate[0])
            .then( (res) => {console.log('axios post',res.data);
                toast.success('updated');
                // navigate(-1)
            }).catch( (err) => {console.log(err);
                toast.error('failed')
            })

        }

        else{

            await AXX.put(`admin/navUpdate?_id=${location.state.nav._id}` , navUpdate[0])
            .then( (res) => {console.log("axios",res.data);
                toast.success('updated');
                // navigate(-1)
            }).catch( (err) => {console.log(err);
                toast.error('failed')
            })

        }

    }

    console.log(navUpdate);
    console.log("demo",saveUpNav);

    return(<>

    <Dashboard/>

   
    <div className="container admin-nav-update">

        <div className="row nav-update-back d-flex justify-content-end align-items-end my-3">
            <div className="col-1 d-flex justify-content-center align-items-center">
                <Link to={-1} className="py-1 px-3"> Back </Link>
            </div>
        </div>

        <div className="row">

            <div className="col">
                <table className="table table-borderd">
                    <thead className="bg-primary text-white py-3 px-1">
                        <th>S No</th>
                        <th>Title</th>
                        <th>Hreflink</th>
                        <th>Linkpage</th>
                        <th>Edit</th>
                    </thead>
                    <tbody>
                    {navUpdate.map( (u,ind) => {
                    return(<>
                    <tr>
                        <td>Head</td>
                        <td>
                        <input type="text" name={u.navName}
                        onChange={(e) => { let updatedNestedData = [...navUpdate];
                        updatedNestedData[ind].navName = e.target.value;
                        setNavUpdate(updatedNestedData)}  } placeholder="navName" value={u.navName}/>
                        </td>

                        <td>
                        <input type="text" name={u.hrefLink}
                        onChange={(e) => { let updatedNested = [...navUpdate];
                        updatedNested[ind].hrefLink = e.target.value;
                        setNavUpdate(updatedNested)} } placeholder="hrefLink" value={u.hrefLink}/> 
                        </td>

                        <td>
                        <input type="text" name={u.linkPage}
                        onChange={ (e) => { let updatedNestedDa = [...navUpdate];
                        updatedNestedDa[ind].linkPage = e.target.value;
                        setNavUpdate(updatedNestedDa)} } placeholder="linkPage" value={u.linkPage}/>
                        </td>
                    </tr>

                       {u.more.map((m , sub)=>{
                            return(<>
                            
                            {/* {u.more.lenght == 1 ? "" :   */}

                                <tr>
                                    <td>{sub+1}</td>
                                    <td>
                                        <input type="text" name={u.navName} placeholder="navName" onChange={(e) => updateNavMore(ind,sub,"navName",e.target.value)} value={m.navName}/>
                                </td>
                                <td>
                                        <input type="text" name={u.hrefLink} placeholder="hrefLink" onChange={(e) => updateNavMore(ind,sub,"hrefLink",e.target.value)} value={m.hrefLink}/>
                                </td>
                                <td>
                                        <input type="text" name={u.linkPage} placeholder="linkPage" onChange={(e) => updateNavMore(ind,sub,"linkPage",e.target.value)} value={m.linkPage}/>
                                </td>
                                <td>
                                        <button onClick={()=>delObj(ind,sub)}> Del Obj </button>
                                    </td>
                                </tr>
                            {/* } */}
                            </>)
                        })}
  

                        <button onClick={()=>navAdd(ind)}> Add Item  </button>

                    </>)
                    })}
                    </tbody>
                    
                </table>
               

                <button onClick={formSubmit}> Submit </button>

            </div>

        </div>

    </div>
    </>)
}
export default UpdateNav;
