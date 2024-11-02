import React from "react";
import "./kidsdreamjob.css";

import kkl from "../kids_images/KKL.png";

import { GiArchiveResearch } from "react-icons/gi";




export default function Kidsdreamjob () {
  return (

    <div>
    <div className="kidsholepage">

        <section className="kids_section4 container-fluid">

          <div className="row">

          <div className="kids_section4content col-sm-11 col-md-11 col-lg-4">
          <h1>Why our champs should code/learn technologies  ? </h1>
          
          <p>
          <GiArchiveResearch className="GiArchiveResearch" style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Bringing out hidden talents: Kids learn languages to communicate and express their feelings, ideas and outstanding thoughts which strengthens their verbal and written abilities Coding also possess a language- the amazing disney world of 0's and 1's which every kids should travel so that children will get to know the rapidly moving technology world around them and be able to speak the technological wonders around them.</p>
          <p><br/>
            <GiArchiveResearch className="GiArchiveResearch"  style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Waking up the innovative minds: Programming or coding wonders helps children to experiment new things and fosters their creativity. Creative minds won't stop and it would be difficult to catch those butterflies who will fly higher and higher and bloom like little stars.</p><br/>
          <p>
            <GiArchiveResearch  className="GiArchiveResearch" style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Career orientation and Logical skills: In this digital age of transformation, technological skills will help our young champs to be competent and builds up logical and problem-solving skills. This will be a ladder support to students for boost up their confidence, communication, creativity & math skills. The leading companies like JP Morgan, IBM, Amazon Sky etc being the top most recruiters for developers in 2019-20.</p><br/>
          <p>
            <GiArchiveResearch  className="GiArchiveResearch" style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Achieves academic progress: For being outstanding in a mass crowd our champs have to be extra ordinary, through coding children learns how to plan and organize thoughts. This is way to develop critical thinking and maintain the emotional intelligence. The languages like python, java and swift growth trend is outstripping similar programming languages.</p><br/>
          <p>
            <GiArchiveResearch  className="GiArchiveResearch" style={{ color: 'green', size: '50px' }}/>&nbsp;&nbsp;Be unique from scratch: Kids can jump straight into technological world and can learn how to create games, programs, websites and even integrate with robotics. The initial roots must have to be stronger so that we can sharpen it in future and can become a giant tree of tech expertise.
          </p><br/>
          
           {/* <p>Mode Of Traning</p>
          <p>
            <span>Online / Offline</span>
          </p> */}
          <hr /> 
          </div> 

          <div className="kids_section4imgdiv col-sm-12 col-md-10 col-lg-7">
          <img src={kkl} className="img-fluid"></img>
          </div>

          </div>
        </section><hr className="kids_hr"/>
        
      
    </div>
    </div>
  );
}
