
import AnimatedButton from "../../../../AnimatedButton";
import fullstackimage from "../Images_MERN/22.png";
import './Mernhome.css';
// import './MERN_animationbutton.css';




export default function Mernhome() {
  return (

    <div className='container-fluid'>
      <div className="fsd_section1 row ">

        <div className="fsd_sec1div1 col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
          <div>
            <h1 >MERN Full Stack Develpment</h1>
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

          <section className="fsd_modulesection row p-0 m-0">
            {/* <div className='row'> */}
            
            <div>
              <li className="col-12 col-sm-12 col-md-6 col-lg-6">
                <a href="#fsd_syllabusfullsection">Module1 : Html</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module2 : Css</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module3 : Bootsrap</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module4 : Javascript</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module5 : Ecmascript</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module6 : Jquary</a>
              </li>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <li>
                <a href="#fsd_syllabusfullsection">Module7 : ReactJS</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module8 : Github</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module9 : MongoDB</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module10 : NodeJS</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module11 : ExpressJS</a>
              </li>
              <li>
                <a href="#fsd_syllabusfullsection">Module12 : Project Using MERN</a>
              </li>
            </div>

            {/* </div> */}

          </section><br />
        </div>


        <div className="fsd_sec1div2 col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3">
          <img src={fullstackimage} className="fullsatckimage img-fluid"></img>

          <div className='fsd_sec1div2sub_div'>
            
          <p className="fsd_sec1div2para" >Course Name</p>
          <span>MERN Full-Stack Development</span>
          <hr />

          <p className="fsd_sec1div2para">No.of Student Enrolled</p>
          <span>500+ Students</span>
          <hr />

          <p className="fsd_sec1div2para">Course Duration</p>
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



