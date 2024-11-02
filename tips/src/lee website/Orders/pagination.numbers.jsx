import { useState } from "react";


function Pagination({totalOrders , feedPerPage , paginate}){

    let total = [];

    const [activePage , setActivePage] = useState(1)

    for(let i = 1 ; i <= Math.ceil(totalOrders / feedPerPage) ; i++){
        total.push(i)
    }

    const handleClick  = (number) => {
        setActivePage(number)
        paginate(number)
    }

    return (<>
    <div className="numbers">

        {total.map((number)=>{
            return<>
            <a style={{cursor:"pointer"}} onClick={()=>handleClick(number)}>    {number}    </a>
            </>
        })}

    </div>
    </>);
}
export default Pagination;