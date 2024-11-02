import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";

import Javahome from "./Java_home/Javahome.js";
import Javacourse from "./Java_course/Javacourse.js";
import Navigation from "../../../nav/navigation.jsx";

export default function Java(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < Javahome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < Javacourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
