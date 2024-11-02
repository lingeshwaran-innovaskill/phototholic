import "./client.css";

import c1 from './images/2whatwe.png';
import c2 from './images/3whatwe.png';
import c3 from './images/4whatwe.png';
import c4 from './images/5whatwe.png';
import c5 from './images/7whatwe.png';
import c6 from './images/10whatwe.png';
import { useState } from "react";

function Client() {


    const [ logo , setLogo ] = useState([ c1 , c2 , c3 , c4 , c5 , c6 ]);


    return (<>
    <div className="client-main-div" id="client">

        <div className="client-top">
            <div className="client-top-content">
                <h1> Impossible to keep up with an ever-changing business landscape? At Unisys, we’re pushing back on that. </h1>
                <h3> We believe that agile technology can inspire breakthroughs that propel organizations into the future every day. No matter the industry, we work together with clients around the world to drive innovation through digital workplace, cloud, enterprise computing and business process solutions. We love rolling up our sleeves and collaborating to discover solutions that transform how people experience tech. </h3>
            </div>
        </div>

        <div className="client-bottom">
        
            <div className="client-bot-body">
                <div className="client-logo">
                    {logo.map((i) => {
                        return<>
                        <img src={i}/>
                        </>
                    })}
                </div>

                <div className="client-des">
                        <h4> CLIENT OUTCOMES </h4>
                        <h1> Collaborating to maximize results </h1>
                        <h3> We know that advancement like this doesn’t happen on its own—it happens by taking the time to understand our clients’ goals and pinpointing solutions that enable them to succeed. When we rally around a shared purpose to create something new together, that’s when things click. </h3>
                        <button> View client stories </button>
                </div>

            </div>
        
        </div>

    </div>    
    </>);
}

export default Client;