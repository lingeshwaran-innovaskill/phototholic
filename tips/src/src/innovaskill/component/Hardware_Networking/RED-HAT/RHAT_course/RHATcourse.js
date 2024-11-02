


import './RHATcourse.css';



export default function RHATcourse () {
    return(

        <div className='container-fluid'>
        <div className="ccna_syllabusfullsection row" id="ccna_syllabusfullsection">
        <h1 className="ccna_syllabus">Course Module Syllabus :</h1>
        <section className="ccna_section3" id="ccna_section3">
        
          <div className="ccna_Introduction  ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary>RHCSA</summary>
              <section className="ccna_Introduction_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6 '>
                  <b>RH124 SYSTEM ADMINISTRATOR -1</b> 

                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                 
                  <li>Accessing the Command Line</li>
                  <li>Managing Files from the Command Line</li>
                  <li>Getting Help in Red Hat Enterprise Linux</li>
                  <li>Creating Viewing and Editing Text Files</li>
                  <li>Manage Local Linux Users and Groups</li>
                  <li>Controlling Access to Files with Linux File-system Permissions</li>
                  <li>Monitoring and Managing Linux Processes</li>
                  <li>Controlling Services and Daemons</li>
                  <li>Configuring And Securing Open-SSH Service</li>
                  <li>Analyzing and Storing Logs</li>
                  <li>Managing RHEL Networking</li>
                  <li>Archiving and Copying Files between Systems</li>
                  <li>Installing and Updating Software Packages</li>
                  <li>Accessing Linux File-systems</li>
                  <li>Using Virtualized Systems</li>

                  </ul>

                </div>
 
                </div>

              </section>
            </details>
          </div>


          <div className="ccna_Fundamentals">
            <details>
              <summary> RHCSA </summary>
              <section className="ccna_Fundamentals_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>RH134 SYSTEM ADMINISTRATOR -II </b>
                  <ul>

                  <li>Automating Installation with Kickstart</li>
                  <li>Using Regular Expressions with grep</li>
                  <li>Creating and Editing Text files with vim</li>
                  <li>Scheduling Future Linux Tasks</li>
                  <li>Managing Priority of Linux Processes</li>
                  <li>Controlling Access to Files with Access Control Lists (ACL)</li>
                  <li>Managing SELinux Security</li>
                  <li>Connecting to Network-Defined Users and Groups</li>
                  <li>Adding Disks Partitions and File Systems to a Linux System</li>
                  <li>Managing Logical Volume Management (LVM) Storage</li>
                  <li>Accessing Network Attached Storage with Network File System (NFS)</li>
                  <li>Accessing Network Storage with SMB</li>
                  <li>Controlling and Troubleshooting the Red Hat Enterprise Linux Boot Process</li>
                  <li>Limiting Network Communication with Firewalled</li>
                  <li>Comprehensive Review</li>

                  </ul>  

                  
                </div>

               
                </div>

        </section>
            </details>
          </div>


          <div className="CCNA_NetworkAccess">
            <details>
              <summary>RHCE (AS1 & AS2)</summary>
              <section className="CCNA_NetworkAccess_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b> H255 SYSTEM ADMINISTRATOR -III  </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Getting started with the classroom environment</li>
                  <li>Enhance user security</li>
                  <li>Bash scripting and tools</li>
                  <li>File security with GnuPG</li>
                  <li>Software management</li>
                  <li>Bash scripting and tools</li>
                  <li>Route network traffic</li>
                  <li>Secure network traffic</li>
                  <li>NTP server configuration</li>
                  <li>File systems and logs</li>
                  <li>Centralized and secure storage</li>
                  <li>SSL-encapsulated web services</li>
                  <li>Web server additional configuration</li>
                  <li>Basic SMTP configuration</li>
                  <li>Caching-only DNS server</li>
                  <li>File sharing with NFS</li>
                  <li>File sharing with CIFS</li>
                  <li>File sharing with FTP</li>
                  <li>Troubleshooting boot process</li>
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