import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Order.css';
// import { Navigate } from "react-router-dom";

import bg from './rose.jpg';
import OrderPagination from "./order.pagination";
import Pagination from "./pagination.numbers";
import TRANSFER from "../axx/axios";


function Order() {

    const [orders , setOrders ] = useState([]);

    // pagination

    const [currentFeed , setCurrentFeed] = useState(1);       //
    const [feedPerPage , setFeedPerPage] = useState(2);       //

    useEffect(()=>{

    TRANSFER.get('orders/getOrder',orders)
    .then(res  => setOrders(res.data.orderData))
    .catch(err => console.log(err))

    },[])

    const lastFeed    = currentFeed * feedPerPage;     // 2 * 2 = 4
    const firstFeed   = lastFeed - feedPerPage;       // 4 - 2 = 2
    const currentPage = orders.slice(firstFeed , lastFeed);

    const paginate = (pageNumber) => setCurrentFeed(pageNumber);

    return ( <>

    <div className="order-main">
        <img src={bg} />
    <div className="main-head" data-aos ="fade-in" data-aos-duration='600'>

    <div className="order-title">

    <h1 id="head-title"> Your Order's </h1>

    </div>

    </div>

    <div className="order-body">

{ ( orders.length !== 0 ) ?

<div className="order-content">

    <OrderPagination orders={currentPage} setOrders={setOrders}/>
    <Pagination feedPerPage={feedPerPage} totalOrders={orders.length}  paginate={paginate}/>

<div className="order-exit">
<Link to={'/home'}> Back to Home  </Link>
</div>

</div>

:

<div className="order-exit">
<Link to={'/home'}> Back to Home  </Link>
</div>

}
    </div>
    </div>

    </> );
}
export default Order;