


import './UIUXcourse.css';



export default function UIUXcourse () {
    return(

        <div className='container-fluid'>
        <div className="uiux_syllabusfullsection row" id="uiux_syllabusfullsection">
        <h1 className="uiux_syllabus">Course Module Syllabus :</h1>
        <section className="uiux_section3" id="uiux_section3">
        

          <div className="uiux_UXResearch ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary> UX Research </summary>
              <section className="uiux_UXResearch_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6 '>
                  <b>Training Content</b> 

                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                 
                  <li>UX Fundamentals</li>
                  <li>Business Requirement Gathering</li>
                  <li>User Research</li>
                  <li>User interview Techniques</li>

                  </ul>

                </div>
 
                </div>

              </section>
            </details>
          </div>


          <div className="uiux_UITools">
            <details>
              <summary>UI Tools</summary>
              <section className="uiux_UITools_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Training content</b>
                  <ul>

                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Illustrator</li>
                  <li>Miro Board & more</li>
                  
                  </ul>  
                
                </div>
       
                </div>

        </section>
            </details>
          </div>


          <div className="uiux_UXPsychology ">
            <details>
              <summary>UX Psychology </summary>
              <section className="uiux_UXPsychology_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b> Training Content </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Heuristics Principles</li>
                  <li>UX Laws</li>
                  <li>UX Case Studies</li>
                  <li>Minimalism and Maximalism</li>
                  <li>Cognitive Bias</li>

                  </ul>
                </div>
                </div>

                </section>
              </details>
          </div>


          <div className="uiux_UserInteraction" >
            <details>
              <summary>User Interaction</summary>
              <section className="uiux_UserInteraction_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>User Interaction</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Typography</li>
                  <li>Color Theory</li>
                  <li>Navigation</li>
                  <li>Gestalt Principles</li>
                  <li>UI Principles</li>
                  <li>Design Systems</li>
                  <li>Grid Lines</li>
                  <li>Responsive System</li>
                  <li>Prototyping</li>
                  <li>Wireframes</li>
                  <li>UI Screens</li>

                  </ul>
                  
                 
                </div>
                </div>

                </section>
              </details>
          </div>


        </section>
        </div>

        </div>
    )
}