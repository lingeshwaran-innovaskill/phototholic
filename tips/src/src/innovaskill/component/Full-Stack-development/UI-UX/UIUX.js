import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";
import Footer from "../../../footer/footer.jsx";

import UIUXhome from "./UIUX_home/UIUXhome.js";
import UIUXcourse from "./UIUX_course/UIUXcourse.js";
import Navigation from "../../../nav/navigation.jsx";

// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function UIUX(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < UIUXhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < UIUXcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
