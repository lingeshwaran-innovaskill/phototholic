
import OneToOnetraining from "../Images_Embed/3.png";
import Personalizedattention from "../Images_Embed/8.png";
import onlineoffline from "../Images_Embed/4.png";
import flexibledate from "../Images_Embed/5.png";
import Weekdays from "../Images_Embed/6.png";
import Unlimitedinterviews from "../Images_Embed/7.png";

import '../../../Full-Stack-development/MERN_Stackcourse/MERNwhychoose/Mernwhychoose.css'



export default function Embedwhychoose() {
    return(
        <div>
                  
        <section className="fsd_section2" >
        <h1 id="fsd_whychoose">
              Why to Did Choose &nbsp;
                <a href="https://www.innovaskill.in/index">Innovaskill ?</a>
          
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