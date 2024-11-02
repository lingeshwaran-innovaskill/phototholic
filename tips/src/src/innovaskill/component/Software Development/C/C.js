import React from "react";



import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";
import Footer from "../../../footer/footer.jsx";


import Chome from "./C_home/Chome.js";
import Ccourse from "./C_course/Ccourse.js";
import Navigation from "../../../nav/navigation.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function C(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < Chome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < Ccourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
