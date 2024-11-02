import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";


import DATAAYhome from "./DATAAY_home/DATAAYhome.js";
import DATAAYcourse from "./DATAAY_course/DATAAYcourse.js";
import Navigation from "../../../nav/navigation.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function DATAAY(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < DATAAYhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < DATAAYcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
