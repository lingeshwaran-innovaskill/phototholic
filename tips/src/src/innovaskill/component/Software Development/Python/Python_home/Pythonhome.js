
import AnimatedButton from "../../../../AnimatedButton";
import fullstackimage from "../Images_Python/18.png";
import './Pythonhome.css';
// import './MERN_animationbutton.css';




export default function Phythonhome() {
  return (

    <div className='container-fluid'>
      <div className="python_section1 row ">

        <div className="python_sec1div1 col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
          <div>
            <h1 >Python </h1>
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

          <section className="python_modulesection row p-0 m-0">
            {/* <div className='row'> */}
            
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <li>
                <a href="#python_syllabusfullsection">Module1 : Introduction to Python</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module2 : Installation Process</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module3 : Basic of Python</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module4 : Python Command Line</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module5 : Data Types of Python</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module6 : Operators</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module7 : Control Statements</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module8 : Data Struture in Python</a>
              </li>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              
              <li>
                <a href="#python_syllabusfullsection">Module9 : String</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module10 : List</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module11 : Tuples</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module12 : Dictionary</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module13 : set</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module14 : Python Function</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module15 : Python OOPS</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module16 : Exception handling</a>
              </li>
              <li>
                <a href="#python_syllabusfullsection">Module17 : Files in Python</a>
              </li>
            </div>

            {/* </div> */}

          </section><br />
        </div>


        <div className="python_sec1div2 col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3">
          <img src={fullstackimage} className="fullsatckimage img-fluid"></img>

          <div className='python_sec1div2sub_div'>
            
          <p className="python_sec1div2para" >Course Name</p>
          <span>python </span>
          <hr />

          <p className="python_sec1div2para">No.of Student Enrolled</p>
          <span>500+ Students</span>
          <hr />

          <p className="python_sec1div2para">Course Duration</p>
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



