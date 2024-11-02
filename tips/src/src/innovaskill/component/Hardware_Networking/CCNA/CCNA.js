import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";
import Footer from "../../../footer/footer.jsx";

import CCNAcourse from "./CCNA_course/CCNAcourse.js";
import CCNAhome from "./CCNA_home/CCNAhome.js";
import Navigation from "../../../nav/navigation.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function CCNA(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < CCNAhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < CCNAcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
