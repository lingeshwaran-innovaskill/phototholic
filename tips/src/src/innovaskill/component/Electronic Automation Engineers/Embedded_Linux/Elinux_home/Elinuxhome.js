
import AnimatedButton from "../../../../AnimatedButton";
import fullstackimage from "../Images_Elinux/3 (1).png";
import './Elinuxhome.css';
// import './MERN_animationbutton.css';





export default function Elinuxhome() {
  return (

    <div className='container-fluid p-0'>
      <div className="embed_section1 row  m-sm-0 m-md-0 m-lg-0">

        <div className="embed_sec1div1 col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 ">
          <div>

            <h1 >Embedded Linux</h1>

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

          <section className="Embed_modulesection row  p-0 m-0">
            {/* <div className='row'> */}
            
            <div  className="col-12 col-sm-12 col-md-6 col-lg-6">
              <li>
                <a href="#Elinux_syllabusfullsection">Module1 : Introduction to Linux Operating System</a>
              </li>
              <li>
                <a href="#Elinux_syllabusfullsection">Module2 : Project Based on Embedded Linux</a>
              </li>
              
         
            </div>

           
            {/* </div> */}

          </section><br />
        </div>

        <div className="embed_sec1div2 col-12 col-sm-10 col-md-8 col-lg-3 col-xl-3">
          <img src={fullstackimage} className="fullsatckimage img-fluid"></img>

          <div className='embed_sec1div2sub_div'>
            
          <p className="embed_sec1div2para" >Course Name</p>
          <span>Embedded Linux</span>
          <hr />

          <p className="embed_sec1div2para">No.of Student Enrolled</p>
          <span>500+ Students</span>
          <hr />

          <p className="embed_sec1div2para">Course Duration</p>
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



