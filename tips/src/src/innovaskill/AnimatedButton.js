import "./AnimatedButton.css";
import {Link } from "react-router-dom"

const AnimatedButton = () => {
  return (
    <div>
<Link to={'/enquiry-form'}>
      <button className="custom-btn btn-7 " id="btn-7button">
        <span className="tex ">Free Demo</span>
      </button>
</Link>
<Link to={'/enquiry-form'}>
      <button className="custom-btn btn-7" id="btn-7button">
       <span className="tex">Enroll Now</span>
      </button>
      </Link>
    </div>
  );
};

export default AnimatedButton;






// import React from 'react';

