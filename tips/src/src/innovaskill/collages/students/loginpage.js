// import React from 'react'
import Loginimg from './loginimg.svg'
import { useNavigate,Link ,} from "react-router-dom";
import logo from './std_logo.png';
import "./loginpage.css";
import  React, { useState } from 'react';
import { useHistory } from 'react-router-dom';




function Loginpage() {

  const [yearSelection, setYearSelection] = useState('');
  const [semesterOptions, setSemesterOptions] = useState([]);

  const updateSemesters = (selectedYear) => {
    // Define semester options based on selectedYear
    switch (selectedYear) {
      case '1 Year':
        setSemesterOptions(['Semester I', 'Semester II']);
        break;
      case '2 Year':
        setSemesterOptions(['Semester III', 'Semester IV']);
        break;
      case '3 Year':
        setSemesterOptions(['Semester V', 'Semester VI']);
        break;
      case '4 Year':
        setSemesterOptions(['Semester VII', 'Semester VIII']);
        break;
      default:
        setSemesterOptions([]);
    }

    setYearSelection(selectedYear); // Update the selected year
  };
  return (
    <>
        <div className="stu_fullpmc ">
      <div className="d-flex  justify-content-between div_logoopmc" >
          <div className="ms-sm-2 ms-md-2 ms-lg-5  col-5 col-sm-5 col-md-4 col-lg-2 ">
            <img src={logo} className="img-fluid" />
          </div>

          <div className="col-4 col-sm-12 col-md-4 col-lg-2 ms-sm-2 ms-md-2 ms-lg-5  mt-3 ">
            <Link to={"/home"}>
              {" "}
              <i class="fa-solid fa-house" id="home_iconpmc"></i>
            </Link>
          </div>
      </div>
      </div>
        {/* <img src={Loginimg} className="img-fluid login-img-bac"/> */}
        

      <div className='nav_login'>
        <button>Student Profile</button><br/>
        <button>Student Attenance</button><br/>
        <button>Study Meterial</button><br/>
        <button>Interview Questions</button><br/>
        <button>Download Certificate</button><br/>
        <input  list='datali_id1' placeholder='Choose Department' className='choose_dep'></input>
        <br/>
          <datalist id='datali_id1'className='choose_dep'>
            <option>Computer Science Engineering</option>
            <option>Electrical & Electronics Engineering</option>
            <option>Electrical & Communication Engineering</option>
            <option>Information Science & Technology</option>
            <option>Mechanical Engineering</option>
            <option>Civil Engineering</option>
            <option>Data Science Engineering</option>
            <option>Aeronautical Engineering</option>
            <option>Automobile Engineering</option>
            <option>Industrial Engineering</option>
            <option>Instrumentation Engineering</option>
          </datalist>
        <div>
      <input
        list="datali_id2"
        placeholder="Choose Year"
        className="choose_dep"
        onChange={(e) => updateSemesters(e.target.value)}
        value={yearSelection}
      />
      <br />
      <datalist id="datali_id2">
        <option value="1 Year">1 Year</option>
        <option value="2 Year">2 Year</option>
        <option value="3 Year">3 Year</option>
        <option value="4 Year">4 Year</option>
      </datalist>

      <input
        list="datali_id3"
        placeholder="Semester Assessment"
        className="choose_dep"
      />
      <br />

      <datalist id="datali_id3">
        {semesterOptions.map((semester, index) => (
          <option key={index} value={semester}>{semester}</option>
        ))}
      </datalist>
    </div>

              <button >
              <Link to="/"> Submit </Link>
            </button>
      </div>






        {/* <div className='sel_option_pmc'>
      <form id="optionForm" onSubmit={handleSubmit}>
        <label htmlFor="options">Choose an option:</label><br/>
        <select id="options" name="options" value={selectedOption} onChange={handleChange}>
          <option value="option1">Semester 1</option>
          <option value="option2">Semester 2</option>
          <option value="option3">Semester 3</option>
          <option value="option4">Semester 4</option>
          <option value="option5">Semester 5</option>
          <option value="option6">Semester 6</option>
          <option value="option7">Semester 7</option>
          <option value="option8">Semester 8</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div> */}

    </>
  )
}
export default Loginpage;
