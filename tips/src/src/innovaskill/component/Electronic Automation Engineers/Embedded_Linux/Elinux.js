import React from "react";

import Elinuxhome from "./Elinux_home/Elinuxhome.js";
// import Elinuxwhychoose from "./Embed_whychoose/Embedwhychoose.js";
import Elinuxcourse from "./Elinux_course/Elinuxcourse.js";



import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
import Footer from "../../../footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";
import Navigation from "../../../nav/navigation.jsx";



export default function Elinux () {
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < Elinuxhome />

    {/* < Embedwhychoose /> */}

    < Kidswhychoose />

    < Elinuxcourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
