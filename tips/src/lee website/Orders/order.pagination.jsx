import axios from "axios";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";


function OrderPagination({orders , setOrders}){


    function delOrder(id){

        axios.delete(`http://127.0.0.1:5555/leePhotoholic/api/orders/deleteOrder?_id=${id}`, orders ,{
            headers:{
                "Content-Type":"application/json"
            }
        }).then(res => {setOrders((del) => del.filter(d => d._id != id)) ; console.log(res)})
        .catch(err => console.log(err))

    console.log(id);

    }

    

    return ( <>

{orders.map((d) => {

        return(<>

            <div className="order-div" data-aos="fade-right" data-aos-duration="800">

                <div className="order-title-1">
                <Link to={'/update'} state={{d}} className="update"> <i class="fa-solid fa-pencil" > </i> </Link>
                <h1>{d.Category}</h1>
                <i class="fa-solid fa-trash-can" onClick={()=>delOrder(d._id)}></i>
                </div>

                <div className="order-details">
                <h2> Name : <i> {d.clientName} -</i> {d.clientNumber}</h2> 
                </div>

                <h4> Address : {d.clientAddress}</h4>

            </div>

        </>)
    })}
        </>);
    }

export default OrderPagination;