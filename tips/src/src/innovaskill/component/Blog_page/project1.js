import React from "react";
import Embedded from "./blog_image/t3.jpg"
import "./project.css";


function project1 (){
    return(
        <>
         <div className="blogproject_div">
    
            <div className="blogproject_div_1">
                <h1>Diploma in Embedded</h1>
                <p>
                An Embedded System is simply a combination of computer hardware and software, either fixed in operability or programmable, which is designed to perform a specific function. It is called an embedded system because it is embedded in a much complex device to control, enhance or assist the operation of that device. Take, for example, any latest car. The automatic transmission, GPS navigation, sun roof, radio, anti-lock brakes inside the car are all embedded systems.<br/><br/>
                An Embedded System is simply a combination of computer hardware and software, either fixed in operability or programmable, which is designed to perform a specific function. It is called an embedded system because it is embedded in a much complex device to control, enhance or assist the operation of that device. Take, for example, any latest car. The automatic transmission, GPS navigation, sun roof, radio, anti-lock brakes inside the car are all embedded systems.
                </p>
            </div>

            <div className="blogproject_div_2">
                <img src={Embedded} className="blog_projectimg"></img>
            </div>
         </div>
        </>
    )


}
export default project1;