import React from "react";




import Merndreamjob from "../../Full-Stack-development/MERN_Stackcourse/MERNdreamjob/Merndreamjob.js";
import Merncertificate from "../../Full-Stack-development/MERN_Stackcourse/MERNcertificate/Merncertificate.js";
import Footer from "../../../footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";


import AEShome from "./AES_home/AEShome.js";
import AEScourse from "./AES_course/AEScourse.js";
import Navigation from "../../../nav/navigation.jsx";
import Navigation1 from "../../../nav/navigation12.jsx";



export default function AES() {
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < AEShome />


    < Kidswhychoose  />

    < AEScourse />
      
    < Merndreamjob />
        
    < Merncertificate />  

    < Footer />

    </div>
  );
}
