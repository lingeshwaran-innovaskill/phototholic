

import course_certificate from "../Images_Embed/COURSE COMPLETION.png";
import internship_certificate from "../Images_Embed/INTERNSHIP.png";
import companylogo from "../Images_Embed/COLLEGE MoU.png";
import OurStudentWorkingCompanies from "../Images_Embed/PLACEMENT.png";

import './Embedcertificate.css'


export default function Embedcertificate() {

    return(

        <div>
          <div className="Merncertificate container-fluid">

            <div className="row">
            <section className="fsd_section5 col-sm-12 col-md-12 col-lg-12">
              <h1>Innovaskill Technologies In Association with :</h1><br/>
            <div>
              <img src={companylogo} className="img-fluid" />
            </div>
            </section>
            </div>

            <div className="row">
            <section className="fsd_section6 col-sm-12 col-md-12 col-lg-12">
              <h1>Our Clients / Our Student Working Companies :</h1>
              <img src={OurStudentWorkingCompanies} className="img-fluid"></img>
            </section>
            </div>

            
            <h1 className="fsd_section7h1">Innovaskill Certification :</h1>
            <section className="fsd_section7  row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h3>Course Complete Certificate</h3>
                <img src={course_certificate} className="fsd_section7img1 img-fluid "></img>
              </div>
              <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <h3>Internship Certificate</h3>
                <img src={internship_certificate} className="fsd_section7img2 img-fluid"></img>
              </div>
            </section>
          </div>
        </div>
    )
}