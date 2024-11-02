


import './IOTcourse.css';



export default function IOTcourse () {
    return(

        <div className='container-fluid'>
        <div className="ccna_syllabusfullsection row" id="ccna_syllabusfullsection">
        <h1 className="ccna_syllabus">Course Module Syllabus :</h1>
        <section className="ccna_section3" id="ccna_section3">
        
          <div className="ccna_Introduction  ">
            <details>
            {/* <details className='d-flex align-items-center'> */}
              <summary> Arduino Microcontroller </summary>
              <section className="ccna_Introduction_section ">

               <div className='row' >

                <div className='col-lg-4 col-md-6 '>
                  <b> Arduino Microcontroller </b> 

                  <ul className='ms-sm-3 ms-md-0 ms-lg-0'>
                 
                  <li>Introduction to Arduino</li>
                  <li>Usage of Arduino IDE</li>
                  <li>Different types of Arduino Board</li>
                  <li>Data types</li>
                  <li>Variables</li>
                  <li>Constant</li>
                  <li>Operator</li>
                  <li>Arrays</li>
                  <li>Delay function</li>
                  <li>Control Statement</li>
                  <li>Digital and Analog Read</li>
                  <li>Digital and Analog Write</li>
                  <li>Usage of ThinkerCAD</li>
                  <li>GPIO Interfacing (LED, Switch, 7 Segment Display, LCD, GLCD, Keypad, DC Motor, Stepper Motor, Servo Motor, Relay)</li>
                  <li>Sensors (IR, PIR, Ultrasonic Sensor (HCSR-04), DHT11/21/22 Temperature Sensor)</li>
                  <li>Piezo-buzzer</li>
                  <li>Rotary Encoder</li>
                  <li>Infrared receiver and Transmitter</li>
                  <li>Light Dependent Resistor, OLED Display</li>
                  <li>Touch screen TFT Display</li>
                  <li>Soil Moisture Sensor, Sound Sensor</li>
                  <li>Capacitive Soil Moisture Sensor</li>
                  <li>Voltage Sensor, Gas Sensor</li>
                  <li>I2C based LCD</li>
                  <li>SPI based MAX7219 with Dot Matrix Display</li>
                  <li>PWM (Fading LED)</li>


                  </ul>

                </div>
 
                </div>

              </section>
            </details>
          </div>


          <div className="ccna_Fundamentals">
            <details>
              <summary>Project Title Based on Arduino Microcontroller </summary>
              <section className="ccna_Fundamentals_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Project Title Based on Arduino Microcontroller </b>
                  <ul>

                  <li>Arduino Robot Car Control using HC-05 Bluetooth</li>
                  <li>Regenerative braking system in electric vehicle with BLDC Motor</li>
                  <li>Password based door locking system</li>
                  <li>2-wheel self-balancing robot by using Arduino and MPU6050</li>
                  <li>Talking clock with RTC DS1307</li>
                  
                  </ul>  

                  
                </div>

               
                </div>

        </section>
            </details>
          </div>


          <div className="CCNA_NetworkAccess">
            <details>
              <summary>ESP32 Controller </summary>
              <section className="CCNA_NetworkAccess_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b> ESP32 Controller  </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  <li>Introduction to ESP32</li>
                  <li>Development Boards</li>
                  <li>Usage of Arduino IDE</li>
                  <li>ESP32 Core in Arduino IDE</li>
                  <li>Inputs and Outputs</li>
                  <li>Usage of Wokwi</li>
                  <li>PWM</li>
                  <li>Interrupt Timers</li>
                  <li>Deep Sleep</li>
                  <li>ESP32-CAM</li>
                  <li>Protocols (Web Server, BLE Client-Server, MQTT, WebSocket, HTTP GET POST, GET Web APIs, POST Web APIs)</li>
                  <li>Cloud (Blynk, ThingSpeak, Firebase, Arduino IoT cloud)</li>
                  <li>Google Sheets</li>
                  <li>Over the Air Updates</li>
                  <li>Telegram</li>
                  <li>WhatsApp</li>
                  <li>MySQL</li>
                  <li>PHP Email</li>
                  <li>Node-Red Dashboard</li>
                  <li>NTP Server</li>
                  <li>MicroSD Card Data Logging</li>
                  <li>Google Assistant using IFTTT</li>
                  </ul>

                </div>
                </div>

                </section>
              </details>
          </div>


          <div className="ccna_Connectivity" >
            <details>
              <summary> Project Title Based on ESP32 Microcontroller </summary>
              <section className="ccna_Connectivity_section">

                <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <b>Project Title Based on ESP32 Microcontroller </b>
                  <ul  className='ms-sm-3 ms-md-0 ms-lg-0'>
                  
                  <li>WhatsApp based Temperature monitoring and controlling using Twilio and ThingESP</li>
                  <li>Google Assistant V2 Home Automation using IFTTT</li>
                  <li>Control Fan using Blynk-IoT</li>
                  <li>Air Quality Monitoring system ThingSpeak</li>
                  <li>ESP32 web page creating and updating</li>
                  
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