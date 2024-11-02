
import AnimatedButton from "../../../../AnimatedButton";
import fullstackimage from "../Images_Java/17.png";
import './Javahome.css';
// import './MERN_animationbutton.css';




export default function Javahome () {
  return (

    <div className='container-fluid'>
      <div className="java_section1 row ">

        <div className="java_sec1div1 col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
          <div>
            <h1 > Java programming</h1>
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

          <section className="java_modulesection row  p-0 m-0">
            {/* <div className='row'> */}
            
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <li>
              </li><a href="#java_syllabusfullsection">Module1 : Introduction</a>
              <li>
                <a href="#java_syllabusfullsection">Module2 : Introduction to Java Programming Environment</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module3 : Fundamentals of Java Programming</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module4 : Control Structures</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module5 : Input Fundamentals and Datatypes In Java</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module6 : Object-Oriented Programming </a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module7 : Command-Line Arguments</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module8 : Integrated Development Environment</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module9 : Inner Class</a>
              </li>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <li>
                <a href="#java_syllabusfullsection">Module10 : Inheritance</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module11 : Abstract Classes and Inheritance</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module12 : Polymorphism</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module13 : Package</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module14 : Using Predefined Package & Other Classes</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module15 : New Concepts In Package</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module16 : Garbage Collection</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module17 : Exception Handling</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module18 : Multithreading</a>
              </li>
              <li>
                <a href="#java_syllabusfullsection">Module19 : Input and Output Streams</a>
              </li>
            </div>

            {/* </div> */}

          </section><br />
        </div>


        <div className="java_sec1div2 col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3">
          <img src={fullstackimage} className="fullsatckimage img-fluid"></img>

          <div className='java_sec1div2sub_div'>
            
          <p className="java_sec1div2para" >Course Name</p>
          <span>C++ programming</span>
          <hr />

          <p className="java_sec1div2para">No.of Student Enrolled</p>
          <span>500+ Students</span>
          <hr />

          <p className="java_sec1div2para">Course Duration</p>
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



