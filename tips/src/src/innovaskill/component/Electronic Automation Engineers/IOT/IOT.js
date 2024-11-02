import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";


import IOThome from "./IOT_home/IOThome.js";
import IOTcourse from "./IOT_course/IOTcourse.js";
import Navigation from "../../../nav/navigation.jsx";
import Navigation1 from "../../../nav/navigation12.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function IOT(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < IOThome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < IOTcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
