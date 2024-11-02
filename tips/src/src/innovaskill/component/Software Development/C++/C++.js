import React from "react";



import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
// import Footer from "../../Full-Stack-development/MERN_Stackcourse/footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";

import Cplusecourse from "./C++_course/C++course.js";
import Cplusehome from "./C++_home/C++home.js"
import Navigation from "../../../nav/navigation.jsx";


export default function Cpluse(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < Cplusehome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < Cplusecourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
