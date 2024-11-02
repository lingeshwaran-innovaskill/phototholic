
import OneToOnetraining from "../Images_MERN/3.png";
import Personalizedattention from "../Images_MERN/8.png";
import onlineoffline from "../Images_MERN/4.png";
import flexibledate from "../Images_MERN/5.png";
import Weekdays from "../Images_MERN/6.png";
import Unlimitedinterviews from "../Images_MERN/7.png";

import './Mernwhychoose.css';
import { Link } from "react-router-dom";




export default function Mernwhychoose() {
    return(
        <div>
                  
        <section className="fsd_section2" >
        <h1 id="fsd_whychoose">
              Why to Choose &nbsp;
              <Link to={"/"}>Innovaskill ?</Link>
        </h1>
                      <br />
          <div className="container-fluid">
          
            <div className="row " >


            <div className="fsd_sec2div col col-sm-12 col-md-4 col-lg-2 col-xl-2 ps-4 ">
              <img src={OneToOnetraining} className="" />
              <br />
              <b>One-To-One Training</b>
            </div>


            <div className="fsd_sec2div col col-sm-12 col-md-4 col-lg-2 col-xl-2">
              <img src={Personalizedattention}  />
              <br />
              <b>Personalized Attention</b>
            </div>


            <div className="fsd_sec2div col col-sm-12 col-md-4 col-lg-2 col-xl-2">
              <img src={flexibledate} />
              <br />
              <b>Flexible Date and Timing</b>
            </div>


            <div className="fsd_sec2div col col-sm-12 col-md-4 col-lg-2 col-xl-2">
            <img src={onlineoffline} />
            <br />
            <b>Available Both Online/Offline</b>
            </div>


            <div className="fsd_sec2div col col-sm-12 col-md-4 col-lg-2 col-xl-2">
              <img src={Weekdays} />
              <br />
              <b>Weekdays and Weekend Classes</b>
            </div>


            <div className="fsd_sec2div col col-sm-12 col-md-4 col-lg-2 col-xl-2"> 
              <img src={Unlimitedinterviews}  />
              <br />
              <b>Unlimited Interviews <br/>Until Get Placed</b>
            </div>


            </div>

          </div>
        </section>

        </div>
        
    )
} 