import React from "react";



import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";


// import MAlhome from "./MAL_home/MaLhome.js";
import MaLhome from "./MAL_home/MaLhome.js"
import MALcourse from "./MAL_course/MaLcourse.js";
import Navigation from "../../../nav/navigation.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function MAL(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < MaLhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < MALcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
