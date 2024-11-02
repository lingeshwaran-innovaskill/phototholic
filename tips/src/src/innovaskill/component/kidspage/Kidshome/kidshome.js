import React from "react";
import './kidshome.css';
import blog_kidsimage from "../kids_images/fullstack_sec1image.avif";

import { GiArchiveResearch } from "react-icons/gi";
import AnimatedButton from "../../../AnimatedButton";


export default function Kidshome () {
  return (

    <div className="container-fluid" >
    <div className="kidsholepage" >


      <div className="kids_section1 row">
        <div className="kids_sec1div1 col-12 col-sm-12 col-md-12 col-lg-9">
          <h1>Kids Keep Learning</h1>
          <br />
          <h3> Kids’ Keep Learning</h3>
          <p>
          Innova for champs’ programme will always finds new and creative ways to get our students excited to learn. Kids champions can join this programming adventure and become talented developers who is capable of writing codes in minutes. We are offering those kinds of learning which every parent wish to give their kids - The brilliant mixture of graphics, games and tech wonders. Enjoyable and organized sessions for fundamental structures, modules, functions & coding etc
          </p>
          <h1>Why Innovaskill for Young champs?</h1>
          
          <li><GiArchiveResearch className="GiArchiveResearch" style={{ color: 'yellow', size: '50px' }}/>Visual appealing and practical sessions given by Innova expert trainers which helps students to learn from basics and builds fundamental logical skills.</li>
          <li><GiArchiveResearch className="GiArchiveResearch"  style={{ color: 'yellow', size: '50px' }}/>Games and fun programs to motivate kids and extends the passions for coding on kids beyond the walls of their   schools.</li>
          <li><GiArchiveResearch className="GiArchiveResearch" style={{ color: 'yellow', size: '50px' }}/>Learning through the methods of graphics and apps makes the students more engaging and helps to impart valuable job skills on students.</li>
          <li><GiArchiveResearch className="GiArchiveResearch" style={{ color: 'yellow', size: '50px' }}/>Courseware’s with colourful illustration and catchy notes along with store lines creates deep interest on students.</li>
          <li><GiArchiveResearch className="GiArchiveResearch" style={{ color: 'yellow', size: '50px' }}/>Brain storming sessions and awards along with playful exercises will make the students more creative and develop their insights about tech wonders.</li>
          <li><GiArchiveResearch className="GiArchiveResearch" style={{ color: 'yellow', size: '50px' }}/>Dedicated faculties who will give one to one attention to students for imparting the skills from basics and supports them for experimenting new ideas.</li>
          <li><GiArchiveResearch className="GiArchiveResearch" style={{ color: 'yellow', size: '50px' }}/>Daily exercise and application oriented real time learning makes the students more engageable and successful.</li>
          <li><GiArchiveResearch className="GiArchiveResearch" style={{ color: 'yellow', size: '50px' }}  />Supports kids to learn the widely used programming language through unique examples and programming puzzles.</li>

        </div>

        <div className="kids_sec1div2 col-12 col-sm-10 col-md-8 col-lg-3 ">
          <img src={blog_kidsimage} className="kids_kidsimage img-fluid"></img>
          <br />
          <br />

          <p  className="fsd_sec1div2para">Course Name</p>
          <p>
            <span>Kids Keep Learning</span>
          </p>
          <hr />
          <p className="fsd_sec1div2para">No.of Student Enrolled</p>
          <p>
            <span>250+ Students</span>
          </p>
          <hr />
          <p>Course Duration</p>
          <p className="fsd_sec1div2para">
            <span>1-Months / 2-Months / 3-Months</span>
          </p>
          <hr />
          {/* <p>Mode Of Traning</p>
          <p>
            <span>Online / Offline</span>
          </p>
          <hr /> */}
          <br />
          <div className="AnimatedButton">

            <AnimatedButton/>

            </div>
        </div>


      </div>
      </div>
      </div>
    
  );
}
