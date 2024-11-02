
import AnimatedButton from "../../../../AnimatedButton";
import fullstackimage from "../Images_C++/16.png";
import './C++home.css';
// import './MERN_animationbutton.css';




export default function Cplusehome () {
  return (

    <div className='container-fluid'>
      <div className="cpluse_section1 row ">

        <div className="cpluse_sec1div1 col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
          <div>
            <h1 >C++ programming</h1>
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

          <section className="cpluse_modulesection row p-0 m-0">
            {/* <div className='row'> */}
            
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <li>
              </li><a href="#cpluse_syllabusfullsection">Module1 : Object Oriented Programming Principles</a>
              <li>
                <a href="#cpluse_syllabusfullsection">Module2 : Introduction C++</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module3 : Basic Programming</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module4 : Control Statements</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module5 : Arrays</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module6 : Functions</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module7 : Object OrientedProgramming</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module8 : Function Overloading</a>
              </li>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              
              <li>
                <a href="#cpluse_syllabusfullsection">Module9 : Operator Overloading</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module10 : Constructors & Destructors</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module11 : Friend Function & Friend classes</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module12 : Inheritance</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module13 : Virtual Functions & Abstract Classes</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module14 : Templates</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module15 : I/O Streams & Files</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module16 : Formatted IO</a>
              </li>
              <li>
                <a href="#cpluse_syllabusfullsection">Module17 : Exception Handling</a>
              </li>
            </div>

            {/* </div> */}

          </section><br />
        </div>


        <div className="cpluse_sec1div2 col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3">
          <img src={fullstackimage} className="fullsatckimage img-fluid"></img>

          <div className='cpluse_sec1div2sub_div'>
            
          <p className="cpluse_sec1div2para" >Course Name</p>
          <span>C++ programming</span>
          <hr />

          <p className="cpluse_sec1div2para">No.of Student Enrolled</p>
          <span>500+ Students</span>
          <hr />

          <p className="cpluse_sec1div2para">Course Duration</p>
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



