import React from "react";
import "./kidswhychoose.css";

import OneToOnetraining from "../kids_images/3.png";
import Personalizedattention from '../kids_images/8.png';
import onlineoffline from '../kids_images/4.png';
import flexibledate from '../kids_images/5.png';
import Weekdays from '../kids_images/6.png';
import Unlimitedinterviews from '../kids_images/7.png';
import { Link } from "react-router-dom";





export default function Kidswhychoose () {
  return (
    
    <div className="kids_section2">
      <h2 id="kids_whychoose">
        Why to Choose &nbsp;
        <Link to={"/"}>Innovaskill ?</Link>
      </h2>
      <br />
      <section className="container-fluid">

        <div className="row">

        <div className="kids_sec2div  col col-sm-12 col-md-4 col-lg-2 ">
          <img src={OneToOnetraining} width={150} height={150} />
          <br />
          <b>
            One-To-One training
          </b>
        </div>

        <div className="kids_sec2div  col col-sm-12 col-md-4 col-lg-2 ">
          <img src={Personalizedattention} width={150} height={150} />
          <br />
          <b>Personalized attention</b>
        </div>

        <div className="kids_sec2div  col col-sm-12 col-md-4 col-lg-2 ">
          <img src={flexibledate} width={150} height={150} />
          <br />
          <b>Flexible date and timing</b>
        </div>

        <div className="kids_sec2div  col col-sm-12 col-md-4 col-lg-2 ">
          <img src={onlineoffline} width={150} height={150} />
          <br />
          <b>Available both online/offline</b>
        </div>

        <div className="kids_sec2div  col col-sm-12 col-md-4 col-lg-2 ">
          <img src={Weekdays} width={150} height={150} />
          <br />
          <b>Weekdays and weekend classes</b>
        </div>

        <div className="kids_sec2div  col col-sm-12 col-md-4 col-lg-2 ">
          <img src={Unlimitedinterviews} width={150} height={150} />
          <br />
          <b>Unlimited interviews until get placed</b>
        </div>

        </div>
      </section>
      {/* <section className="fsd_syllabusfullsection">
       
        </section> */}
     
        
      
    </div>
  );
}
