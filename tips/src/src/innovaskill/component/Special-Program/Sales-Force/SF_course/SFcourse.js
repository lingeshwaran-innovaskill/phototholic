


import './SFcourse.css';



export default function SFcourse () {
    return(

        <div className='container-fluid'>
        <div className="ccna_syllabusfullsection row" id="ccna_syllabusfullsection">
        <h1 className="ccna_syllabus">Course Module Syllabus :</h1>
        <section className="ccna_section3" id="ccna_section3">
        
          <div className="ccna_Introduction  ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary>Introduction</summary>
              <section className="ccna_Introduction_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6 '>
                  <b> Introduction</b> 

                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                 
                  <li>Introduction to CRM</li>
                  <li>Overview of cloud computing</li>
                  <li>Introduction to Salesforce CRM</li>
                  <li>History of Salesforce</li>
                  <li>Different cloud services</li>
                  <li>Creating Salesforce Developer edition account</li>
                  <li>Explanation of predefined things in Salesforce org</li>
                    </ul>

                </div>
 
                </div>

              </section>
            </details>
          </div>


          <div className="ccna_Fundamentals">
            <details>
              <summary>Configuration and Customization </summary>
              <section className="ccna_Fundamentals_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Configuration and Customization  </b>
                  <ul>

                  <li>App in Salesforce</li>
                  <li>Creating a custom app & adding tabs</li>
                  <li>Object and types of objects in Salesforce</li>
                  <li>Creating a custom object</li>
                  <li>Fields and data types</li>
                  <li>Creating custom fields</li>
                  <li>Field tracking and deleting field</li>
                  <li>Global picklist</li>
                  <li>Field dependency</li>
                  <li>Validation rules</li>
                  <li>Formula field</li>
                  <li>Page layout</li>
                  <li>Standard features in Salesforce</li>
                  <li>Standard objects</li>
                  <li>Sales Cloud</li>
                  <li>Service Cloud</li>
                  <li>Lead conversion</li>
                  <li>Lead assignment rules</li>
                  <li>Web to lead</li>
                  <li>Auto response rules</li>
                  <li>Email to case</li>
                  <li>Chatter</li>
                  <li>Email to chatter</li>
                  <li>Reports and types of reports</li>
                  <li>Custom report types</li>
                  <li>Bucket field</li>
                  <li>Dashboards</li>
                  <li>Relationships in Salesforce and its types</li>
                  <li>Schema builder</li>
                  <li>Outbound messages</li>
                  <li>Record types</li>
                  
                  </ul>  

                  
                </div>

               
                </div>

        </section>
            </details>
          </div>


          <div className="CCNA_NetworkAccess">
            <details>
              <summary>Data access and security</summary>
              <section className="CCNA_NetworkAccess_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b> Data access and security </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                 
                  <li>Internal security</li>
                  <li>External security</li>
                  <li>Creating and managing users</li>
                  <li>Profile</li>
                  <li>OWD (Organization-Wide Defaults)</li>
                  <li>Role hierarchies</li>
                  <li>Sharing rules</li>
                  <li>Manual sharing</li>
                  <li>Field-level security</li>
                  </ul>

                </div>
                </div>

                </section>
              </details>
          </div>


          <div className="ccna_Connectivity" >
            <details>
              <summary>Process Automation </summary>
              <section className="ccna_Connectivity_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Process Automation </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Process Builder</li>
                  <li>Workflow rules</li>
                  <li>Flows</li>
                  <li>Approval process</li>
                  <li>Case escalation rules</li>
                  <li>Roll-up summary fields</li>
                  
                  </ul>
                 
                </div>
                </div>

                </section>
              </details>
          </div>


          <div className="ccna_Connectivity" >
            <details>
              <summary>Data management  </summary>
              <section className="ccna_Connectivity_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Data management </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Import / export data</li>
                  <li>Data Loader</li>
                  <li>Update, upsert, and delete operations</li>
                  <li>OAuth</li>
                  
                  </ul>
                 
                </div>
                </div>

                </section>
              </details>
          </div>


          <div className="ccna_Connectivity" >
            <details>
              <summary>Development</summary>
              <section className="ccna_Connectivity_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Development</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Apex Programming Language</li>
                  <li>Batch Apex</li>
                  <li>Logic Control and Looping Statements</li>
                  <li>Collections in Salesforce</li>
                  <li>Data Types</li>
                  <li>Apex Triggers</li>
                  <li>Test Classes</li>
                  <li>SOQL (Salesforce Object Query Language)</li>
                  <li>SOSL (Salesforce Object Search Language)</li>
                  <li>Relationship Queries</li>
                  <li>Visualforce Pages</li>
                  <li>DML Statements</li>
                  <li>Governor Limits</li>
                  <li>Relationship queries</li>
                  
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