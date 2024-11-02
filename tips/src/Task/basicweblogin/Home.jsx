import { Link, useNavigate } from "react-router-dom";




function Lee() {
    const thelee=useNavigate();

    return ( 
         <>
     <h1> Home Page</h1>
     <button onClick={()=>thelee("/About")}>Click Me</button>
                 
                 {/* (OR) */}
       <Link to={'/About'} > About</Link>
     </>
     );
}

export default Lee;