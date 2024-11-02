import React from "react";



import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";

import ATcourse from "./AT_course/ATcourse.js";
import AThome from "./AT_home/AThome.js";
import Navigation from "../../../nav/navigation.jsx";

// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function AT(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < AThome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < ATcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
