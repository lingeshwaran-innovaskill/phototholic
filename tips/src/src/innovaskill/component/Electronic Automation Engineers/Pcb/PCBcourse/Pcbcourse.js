


import './Pcbcourse.css';



export default function Pcbcourse () {
    return(

        <div className='container-fluid'>
        <div className="pcb_syllabusfullsection row" id="pcb_syllabusfullsection">
        <h1 className="pcb_syllabus">Course Module Syllabus :</h1>
        <section className="pcb_section3 " id="pcb_section3 ">
        
          <div className="pcb_OrCADCapture ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary>OrCAD Capture</summary>
              <section className="pcb_OrCADCapture_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6 '>
                  <b>OrCAD Capture</b>                    
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>

                    <li> Capture Introduction</li>
                    <li> Project Creation</li>
                    <li> Session log window</li>
                    <li> Creating a new project</li>
                    <li> Project Manager</li>
                    <li> Working with Part Libraries</li>
                    <li> Adding a library</li>
                    <li> Creating a new library from the Project Manager</li>
                    <li> Creating a new part in the library</li>
                    <li> Schematic Page Editor Window</li>
                    <li> Schematic Page Preferences</li>
                    <li> Placing the parts</li>
                    <li> Connecting the parts</li>
                    <li> Placing the Net alias</li>
                    <li> Placing the Power symbol</li>
                    <li> Placing the Ground symbol</li>
                    <li> Creating a bus</li>
                    <li> Placing the No connection</li>
                    <li> Making power pin visible</li>
                    <li> Off-Page Connector</li>
                    <li> Multi schematic Folder Project</li>
                    <li> Creating a multi folder schematic project</li>
                    <li> Annotation</li>
                    <li> DRC</li>
                    <li> Cross Reference Parts</li>
                    <li> BOM</li>
                    <li> Draw the circuit and Applying foot print </li>

                    </ul>
                  
                </div>
                
                </div>

              </section>
            </details>
          </div>


          <div className="pcb_OrCADPSPICE">
            <details>
              <summary>OrCAD PSPICE</summary>
              <section className="pcb_OrCADPSPICE_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6 '>
                  <b>OrCAD PSPICE</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>

                  <li> PSPICE Introduction</li>
                  <li> Creation of new simulation profile</li>
                  <li> Transient Analysis</li>
                  <li> Bias Point Analysis</li>
                  <li> DC Sweep Analysis</li>
                  <li> AC Sweep Analysis</li>
                  <li> Parametric Analysis</li>
                  <li> Temperature Analysis</li>
                  <li> Monte Carlo/Worst case Analysis</li>

                  </ul>
                            
                </div>
    
                </div>


              </section>
            </details>
          </div>


          <div className="pcb_OrCADPCBEditor">
            <details>
              <summary>OrCAD PCB Editor</summary>
              <section className="pcb_OrCADPCBEditor_section">

                <div className='row'>
                <div>
                  <b>OrCAD PCB Editor</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li> PCB Editor Introduction</li>
                  <li> PCB Editor Design Environment</li> 
                  <li> Classes and subclasses</li>
                  <li> Editing the color and visibility of the design</li>
                  <li> Pad Designer</li>
                  <li> Creating a new symbol using Package Symbol</li>
                  <li> Creating a new symbol using Package Symbol Wizard</li>
                  <li> Creating a New Mechanical Symbol</li>
                  <li> Draw the board outline</li>
                  <li> Assign the package keepin area and route keepin area</li>
                  <li> Place mechanical symbol</li>
                  <li> Types of placement</li>
                  <li> Manual placement</li>
                  <li> Room placement</li>
                  <li> Edge placement</li>
                  <li> Auto placement</li>
                  <li> Net placement</li>
                  <li> Types of Vias: Through via</li>
                  <li> Blind via and Buried via\</li>
                  <li> Working with Color192 and CMGR</li>
                  <li> Routing the Board</li>
                  <li> Manual routing and Auto routing</li>
                  <li> Adding the Copper for plain layers</li>
                  <li> Manufacturing File Generation</li>
                  <li> Creating the artwork file</li>
                  <li> Creating manufacturing file in PDF</li>
                  <li> Mini Project</li>
                 
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