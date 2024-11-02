


import './MTcourse.css';



export default function MTcourse () {
    return(

        <div className='container-fluid'>
        <div className="MT_syllabusfullsection row" id="MT_syllabusfullsection">
        <h1 className="MT_syllabus">Course Module Syllabus :</h1>
        <section className="MT_section3 " id="MT_section3 ">
        
          <div className="MT_Introduction  ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary>Introduction </summary>
              <section className="MT_Introduction_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6 '>
                  <b>Software Testing Introduction</b> 

                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                     
                     <li>What is testing? </li>
                     <li>Importance of testing </li>
                     <li>Roles and Responsibilities </li>
                     <li>Principles of software testing</li>
                     <li>What is Quality? </li>
                     <li>How much testing is enough? </li>
                     <li>Differences between Manual and Automation Testing</li>
                    
                    </ul>

                </div>
 
                </div>

              </section>
            </details>
          </div>


          <div className="MT_SDLCPhases">
            <details>
              <summary>SDLC Phases</summary>
              <section className="MT_SDLCPhases_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>SDLC Phases</b>

                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Requirements Phase</li>
                  <li>Analysis Phase</li>
                  <li>Design phase</li>
                  <li>Coding Phase</li>
                  <li>Testing phase</li>
                  <li>Delivery and Maintenance Phase</li>
                  </ul>  
                </div>

                </div>

        </section>
            </details>
          </div>


          <div className="MT_SDLCModels">
            <details>
              <summary>SDLC Models</summary>
              <section className="MT_SDLCModels_section">

                <div className='row'>
                <div>
                  <b> SDLC Models</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  <li>  Waterfall Model</li>
                  <li> V Model</li>
                  <li> Agile Model</li>
                  <li> Prototype Model</li>
                  <li> Spiral Mode</li>
                  
                  </ul>
                </div>
                </div>

                </section>
              </details>
            </div>


          <div className="MT_Methodologies" >
            <details>
              <summary>Software Testing Methodologies </summary>
              <section className="MT_Methodologies_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Training Content</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>White Box Testing</li>
                  <li>Black Box Testing</li>
                  <li>Black Box Testing</li>

                  </ul>
                  
                 
                </div>
                </div>

                </section>
              </details>
            </div>


          <div className="MT_DesignTechniques" >
            <details>
              <summary>Test Case Design Techniques</summary>
              <section className="MT_DesignTechniques_section">

                <div className='row'>
                <b>Test Case Design Techniques</b>
                <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                 <li>Static Techniques:</li>
                 <ul>
                 <li>Informal Reviews</li>
                 <li>Walkthroughs</li>
                 <li>Technical Reviews</li>
                 <li>Inspection</li>
                 </ul>
                 <li>Dynamic Techniques:</li>
                 <ul>
                  <ul>
                 <li>Structural Techniques </li>
                 <li>Statement Coverage Testing </li>
                 <li>Branch Coverage Testing </li>
                 <li>Path Coverage Testing</li>
                 <li>Conditional Coverage Testing </li>
                 <li>Loop Coverage Testing </li>
                 </ul>
                 <li>Black Box Techniques </li>
                 <ul>
                 <li> Boundary Value Analysis</li>
                 <li>Equivalence Class Partition</li>
                 <li>State Transition Technique </li>
                 <li>Cause Effective Graph </li>
                 <li>Decision Table </li>
                 <li>Use Case Testing</li>
                 </ul>
                 <li>Experienced Based Techniques:</li>
                 <ul>
                 <li>Error guessing</li>
                 <li>Exploratory testing</li>
                 </ul>
                 </ul>
                  </ul>
                  
                </div>

              </section>
            </details>
          </div>


          <div className="MT_LevelsofTesting" >
            <details>
              <summary>Levels of Testing</summary>
              <section className="MT_LevelsofTesting_section">


                <div className='row'>
                  <b>Functional Testing </b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Unit Testing </li>
                  <li> Integration Testing </li>
                  <li>System Testing</li>
                  <li>User Acceptance Testing</li>
                  <li>Sanity/Smoke Testing</li>
                  <li>Regression Test</li>
                  <li>Retest</li>
                  </ul>

                  <b>Non-Functional Testing </b>
                  <ul>
                  <li>Performance Testing</li>
                  <li>Memory Test</li>
                  <li>Scalability Testing</li>
                  <li>Compatibility Testing</li>
                  <li>Security Testing</li>
                  <li>Cookies Testing</li>
                  <li>Session Testing</li>
                  <li>Recovery Testing</li>
                  <li>Installation Testing</li>
                  <li>Adhoc Testing</li>
                  <li>Risk Based Testing</li>
                  <li>I18N Testing</li>
                  <li>L1ON Testing</li>
                  <li>Compliance Testing</li>
                  </ul>
                </div>

              </section>
            </details>
          </div>


          <div className="MT_LifeCycle" >
            <details>
              <summary>Software Testing Life Cycle</summary>
              <section className="MT_LifeCycle_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b> Requirements Analysis/Design </b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  <li>Understand the requirements</li>
                  <li>Prepare Traceability Matrix</li>
              
                  </ul>
                  <b>Test Planning</b>
                  <ul>
                  <li>Object</li>
                  <li>Scope of Testing</li>
                  <li>Schedule</li>
                  <li>Approach</li>
                  <li>Roles & Responsibilities</li>
                  <li>Assumptions</li>
                  <li>Risks & Mitigations</li>
                  <li>Entry & Exit Criteria</li>
                  <li>Test Automation</li>
                  <li>Deliverables</li>
                  </ul>
                  
                </div>
                <div className='col-lg-4 col-md-6'>
                  <b>Test Cases Design </b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                    <li>Write Test cases</li>
                    <li>Review Test cases</li>
                    <li>Test Cases Template</li>
                    <li>Types of Test Cases</li>
                    <li>Difference between Test Scenarios and Test Cases</li>
                  </ul>
                  <b>Test Environment setup</b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Understand the SRS</li>
                  <li>Hardware and software requirements</li>
                  <li>Test Data </li>
              
                  </ul>
                  
                </div>
                <div className='col-lg-4 col-md-6'>
                  <b>Test Execution</b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Execute test cases</li>
                  <li>Defect Tracking and Reporting</li>
                  <li>Types of Bugs</li>
                  <li>Identifying the Bugs</li>
                  <li>Bug/Defect Life Cycle</li>
                  <li>Reporting the Bugs</li>
                  <li>Severity and priority </li>
              
                  </ul>

                  <b>Test Closure</b>
                  <ul>
                  <li>Criteria for test closure</li>
                  <li>Test summary report</li>
                  </ul>
                  
                </div>
            
                </div>

              </section>
            </details>
          </div>


          <div className="MT_QAQC" >
            <details>
              <summary>QA & QC & QE</summary>
              <section className="MT_QAQC_section">

                <div className='row'>
                  <b>QA & QC & QE</b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>

                  <li> What is Quality Assurance?</li>
                  <li> What is Quality Control?</li>
                  <li> Differences of QA & QC & Testing</li>
                  
                  </ul>
                </div>

              </section>
            </details>
          </div>


          <div className="MT_SoftwareTestingProject " >
            <details>
              <summary>Software Software Testing Project  </summary>
              <section className="MT_SoftwareTestingProject_section">

                <div className='row'>
                  <b>Software Software Testing Project </b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>

                    <li>Project Introduction</li>
                    <li>Understanding Functional Requirements from FRS</li>
                    <li>Creating Test Scenarios</li>
                    <li>Cresting Test Cases</li>
                    <li>Test Execution</li>
                    <li>Bug Reporting & Tracking</li>
                    <li>Test Sign Off</li>
                 
                  </ul>
                </div>

              </section>
            </details>
          </div>


          <div className="MT_AgileTesting ">
            <details>
              <summary>Agile Testing </summary>
              <section className="MT_AgileTesting_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Agile/Scrum Process</b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>What is Agile</li>
                  <li>What is Scrum /Scrum Team</li>
                  <li>What is Sprint</li>
                  <li>What is User Story</li>
                  <li>How to give Story Points/How to estimate user story</li>
                  <li>What is Definition of Done and Definition Ready</li>
                  <li>Different Sprint Activities</li>
                  <li>Backlog Refinement</li>
                  <li>Sprint Review</li>
                  <li>sprint Retrospective</li>
                  </ul>
           
                </div>

                </div>

              </section>
            </details>
          </div>


          <div className="MT_JiraToo">
            <details>
              <summary>Jira Tool</summary>
              <section className="MT_JiraToo_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>

                  <b>Training Content </b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                    <li>How to Install and Configure Jira tool</li>
                    <li>How to create an EPIC/User Stories in Jira</li>
                    <li>Creating sprints in Jira</li>
                    <li>Sprint Life cycle in Jira</li>
                    <li>Backlogs in Jira</li>
                    <li>Creating Bugs in Jira</li>
                    <li>How to write test cases in JIRA with Zephyr plugin</li>
                    <li>Creating Test Cycles and Executive Test Cases in Jira</li>
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