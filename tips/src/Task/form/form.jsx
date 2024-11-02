import { useRef, useState } from "react";

function Form(){

    //  First Name
    const[fname,setFname]=useState("");
    const fname1=useRef();

    //Last name
    const [lname,setLname]=useState("");
    const lname1=useRef();

    //email
    const[a,setA]=useState('');
    const M=useRef();

    //Number
    const[num,setNum]=useState('');
    const num1=useRef();

    //Password
    const[pass,setPass]=useState('');
    const pass1=useRef();

    //confirm password
    const[cpass,setCpass]=useState('');
    const cpass1=useRef();


    function submit(){
        //First name 
        if(fname!=""){
            fname1.current.innerText='';
        }
        else{
            fname1.current.innerText='please enter first name';
            fname1.current.style.color='red';
        }

        //last name
        if(lname!=''){
            lname1.current.innerText=''
        }
        else{
            lname1.current.innerText='please enter last name';
            lname1.current.style.color='red';
        }

        //Email
        if(a!=''){
            M.current.innerText="";
        }
        else{
            M.current.style.color='red';
            M.current.innerText='please enter your mail id';
        }

        //Number
        if(num===''){
            num1.current.style.color='red';
            num1.current.innerText='please enter your number';
        }
        else if(num.length < 10 ||num.length > 10){
            num1.current.style.color='red';
            num1.current.innerText='enter a valid number';
        }
        else{
            num1.current.innerText='';
        }

        //Password
        if(pass===''){
            pass1.current.style.color='red';
            pass1.current.innerText='please enter password';
        }
        else if(pass.length <= 7){
            pass1.current.style.color='red';
            pass1.current.innerText='password should contain atleast 8 character';
        }
        else{
            pass1.current.innerText='';
        }

        //cpassword
        if(pass!=cpass){
            cpass1.current.style.color='red';
            cpass1.current.innerText="password doesn't match";
        }
        else{
            cpass1.current.innerText='';
        }

    }
    return(
        <>
        <div className="maindiv">
            <form>
            <input type="text"   placeholder="Enter first name"   onChange={e=>setFname(e.target.value)} value={fname}/>
            <p ref={fname1}></p>

            <input type="text"   placeholder="Enter last name"    onChange={e=>setLname(e.target.value)} value={lname}/>
            <p ref={lname1}></p>

            <input type="email"  placeholder="Enter your email" required  onChange={e=>setA(e.target.value)} value={a}/>
            <p ref={M}></p>

            <input type="number" placeholder="Enter your number" onChange={e=>setNum(e.target.value)} value={num}/>
            <p ref={num1}></p>

            <input type="password"  placeholder="Enter password" onChange={e=>setPass(e.target.value)} value={pass}/>
            <p ref={pass1}></p>

            <input type="password"  placeholder="Confirm password" onChange={e=>setCpass(e.target.value)} value={cpass}/>
            <p ref={cpass1}></p>

           <button title={'button'} onClick={submit}>Submit</button>
        </form>
        </div>
        </>
    )
}
export default Form;



//   finame.current.innerText='please enter your name';
        // fname=''?finame.current.innerText='please enter your name' : 'done' ;
        // switch(fname){
        //     case !"":
        //         finame.current.innerText='please enter your name';
        //         break;
        //     default:
        //         finame.current.style.color='red';
        //         finame.current.innerText='thank you';
        // }
