
import Lee from "./nav";



export default function  Service(props){
    return(
        <>
        <Lee />
        <h1>service page</h1>
        <p>{props.stuname}</p>
        </>
    );
}