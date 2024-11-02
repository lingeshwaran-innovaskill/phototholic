import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";


import ETAPcourse from "./ETAP_course/ETAPcourse.js";
import ETAPhome from "./ETAP_home/ETAPhome.js";
import Navigation from "../../../nav/navigation.jsx";
import Footer from "../../../footer/footer.jsx";
import Navigation1 from "../../../nav/navigation12.jsx";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function ETAP() {
  return (
    <div className="fsd_mern ">
      
      <Navigation/>
    

    < ETAPhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < ETAPcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
