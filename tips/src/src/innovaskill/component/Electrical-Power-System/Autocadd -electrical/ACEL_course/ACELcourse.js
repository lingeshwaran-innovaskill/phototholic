


import './ACELcourse.css';



export default function ACELcourse () {
    return(

        <div className='container-fluid'>
        <div className="ccna_syllabusfullsection row" id="ccna_syllabusfullsection">
        <h1 className="ccna_syllabus">Course Module Syllabus :</h1>
        <section className="ccna_section3" id="ccna_section3">
        
          <div className="ccna_Introduction  ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary> AutoCAD</summary>
              <section className="ccna_Introduction_section ">

               <div className='row' >

                <div className='col-lg-6 col-md-6 '>
                  <b>Training Content</b> 

                    <ul>
                  <li>Introduction about AutoCAD</li>
                  <li>Introduction to Engineering drawings</li>
                  <li>Exploring GUI</li>
                  <li>Workspaces</li>
                  <li>Angle of Projection</li>
                  <li>Co-ordinate system</li>
                  <li>Types of Co-ordinate system</li>
                  <li>File management:
                      <ul>
                          <li>New</li>
                          <li>QNew</li>
                          <li>Open</li>
                          <li>Save</li>
                          <li>Save as</li>
                          <li>Close</li>
                          <li>Exit</li>
                          <li>Qui</li>
                      </ul>
                  </li>
                  <li>Draft Settings:
                      <ul>
                          <li>Grid mode</li>
                          <li>Snap mode</li>
                          <li>Ortho mode</li>
                          <li>Polar Tracking</li>
                          <li>Object Snap</li>
                          <li>Object Snap Tracking</li>
                          <li>Dynamic Input</li>
                      </ul>
                  </li>
                  <li>Drawing Tools:
                      <ul>
                          <li>Line</li>
                          <li>Circle</li>
                          <li>Arc</li>
                          <li>Ellipse</li>
                          <li>Donut</li>
                          <li>Polygon</li>
                          <li>Rectangle</li>
                      </ul>
                  </li>
                  <li>Introduction about AutoCAD Electrical</li>
                  <li>Application of AutoCAD Electrical</li>
                  <li>AutoCAD Electrical vs. AutoCAD</li>
                  
                  </ul>
                  
                  </div>


                  <div className='col-lg-6 col-md-6 '>
                    <ul>
                    <li>Projects
                      <ul>
                          <li>Introduction to Project Manager</li>
                          <li>Creating an AutoCAD Electrical project</li>
                          <li>Working with projects</li>
                          <li>Copy a Project</li>
                          <li>Delete a Project</li>
                          <li>Project Properties</li>
                      </ul>
                  </li>
                  <li>Drawing
                      <ul>
                          <li>Creating a new drawing</li>
                          <li>Adding a Drawing</li>
                          <li>Add active drawing</li>
                          <li>Removing a Drawing</li>
                          <li>Grouping Drawings with Projects</li>
                          <li>Drawing Properties</li>
                      </ul>
                  </li>
                  <li>Inserting Multiple Components</li>
                  <li>Symbol Builder</li>
                  <li>Wires</li>
                  <li>Circuit Builder:
                      <ul>
                          <li>Inserting a one-line Motor Circuit</li>
                          <li>Inserting a Dual one – Line Power Feed Circuit</li>
                          <li>Copy Circuit</li>
                          <li>Move Circuit</li>
                          <li>Save circuit to icon menu</li>
                          <li>Generate PLC layout modules</li>
                      </ul>
                  </li>
                  <li>Panel Layout</li>
                  <li>Schematic vs. Panel</li>
                  <li>Creating a Panel layout</li>
                  <li>Audit
                      <ul>
                          <li>Electrical Audit</li>
                          <li>Drawing Audit</li>
                      </ul>
                  </li>
                  <li>Generating Reports:
                      <ul>
                          <li>Types of Schematic reports</li>
                          <li>Generate a schematic report</li>
                          <li>Inserting BOM tables into drawings</li>
                          <li>Editing BOM to Drawings</li>
                      </ul>
                  </li>
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