


import './Elinuxcourse.css';



export default function Elinuxcourse () {

    return(

        <div className='container-fluid'>
        <div className="Embed_syllabusfullsection row" id="Elinux_syllabusfullsection">
        <h1 className="Embed_syllabus">Course Module Syllabus :</h1>
        <section className="Embed_section3 m-sm-0 m-md-0 m-lg-0" id="Embed_section3 ">
        
          <div className="Embed_ ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary>Introduction to Linux Operating System</summary>
              <section className="Embed_html_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6'>
                                     
              
                  
                  <b>Introduction to Linux Operating System</b>
                  <ul>
                  <li>
                  (Operating System Services, Why Linux), Different types of Operating System (Monolithic, Microlithic), Linux User Commands, Linux root file system structure, Introduction to GNU Toolchain (GCC Compiler, Make File, GDB), Difference between Native-Compiler and Cross-Compiler
                  </li></ul>

                  <b>Requirements for Building and using the kernel</b>
                  <ul>
                  <li>
                  Retrieving the Kernel Source, Configuring and Building, Installing and Booting from a Kernel, Upgrading a kernel, Customizing a Kernel, Boot loader – Grub Loader, U-Boot, Introduction to Embedded Linux (Generic Architecture of a Embedded Linux, System Start up, Types of Boot Configuration)
                  </li></ul>

                  <b> Root File System Structure, Root file system setup</b>

                  </div>      

                  <div className='col-lg-4 col-md-6'>           
                 <b>Setting up the boot loader</b>
                 <ul>
                  <li>
                  Embedded Storage (Memory Technology Devices), Embedded File Systems, Porting Linux kernel and Root file system to ARM9 board Embedded Storage – Sample MTD Driver, Operating Systems Porting Layer (Boot Loader, Kernel Image, Root File System)
                  </li>
                  </ul>

                  <b>Angstrom Operating system porting on ARM 9</b>
                  <ul>
                  <li>
                  Implementing application program on ARM9 board related to the project (Interaction between the User and Kernel Level With System calls, Explain Device driver application flowchart,  Explain kernel Device Driver and User Device Driver Program), System Calls, Bash Shell script, Threads, Signals, Process, IPC.
                  </li>
                  </ul>
                  
                  
                </div>
               
                </div>

              </section>
            </details>
          </div>


          <div className="Embed_css">
            <details>
              <summary>Project Based on Embedded Linux</summary>
              <section className="Embed_css_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Project Based on Embedded Linux</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>

                  <li>Implement a cp(copy) command with -p options.</li>
                  <li>WAP to sum and maximum of a given array using multiple threads. Synchronize threads using mutex.</li>
                  <li>WAP to print the address which causing segmentation fault.</li>
                  <li>Create a scenario to make zombie process become orphan, print status of each state.</li>
                  <li>WAP to create two child processes which will execute command passed through command-line argument. First Child will pass output to second child as input.</li>

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