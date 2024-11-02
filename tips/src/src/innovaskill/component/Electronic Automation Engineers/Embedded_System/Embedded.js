import React from "react";

import Embedhome from "./Embed_home/Embedhome.js";
import Embedwhychoose from "./Embed_whychoose/Embedwhychoose.js";
import Embedcourse from "./Embed_course/Embedcourse.js";
import Embeddreamjob from "./Embed_dreamjob/Embeddreamjob.js";
import Embedcertificate from "./Embed_certificate/Embedcertificate.js";
import Footer from "../../../footer/footer.jsx";
import Kidswhychoose from "../../kidspage/Kidswhychoose/kidswhychoose.js";
import Navigation from "../../../nav/navigation.jsx";




export default function Embedded() {
  return (
    <div className="fsd_mern ">
      <Navigation/>
    < Embedhome />

    < Kidswhychoose />

    < Embedcourse />
      
    < Embeddreamjob />
        
    < Embedcertificate />  

    < Footer />

    </div>
  );
}


