

import GettingYourDreamJob from "../Images_MERN/BANNER DESIGN.svg";
import { FaRegCalendarDays } from "react-icons/fa6"


import './Merndreamjob.css';



export default function Merndreamjob()  {

    return(
      
        <div>
        <div className="fsd_section4 container-fluid">
          <div className="row">

          <div className="fsd_section4content col-sm-11 col-md-11 col-lg-5 col-xl-5">
        
            <h1>Getting Your Dream Job Can Be An Exciting And Challenging Journey :</h1>
            <p>By fulfilling these roles and responsibilities, a training institute demonstrates its commitment to student success and contributes to the overall advancement of individuals within their chosen fields. Students should expect to receive comprehensive support and resources that empower them to achieve their educational and career aspirations.
            </p>

            <h1> Innovaskill Technologies provide best opportunities in various sector such as</h1>

                <ul>
                  <li>Electronic Design Automation</li>
                  <li>Industrial Automation</li>
                  <li>Information Security</li>
                  <li>Software Development</li>
                  <li>Civil and Mechanical Design</li>
                  <li>Computerised Accounting</li>
                  <li>Digital Marketing</li>
                  <li>And many more</li>
                </ul>
          
          <p> Innovaskill is eagerly following up the current requirement of each client and noted the uniquenes, so we provide services based on individual needs and requirements for young talents under the umbrella of tech and management profession to provide accurate resolutions. We serves our clients the best to provide customized solutions by considering Clients corporate culture, management style and philosophy. We work for almost all the sectors and our services are available across nation (PAN) For any kind of Manpower Requirements please feel free to reach out to us by filling the details below and we will contact you soon.</p>

          <div className="mern_on_off_div">
              <h1 > Training Mode:  
                  <button className="h4 ps-3">Online / Offline</button>
              </h1>
            </div>


          <div className="schedule  p-col-5 p-sm-5 p-md-5 p-lg-5">
          <h1 className=""> Batch Type: </h1>
          
          <b><FaRegCalendarDays /> Week Days:</b>
























         <p className="ps-sm-4 ps-md-4 ps-lg-4"> Monday To Friday:  3Hours Per Day (1.5 Hours Theory + 1.5 Hours Practical)</p>

          <b> <FaRegCalendarDays /> Week End: </b>
          <p className="ps-sm-4 ps-md-4 ps-lg-4"> Saturday and Sunday:  4Hours Per Day (2 Hours Theory + 2 Hours Practical)</p>

          </div>

          </div>


          <div className="fsd_section4imgdiv col-sm-12 col-md-10 col-lg-6 col-xl-6 pe-lg-5">
          <img src={GettingYourDreamJob} className="img-fluid "></img>
          </div>

          </div>
        </div>
        
        {/* <hr className="fsd_hr"/> */}

        </div>
    )
}