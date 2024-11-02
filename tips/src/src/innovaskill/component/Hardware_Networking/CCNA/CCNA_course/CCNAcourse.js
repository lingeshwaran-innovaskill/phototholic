


import './CCNAcourse.css';



export default function CCNAcourse () {
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
                 
                    <li>Network & Networking</li>
                    <li>Network characteristics</li>
                    <li>Transmission modes</li>
                    <li>Types of networks</li>
                    <li>Topologies</li>
                    <li>Networking medium</li>
                    <li>Types of cables</li>
                    <li>OSI model </li>
                    <li>IP addresses</li>

                  </ul>

                </div>
 
                </div>

              </section>
            </details>
          </div>


          <div className="ccna_Fundamentals">
            <details>
              <summary>Network Fundamentals (20%)</summary>
              <section className="ccna_Fundamentals_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Network Fundamentals Explain the role and function of network components:</b>
                  <ul>

                    <li>Routers</li>
                    <li>Layer 2 and Layer 3 switches</li>
                    <li>Next-generation firewalls and IPS</li>
                    <li> Access points</li>
                    <li>Controllers (Cisco DNA Center and WLC)</li>
                    <li>Endpoints</li>
                    <li>Servers</li>
                    <li>PoE</li>
                  
                  </ul>  

                  
                </div>

                <div className='col-lg-4 col-md-6'>

                <b>Describe characteristics of network topology architectures:</b>
                  <ul>

                    <li>Two-tier and Three-tier</li>
                    <li>Spine-leaf</li>
                    <li>WAN</li>
                    <li> Small office/home office (SOHO)</li>
                    <li>On-premise and cloud</li>
                    <li>Compare physical interface and cabling types</li>
                    <li>Single-mode fiber, multimode fiber, copperConnections </li>
                    <li>Identify interface and cable issues</li>
                    <li> (collisions, errors, mismatch duplex, and/or speed)</li>
                    <li>Compare TCP to UDP</li>
                    <li>Configure and verify IPv4 addressing and subnetting</li>
                    <li>Describe the need for private IPv4 addressing</li>
                    <li>Configure and verify IPv6 addressing and prefix</li>
                  
                  </ul>  

                    
                </div>


                <div className='col-lg-4 col-md-6'>

                <b>Describe IPv6 address types :</b>
                  <ul>

                    <li>Unicast (global, unique local, and link local)</li>
                    <li>Anycast</li>
                    <li>Multicast</li>
                    <li>Modified EUI 64</li>
                  
                  </ul>  

                  <b>Describe wireless principles :</b>
                  <ul>

                  <li>Nonoverlapping Wi-Fi channels</li>
                  <li>SSID</li>
                  <li>RF</li>
                  <li>Encryption</li>
                  <li>Verify IP parameters for Client OS</li>
                  <li>Windows, Mac OS, Linux</li>
                  
                  </ul>  

                  <b>Describe switching concepts :</b>
                  <ul>

                    <li>MAC learning and aging</li>
                    <li>Frame switching</li>
                    <li>Frame flooding</li>
                    <li>MAC address table</li>
                    <li>Explain virtualization fundamentals</li>
                    <li>server virtualization, containers, and VRFs</li>
          
                  </ul>
                  </div>

                </div>

        </section>
            </details>
          </div>


          <div className="CCNA_NetworkAccess">
            <details>
              <summary>Network Access (20%)</summary>
              <section className="CCNA_NetworkAccess_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b> Training Content </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  <li>Access ports (data and voice)</li>
                  <li>Default VLAN</li>
                  <li>InterVLAN connectivity</li>
                  <li>Configure and verify interswitch connectivity</li>
                  <ul>
                  <li>Trunk ports</li>
                  <li>802.1Q</li>
                  <li>Native VLAN</li>
                  </ul>
                  <li>Configure and verify Layer 2 discovery protocols (Cisco Discovery Protocol and LLDP)</li>
                  <li>Configure and verify (Layer 2/Layer 3) EtherChannel LACP)</li>
                  <li>Interpret basic operations of Rapid PVST+ Spanning Tree Protocol</li>
                  <ul>
                  <li>Root port, root bridge (primary/secondary), and other port names</li>
                  <li>Port states (forwarding/blocking)</li>
                  <li>PortFast</li>
                  </ul>
                  <li>Describe Cisco Wireless Architectures and AP modes</li>
                  <li>Describe physical infrastructure connections of WLAN components (AP, WLC, access/trunk ports, and LAG)</li>
                  <li>Describe AP and WLC management access connections (Telnet, SSH, HTTP, HTTPS, console, and TACACS+/RADIUS)</li>
                  <li>Interpret the wireless LAN GUI configuration for client connectivity, such as WLAN creation, security settings, QoS profiles, and advanced settings</li>
                  </ul>
                </div>
                </div>

                </section>
              </details>
          </div>


          <div className="ccna_Connectivity" >
            <details>
              <summary> IP Connectivity (25%)</summary>
              <section className="ccna_Connectivity_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>IP Connectivity Interpret the components of routing table</b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                    <li>Routing protocol code</li>
                    <li>Prefix</li>
                    <li>Network mask</li>
                    <li>Next hop</li>
                    <li>Administrative distance</li>
                    <li>Metric</li>
                    <li>Gateway of last resort</li>

                  <b>Determine how a router makes a forwarding decision by default</b>
                  
                  <li>Longest prefix match</li>
                  <li>Administrative distance</li>
                  <li>Routing protocol metric</li>

                  <b>Configure and verify IPv4 and IPv6 static routing</b>
                    <li>Default route</li>
                    <li>Network route</li>
                    <li>Host route</li>
                    <li>Floating static</li>


                  <b>Determine how a router makes a forwarding decision by default</b>
                  
                    <li>Neighbor adjacencies</li>
                    <li>Point-to-point</li>
                    <li>Broadcast (DR/BDR selection)</li>
                    <li>Router ID</li>
                    <li>Describe the purpose, functions, and concepts of first hop redundancy protocols</li>

                  </ul>
                  
                 
                </div>
                </div>

                </section>
              </details>
          </div>


          <div className="ccna_IPServices" >
            <details>
              <summary>IP Services (10%)</summary>
              <section className="ccna_IPServices_section">

                <div className='row'>
                <b>IP Services</b>
                <ul className='ms-sm-3 ms-md-0 ms-lg-0'>

                  <li>Configure and verify inside source NAT using static and pools</li>
                  <li>Configure and verify NTP operating in a client and server mode</li>
                  <li>Explain the role of DHCP and DNS within the network</li>
                  <li>Explain the function of SNMP in network operations</li>
                  <li>Describe the use of syslog features including facilities and levels</li>
                  <li>Configure and verify DHCP client and relay</li>
                  <li>Explain the forwarding per-hop behavior (PHB) for QoS, such as classification, marking, queuing, congestion, policing, and shaping</li>
                  <li>Configure network devices for remote access using SSH</li>
                  <li>Describe the capabilities and functions of TFTP/FTP in the network</li>
                  </ul>
                  
                </div>

              </section>
            </details>
          </div>


          <div className="ccna_Security" >
            <details>
              <summary>Security Fundamentals</summary>
              <section className="ccna_Security_section">


                <div className='row'>
                  <b> Security Fundamentals </b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Define key security concepts (threats, vulnerabilities, exploits, and mitigation techniques)</li>
                  <li>Describe security program elements (user awareness, training, and physical access control)</li>
                  <li>Configure and verify device access control using local passwords</li>
                  <li>Describe security password policies elements, such as management, complexity, and password alternatives (multifactor authentication, certificates, and biometrics)</li>
                  <li>Describe IPsec remote access and site-to-site VPNs</li>
                  <li>Configure and verify access control lists</li>
                  <li>Configure and verify Layer 2 security features (DHCP snooping, dynamic ARP inspection, and port security)</li>
                  <li>Compare authentication, authorization, and accounting concepts</li>
                  <li>Describe wireless security protocols (WPA, WPA2, and WPA3)</li>
                  <li>Configure and verify WLAN within the GUI using WPA2 PSK</li>
                  </ul>
                </div>

              </section>
            </details>
          </div>


          <div className="ccna_Programmability" >
            <details>
              <summary>Automation and Programmability (10%)</summary>
              <section className="ccna_Programmability_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Automation and Programmability </b>
                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>Explain how automation impacts network management</li>
                  <li>Compare traditional networks with controllerbased networking</li>
                  <li>Describe controller-based, software defined architecture</li>
                  <li>overlay, underlay, and fabric</li>
                  <li>Separation of control plane and data plane</li>
                  <li>Northbound and Southbound APIs</li>
                  <li>Compare traditional campus device management with Cisco DNA Center enabled device management</li>
                  <li>Describe characteristics of REST-based APIs (CRUD,HTTP verbs, and data encoding)</li>
                  <li>Recognize the capabilities of configuration management mechanisms Puppet, Chef, and Ansible</li>
                  <li>Recognize components of JSON-encoded data</li>

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