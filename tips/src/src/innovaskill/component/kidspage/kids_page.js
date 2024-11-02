import React from "react";
// import "./kids_page.css";


import { GiArchiveResearch } from "react-icons/gi";
import Kidshome from "./Kidshome/kidshome";
import Kidswhychoose from "./Kidswhychoose/kidswhychoose";
import Kidsdreamjob from "./Kidsdreamjob/kidsdreamjob";
import Navigation from "../../nav/navigation";
// import Footer from "../../../footer/footer.jsx";
import Footer from "../../footer/footer";




export default function Kidspage(){
  return (
    <div>
     
     <Navigation/>
     <Kidshome />

     <Kidswhychoose />

     <Kidsdreamjob />

     <Footer/>
    </div>
  );
}
