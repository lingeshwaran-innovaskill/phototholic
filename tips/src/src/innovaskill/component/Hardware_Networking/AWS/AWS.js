import React from "react";



import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";
import AWScourse from "./AWS_course/AWScourse.js";
import AWShome from "./AWS_home/AWShome.js";
import Navigation from "../../../nav/navigation.jsx";

// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function AWS(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < AWShome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < AWScourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
