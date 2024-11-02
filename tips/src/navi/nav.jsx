import { Link } from "react-router-dom"


function Lee(){
 
return(
    <>
    <Link to='/' className="link">Home</Link>
    <Link to='/about' className="link">About</Link>
    <Link to='/events' className="link">Event</Link>
    <Link to='/service' className="link">Service</Link>
    <Link to='/contact' className="link">Contact</Link>
    </>
)
}
export default Lee;
