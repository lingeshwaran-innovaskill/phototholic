// import ear from './images/bud.avif';
// import Slipper from './images/sliper.webp';
// import acces from './images/acces.avif';
// import girls from './images/kurthi.jpeg';
import './web.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Thewebsite({datas , add ,length}){

    const Linkcart=useNavigate();

    const [search,setSearch]=useState('');

    const[filterdList,setFilterdList] = useState(datas);

    const filterByType = (filterdData) => {
    if(!search){
    return filterdData;
    }
    else{
    const  filtering = filterdData.filter((e)=>e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    return filtering;
    }
}

useEffect(()=>{
    setFilterdList(filterByType(datas));
},[search])

return(
        <>
         <div id="maindiv">
            <div className="header">
                <h1>Shop !t</h1>
                <div id='topnav'>
                <input type="text" placeholder="Search"  value={search} onChange={(e)=>setSearch(e.target.value)}/>
             <i  class="fa-solid fa-store" onClick={()=>Linkcart("/cart")}><sup>{length==0?'':length}</sup></i>
                </div>
            </div>
        <div id='bodydiv'>
            <div className='body'>
                {filterdList.map((e)=>{
                    return(
                        <>
                        <div className='obj1'>
                             <img src={e.img} alt='error'/>
                             <h2>{e.name}</h2>
                             <button onClick={()=>add(e)}>Add Cart</button>
                             <p>${e.amount}/-</p>
                        </div>
                        </>)
                })}
            </div>
        </div>
        </div>
        </>
    )
}
export default Thewebsite;
