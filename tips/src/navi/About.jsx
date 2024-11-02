import Lee from "./nav";



 export default function About(props){
    return(
        <>
        <Lee />
        <h1>about page</h1>
        <p>the name is : {props.stuname}</p>
        </>
    );
}