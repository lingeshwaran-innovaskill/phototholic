
import AnimatedButton from "../../../../AnimatedButton";
import fullstackimage from "../Images_AWS/14.png"
import './AWShome.css';
// import './MERN_animationbutton.css';




export default function AWShome() {
  return (

    <div className='container-fluid'>
      <div className="AWS_section1 row ">

        <div className="AWS_sec1div1 col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
          <div>
            <h1> AWS</h1>
            <h3>Course Objectives:</h3>
            <p className=''>
              A Full Stack Development course aims to equip students with a
              comprehensive understanding of front-end and back-end web
              technologies, including HTML, CSS, JavaScript, and popular
              frameworks like React or Angular for creating dynamic user
              interfaces. Students also learn server-side programming languages
              such as Node.js or Python, database management using SQL and NoSQL
              databases, and API development for seamless communication between
              front-end and back-end systems.
            </p>
          </div>

          <div>
            <h1>Who can Enroll ?</h1>
            <p>
              While it is possible to become a full stack developer without formal
              training, most people who enter this field have at least a
              bachelor's degree in computer science or a related field. However,
              anyone interested in Tech Career can become a full stack developer
              by learning various programming languages and frameworks.
            </p>
          </div>

          <h1>Course Module :</h1>

          <section className="AWS_modulesection row  p-0 m-0">
            {/* <div className='row'> */}
            
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <li>
                <a href="#AWS_syllabusfullsection">Module1 : Introduction In Cloud Computing & Aws</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module2 : Elastic Cloud Computing (Ec2)</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module3 : Amazon Management Image(AMI)</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module4 : Security & Identity Services </a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module5 : Network & Security</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module6 : Amazon Virtual Private Cloud (VPC)</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module7 : S3  Storage(simple Space Storage)</a>
              </li>
            
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
            
              <li>
                <a href="#AWS_syllabusfullsection">Module8 : Relational Data Base (RDS)</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module9 : Simple Notification Service (SNS)</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module10 : Auto Scaling</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module11 : Route53</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module12 : Dynamo DB</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module13 : Aws Lambadas</a>
              </li>
              <li>
                <a href="#AWS_syllabusfullsection">Module14 : Aws Lambadas</a>
              </li>
              
            </div>

            {/* </div> */}

          </section><br />
        </div>


        <div className="AWS_sec1div2 col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3">
          <img src={fullstackimage} className="fullsatckimage img-fluid"></img>

          <div className='AWS_sec1div2sub_div'>
            
          <p className="AWS_sec1div2para" >Course Name</p>
          <span>AWS</span>
          <hr />

          <p className="AWS_sec1div2para">No.of Student Enrolled</p>
          <span>500+ Students</span>
          <hr />

          <p className="AWS_sec1div2para">Course Duration</p>
          <span>6-Months</span>
          <hr />
          </div>

          {/* <p className="fsd_sec1div2para">Mode</p>
          <span>Online / Offline</span>
          <hr /> */}


          {/* <a href='/enquiry-form'><button className="animated-button">
            Free Demo</button>
          </a>

          <a href='/enquiry-form'><button className="animated-button">
            Free Demo
          </button></a> */}
          <div className="AnimatedButton">

              <AnimatedButton/>
              
          </div>
         
        </div>

      </div>
    </div>

  );
};



