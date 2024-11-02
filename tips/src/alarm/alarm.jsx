import { useState } from "react";




function Watch() {

    const [hour,setHour]=useState(['Hour','1','2','3','4','5','6','7','8','9','10','11','12']);

    const [minutes,setMinutes]=useState(['Minutes','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59']);

    const [sec,setSec]=useState([1]);


    return ( <>

    <div className="watch-div">
        <div className="watch-body">

            <h1>StopWatch</h1>
            <h1>00:00:00</h1>

            <div className="options">
                <select>
                    {hour.map((e)=>{
                        return(
                            <option value={e}>{e}</option>
                        )
                    })}
                </select>
                <select>
                    {minutes.map((e)=>{
                        return(
                            <option value={e}>{e}</option>
                        )
                    })}
                </select>
            </div>
        </div>
    </div>
    </>);
}




export default Watch;