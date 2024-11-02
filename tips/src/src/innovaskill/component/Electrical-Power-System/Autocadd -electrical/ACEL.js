import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer  from '../../../footer/footer.jsx'; 
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";


import ACELcourse from "./ACEL_course/ACELcourse.js";
import ACELhome from "./ACEL_home/ACELhome.js";
import Navigation from "../../../nav/navigation.jsx";
import Navigation1 from "../../../nav/navigation12.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function ACEL() {
  return (
    <div className="fsd_mern ">
      
      <Navigation/>

    < ACELhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < ACELcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
