import React from "react";

import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
import Footer from "../../../footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";

import MATLABcourse from "./MATLAB_course/MATLABcourse.js";
import MATLABhome from "./MATLAB_home/MATLABhome.js";
import Navigation from "../../../nav/navigation.jsx";



export default function MATLAB(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < MATLABhome />

    < Kidswhychoose  />

    < MATLABcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}