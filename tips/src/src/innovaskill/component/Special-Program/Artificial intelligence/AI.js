import React from "react";



import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";

import AIhome from "./AI_home/AIhome.js";
import AIcourse from "./AI_course/AIcourse.js";
import Navigation from "../../../nav/navigation.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function AI(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < AIhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < AIcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
