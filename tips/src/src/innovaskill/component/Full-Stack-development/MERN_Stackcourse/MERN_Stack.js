import React from "react";
// import "./MERN_Stack.css";
// import fullstackimage from "./Images_MERN/fullstack_sec1image.avif";
// import OneToOnetraining from "./Images_MERN/3.png";
// import Personalizedattention from "./Images_MERN/8.png";
// import onlineoffline from "./Images_MERN/4.png";
// import flexibledate from "./Images_MERN/5.png";
// import Weekdays from "./Images_MERN/6.png";
// import Unlimitedinterviews from "./Images_MERN/7.png";
// import GettingYourDreamJob from "./Images_MERN/BANNER DESIGN.svg"
// import AnimatedButton from './MERNhome/MERN_animationbutton.js';



import companylogo from "./Images_MERN/COLLEGE MoU.png";
import OurStudentWorkingCompanies from "./Images_MERN/PLACEMENT.png";
// import course_certificate from "./Images_MERN/COURSE COMPLETION.png";
// import internship_certificate from "./Images_MERN/INTERNSHIP.png";
import Mernhome from "./MERNhome/Mernhome.js";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";
import Merncourse from "./MERNcourse/Merncourse.js";
import Merndreamjob from "./MERNdreamjob/Merndreamjob.js";
import Merncertificate from "./MERNcertificate/Merncertificate.js";
// import Footer from "./footer/footer.jsx";
import Footer from "../../../footer/footer.jsx";

import Navigation from "../../../nav/navigation.jsx";
// import Kidswhychoose from "../kidspage/Kidswhychoose/kidswhychoose.js";
// import workshop_certificate from "./Images_MERN/certificate_sample.jpg";



export default function Mernstack(){
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < Mernhome />

    {/* < Mernwhychoose /> */}

    < Kidswhychoose  />

    < Merncourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
