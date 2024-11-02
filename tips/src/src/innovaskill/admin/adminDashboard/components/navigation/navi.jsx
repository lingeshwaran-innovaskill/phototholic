import './navi.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCommentsDollar } from 'react-icons/fa';
import Dashboard from '../../dashboard/dashboard';
import { toast } from "react-hot-toast";
import { Link } from 'react-router-dom';
import AXX from '../../../../routes/axios';

// const NestedArrayForm = () => {
//   const [nestedData, setNestedData] = useState([{ name: '', items: [{ itemName: '', quantity: 0 }] }]);
//   const [savedData, setSavedData] = useState([]);

//   console.log(nestedData);
//   console.log(savedData);

//   const handleAddNestedItem = (index) => {
//     const updatedNestedData = [...nestedData];
//     updatedNestedData[index].items.push({ itemName: '', quantity: 0 });
//     setNestedData(updatedNestedData);
//   };

//   const handleAddNestedData = () => {
//     setNestedData([...nestedData, { name: '', items: [{ itemName: '', quantity: 0 }] }]);
//   };

//   const handleChange = (index, subIndex, key, value) => {
//     const updatedNestedData = [...nestedData];
//     updatedNestedData[index].items[subIndex][key] = value;
//     setNestedData(updatedNestedData);
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://127.0.0.1:1234/api/nestedData', nestedData);
//       console.log(response.data);
//       setSavedData(response.data.data); // Save the data to state after successful submission
//     } catch (error) {
//       console.error('Error posting data:', error);
//     }
//   };

//   return (
//     <div>
//     <Dashboard/>

//       {nestedData.map((data, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             value={data.name}
//             onChange={(e) => {
//               const updatedNestedData = [...nestedData];
//               updatedNestedData[index].name = e.target.value;
//               setNestedData(updatedNestedData);
//             }}
//           />
//           {data.items.map((item, subIndex) => (
//             <div key={subIndex}>
//               <input
//                 type="text"
//                 value={item.itemName}
//                 onChange={(e) => handleChange(index, subIndex, 'itemName', e.target.value)}
//               />
//               <input
//                 type="text"
//                 value={item.quantity}
//                 onChange={(e) => handleChange(index, subIndex, 'quantity', e.target.value)}
//               />
//             </div>
//           ))}
//           <button onClick={() => handleAddNestedItem(index)}>Add Item</button>
//         </div>
//       ))}
//       <button onClick={handleAddNestedData}>Add Nested Data</button>
//       <button onClick={handleSubmit}>Submit</button>

//       {/* Display saved data */}
//       <h2>Saved Data:</h2>
//       <ul>
//         {nestedData.map((data, index) => (
//           <li key={index}>
//             <strong>{data.name}</strong>:
//             <ul>
//               {data.items.map((item, subIndex) => (
//                 <li key={subIndex}>
//                   {item.itemName} - {item.quantity}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//       <Demo/>
//     </div>
//   );
// };

// export default NestedArrayForm;

function UpdatePage(){

  const [ del , setDel ] = useState();
  const [ post , setPost ] = useState();

  const [ gettingNav , setGettingNav ] = useState([]);

  const [ arrayObj , setarrayObj ] = useState({
      navName:"",
      linkPage:"",
      hrefLink:"",
      more:[]
  })

  const [addressmain , setAddressMain ] = useState([])

  const [ address , setAddress ] = useState([{
      navName:'',
      linkPage:"",
      hrefLink:""
  }])

    const inpvalue = (e) => {
        setarrayObj({...arrayObj , [e.target.name] : e.target.value })
    }

    const add = (e) =>{
        setAddress({...address , [e.target.name] : e.target.value})
    }

    const pushItem = async()=>{

      setarrayObj({...arrayObj , ['more'] : [...addressmain] })
      setAddressMain( [ ...addressmain ,  address ] )

      await setAddress({
          navName:"",
          linkPage:""
      })

    }

    // const store = () => {

    //   axios.post('http://127.0.0.1:1234/innovaskill/api/admin/navPost', arrayObj , {
    //     headers:{
    //       "Content-Type":"application/json"
    //     }
    //   }).then((res)=>{console.log(res.data) ;
    //     toast.success('data posted');
    //     setPost(res.data);
    //    })
    //   .catch((err)=>{console.log(err);
    //     toast.error('failed')
    //   })

    // }

    const [ trainNav , setTrainNav ] = useState([]);

    const [ trainPost , setTrainPost ] = useState([{
      navName:'',
      hrefLink:"",
      linkPage:"",
      more:[
        {
          navName:"",
          linkPage:""
        }
      ]
    }]);

    const setTrainValue = ( main , sub , title , value ) => {
      let storingValue = [...trainPost]
      storingValue[main].more[sub][title] = value;
      setTrainPost(storingValue);
    }

    const addObj = (main) => {
      let addObj = [...trainPost];
      addObj[main].more.push({navName:"",linkPage:""})
      setTrainPost(addObj);
    }

    const trainDelobj =(main,sub)=>{
      let delObj = [...trainPost];
      delObj[main].more.splice(sub,sub);
      setTrainPost(delObj);
    }

    const store = async(api , data ) => {

      AXX.post(`admin/${api}`, data)
      .then((res)=>{console.log(res.data.data) ;
        toast.success('data posted');
        setPost(res.data);
       })
      .catch((err)=>{console.log(err);
        toast.error('failed')
      })

     await setTrainPost([{
        navName:'',
        more:[
          {
            navName:"",
            linkPage:""
          }
        ]
      }])

    }

    const deleteItem = (e) => {

      if(window.confirm('are you want to delete')){

        AXX.delete(`admin/${e}`)
        .then( (res) => {console.log(res.data);
          toast.success('data deleted');
          setDel(res.data)
        })
        .catch( (err) => {console.log(err) ;
          toast.error('failed')
        })

      }

      else{
        toast('data not deleted');
      }

    }

    useEffect(()=>{

     AXX.get('admin/navGet')
     .then( (res) => {console.log(res.data) ; setGettingNav(res.data.data) } )
     .catch( (err) => {console.log(err) })

     AXX.get('admin/getTraining')
     .then( (res) => {console.log(res.data) ; setTrainNav([{...trainNav , ["navName"] : "Training" , 'more' : res.data.data}]) })
     .catch( (err) => {console.log(err) })

    },[del , arrayObj , post])

    const submit = (e) =>{
        e.preventDefault();
    }

    return(<>

    <Dashboard/>

    <div className="container admin-navigation ">

      <div className="row my-5">

          <table className="table table-bordered">
            <thead className=' bg-primary text-white'>
              <tr className=' text-center'>
                <th> S no </th>
                <th> Title </th>
                <th> Site Name </th>
                <th> Links </th>
                <th> HrefLink </th>
                <th> Edit </th>
              </tr>
            </thead>
            <tbody>

              {gettingNav.map((nav , i)=>{
                return(<>

                  { (nav.more.length == 0) ?

                      <tr>
                          <td className='text-center bg-dark text-white'>{i+1}</td>
                          <td>NA</td>
                          <td>{nav.navName}</td>
                          <td>{nav.linkPage ? nav.linkPage : "NA"}</td>
                          <td>{nav.hrefLink ? nav.hrefLink : "NA"}</td>
                          <td className='d-flex edit justify-content-evenly align-items-center'>
                          <Link to={'/nav-update'} state={{nav}} className='mx-2 px-3'> Update </Link>
                          <button onClick={()=>deleteItem(`navDelete?_id=${nav._id}`)} className='mx-2  px-3'> Delete </button> </td>
                      </tr>

                    :
                      <>
                        <tr>
                          <td rowSpan={nav.more.length+1} className='text-center bg-dark text-white'>{i+1}</td>
                          <td rowSpan={nav.more.length+1}>{nav.navName}</td>
                        </tr>
                        {nav.more.map((e)=>{
                          return(<>
                          <tr>
                            <td>{ e.navName }</td>
                            <td>{ e.linkPage ? e.linkPage : "NA" }</td>
                            <td>{ e.hrefLink ? e.hrefLink : "NA" }</td>
                            <td className='d-flex edit justify-content-evenly align-items-center'>
                            <Link to={'/nav-update'} state={{nav}} className='mx-2  px-3'> Update </Link>
                            <button onClick={()=>deleteItem(`navDelete?_id=${nav._id}`)} className='mx-2 px-3'> Delete </button>
                            </td>
                          </tr>
                          </>)
                        })}
                      </>
                  }

                </>)
              })}

            </tbody>
          </table>

          <table className="table table-bordered">
            <thead className=' bg-primary text-white'>
              <tr className=' text-center'>
                <th> S no </th>
                <th> MainTitle </th>
                <th> Title </th>
                <th> Site Name </th>
                <th> Links </th>
                <th> Edit </th>
              </tr>
            </thead>
            <tbody>
              {trainNav.map((nav , i)=>{
                return(<>
                        <tr>
                          <td rowSpan={70} className='text-center bg-dark text-white'>{i+1}</td>
                          <td rowSpan={70} >{nav.navName}</td>
                        </tr>
                        {nav.more.map((e)=>{
                          return(<>
                          <tr>
                            <td rowSpan={e.more.length+1}>{e.navName}</td>
                          </tr>
                          {e.more.map((f)=>{
                            return(<>
                                <tr>
                                  <td>{f.navName}</td>
                                  <td>{f.linkPage}</td>
                                  <td className='d-flex edit justify-content-evenly align-items-center'>
                                  <Link to={'/nav-update'} state={{e}} className='mx-2  px-3'> Update </Link>
                                  <button onClick={()=>deleteItem(`deleteTraining?_id=${e._id}`)} className='mx-2 px-3'> Delete </button>
                                  </td>
                                </tr>
                            </>)
                          })}
                          </>)
                        })}
                  </>)
                })}
            </tbody>
          </table>

      </div>

      <div className="row">

        <form onSubmit={submit}>
            <input type='text' name='navName' placeholder='name'   onChange={inpvalue} value={arrayObj.navName}/>
            <input type='text' name='linkPage' placeholder='linkPage'   onChange={inpvalue} value={arrayObj.linkPage}/>
            <input type='text' name='hrefLink' placeholder='hrefLink'   onChange={inpvalue} value={arrayObj.hrefLink}/>
            <input type='text' name='navName' placeholder='name' onChange={add} value={address.navName}/>
            <input type='text' name='linkPage' placeholder='linkPage'  onChange={add} value={address.linkPage}/>
            <input type='text' name='hrefLink' placeholder='hrefLink'  onChange={add} value={address.hrefLink}/>
            <button onClick={pushItem}> Add item </button>
            <button onClick={()=>store('navPost',arrayObj)}> nav post </button>
        </form>
  
      </div>

      <div className='row'>

        <h1> Training Datas </h1>

        <table className='table table-bordered my-5'>
          <thead>
            <tr>
              <th>S no</th>
              <th>Title</th>
              <th>linkPage</th>
              <th>del</th>
            </tr>
          </thead>
          <tbody>

          {trainPost.map((ele,main)=>{
          return(<>
          <tr>

            <td>{main+1}</td>

            <td colSpan={3}>
              <input type='text' name={ele.navName} placeholder='heading' onChange={(e)=>{
                let valueStore = [...trainPost] 
                valueStore[main].navName = e.target.value
                setTrainPost(valueStore)
              }} value={ele.navName} />
            </td>

          </tr>
            {ele.more.map((subEle,sub)=>{
              return(<>
              <tr>
                <td>{sub+1}</td>
                <td>
                  <input type='text' placeholder='navName' name={subEle.navName} onChange={(e)=>setTrainValue( main , sub , 'navName' , e.target.value )} value={subEle.navName}/>
                </td>
                <td>
                  <input type='text' placeholder='linkPage' name={subEle.linkPage} onChange={(e)=>setTrainValue( main , sub , 'linkPage' , e.target.value )} value={subEle.linkPage}/>
                </td>
                <td>
                  <button onClick={()=>trainDelobj(main,sub)}> delObj </button>
                </td>
              </tr>
              </>)
            })}
            <button onClick={()=>addObj(main)}> Add Item </button>
          </>)
          })}

          </tbody>
        </table>

        <div className="col-12 d-flex justify-content-center">
        <button onClick={()=>store('navPost',trainPost)}> nav post </button>
          <button onClick={()=>store('training',trainPost)}> train post </button>
        </div>
 
      </div>

    </div>

    
    </>)
}

export default UpdatePage;