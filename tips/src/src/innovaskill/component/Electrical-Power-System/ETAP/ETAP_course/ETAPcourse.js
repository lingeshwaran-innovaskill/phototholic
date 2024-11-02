


import './ETAPcourse.css';



export default function ETAPcourse () {
    return(

        <div className='container-fluid'>
        <div className="ccna_syllabusfullsection row" id="ccna_syllabusfullsection">
        <h1 className="ccna_syllabus">Course Module Syllabus :</h1>
        <section className="ccna_section3" id="ccna_section3">
        
          <div className="ccna_Introduction  ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary> Introduction to Networking </summary>
              <section className="ccna_Introduction_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6 '>
                  <b>Training Content</b> 

                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>

                  <li>Load Flow Analysis</li>
                  <li>Short Circuit Analysis</li>
                  <li>Cable Sizing</li>
                  <li>Power Factor Improvement</li>
                  <li>Generator Load Sharing</li>
                  <li>Transformer Sizing</li>
                  <li>Motor Dynamic Acceleration & Starting</li>
                  <li>Transient Analysis</li>
                  <li>Relay Coordination / Start Protective Device Coordination</li>
                  <li>Harmonic Analysis</li>
                  <li>Contingency Analysis</li>
                  <li>Arc Flash Analysis</li>
                  <li>Time Domain Load Flow</li>
                  <li>Unbalanced Load Flow</li>
                  <li>Grid Tied PV</li>
                  <li>Wind Generator / Turbine</li>
                  <li>Optimal Power Flow</li>
                  <li>Optimal Capacitor Placement</li>
                  <li>Cable Pulling</li>
                  <li>Battery Sizing</li>

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