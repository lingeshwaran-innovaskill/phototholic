import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";

import MTcourse from "./MT_course/MTcourse.js";
import MThome from "./MT_home/MThome.js";
import Navigation from "../../../nav/navigation.jsx";

// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function MT(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < MThome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < MTcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
