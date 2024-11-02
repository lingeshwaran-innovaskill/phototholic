import { redirect, useNavigate } from 'react-router-dom';
import './collage.css';
import { useState } from 'react';
import Navigation from '../nav/navigation';


function CollageDemo(){

    const navigate = useNavigate();

    const collages =[
        {
            colName:"PMC(Er. Perumal Manimekalai College of Engineering),Hosur",
            path:"/pmc"
        },
        {
            colName:"BNM Institute of Technology, Bangalore",
            // path:"/bnm"
            path:"/"
        },
        {
            colName:"Dayananda Sagar Academy of Technology and Management, Bangalore",
            // path:"/dayananda-academy",
            path:"/"
        },
        {
            colName:"Bannari Amman Institute of Technology, Sathyamangalam",
            // path:"/bannari"
            path:"/"
        },
        {
            colName:"JP College of Engineering, Thenkasi",
            // path:"/jp"
            path:"/"
        },
        {
            colName:"ATME College of Engineering, Mysore",
            // path:"/atme"
            path:"/"
        },
        {
            colName:"GM Institute of Technology, Davangere",
            // path:"/gm"
            path:"/"
        },
        {
            colName:"CMR Institute of Technology, Bangalore",
            // path:"/cmr"
            path:"/"
        },
        {
            colName:"The Oxford College of Engineering, Bangalore",
            // path:"/oxford"
            path:"/"
        },
        {
            colName:"T John Institute of Technology, Bangalore",
            // path:"/t-john"
            path:"/"
        },
        {
            colName:"DrTTIT - Dr.T.Thimmaiah Institute of Technology, Kolar Gold Fields",
            // path:"/thimmaiah"
            path:"/"
        },
        {
            colName:"Ghousia College Of Engineering, Ramanagara",
            // path:"/ghousia-eng"
            path:"/"
        },
        {
            colName:"Ghousia Polytechnic for Women, Bangalore",
            // path:"/ghousia-poly"
            path:"/"
        },
        {
            colName:"AGM College of Engineering and Technology, Hubli",
            // path:"/agm"
            path:"/"
        },
        {
            colName:"SRM Easwari Engineering College, Chennai",
            // path:"/srm"
            path:"/"
        },
        {
            colName:"Rohini College of Engineering & Technology, Kanyakumari",
            // path:"/rohini"
            path:"/"
        }];

    const [selectedCollage , setSelectedCollage ] = useState();

    const redirectingPath = () => {
        navigate(collages.find((e)=> e.colName == selectedCollage).path);
    }


    return(<>
    <Navigation/>
    <div className="collage-main">

    {/* <div className='collage-content'>

        <h3> Innovaskill Technologies in Collabration with </h3>
        <h3> {selectedCollage == "" ? "choose your collage" : selectedCollage } </h3>
    </div> */}

    <div className='collage-content'>

        <h3> Innovaskill Technologies in Collabration with </h3>

        <input type='text' list='collage' placeholder='choose your collage' onChange={(e)=>{setSelectedCollage(e.target.value)}} value={selectedCollage} />
        <datalist id='collage'>
            {collages.map((e)=>{
                return(<>
                    <option> {e.colName} </option>
                </>)
            })}
        </datalist>

        <button onClick={redirectingPath}> Submit </button>

    </div>

        
    </div>
    </>)
}
export default CollageDemo;
