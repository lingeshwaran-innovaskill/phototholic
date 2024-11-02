// import About from "./About";
import Lee from "./nav";

//for navigation bar training 

 export default function  Home(){
    let fname="lingesh";
    return(
        <>
        <Lee /> 
        <h1>home page</h1>;
        <h1>{fname}</h1>
        <p> {props.stuname}</p>
        </>
    );
}






//  export default function  Home(){
//     let fname="lingesh";
//     return(
//         <>
//         <Lee /> 
//         <h1>home page</h1>;
//         <p> {fname}</p>
//         <About stuname={fname}/>;
//         </>
//     );
// }