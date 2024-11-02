import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


function Game(){

    const [a,setA]=useState();

    // const dup = [1,1,2,3,4,5,2,6,3,7,'lion','tiger','lion','elephant','zibra','lion'];
    // const unique = [...new Set(dup)];
    // console.log(unique, 'dup');

    // const unique1 = Math.floor(Math.random()*1000);
    // const uni = unique1.toLocaleString();
    // console.log(unique1 , 'dup' , uni.charAt(0) , uni.charAt(1) , uni.charAt(2)  );

    useEffect(()=>{
    setA(prompt('enter your name'));
    },[a]);

       const [arr,setArr]=useState([Math.floor(Math.random()*(4-1)+1),
       Math.floor(Math.random()*(7-4)+4),
       Math.floor(Math.random()*(10-7)+7)]);
       console.log(arr);

       const [n1,n2,n3]=arr;
       const total=Number(`${n1}${n2}${n3}`);
       console.log(total);

       const title=' I Guess a number in-between this number 1000';
       const[head,setHead]=useState('Can you guess it ?');
       const [count,setCount]=useState(0);
       const col=useRef();
       const[input,setInput]=useState('');
       const inp=Number(input);
    console.log(inp);

    

       
    const submit=()=>{


        if(input.charAt(0)!=''){
            
         if(input.charAt(0) < n1){
            setHead("it's low (+) ");
            setCount(count+1);
        }
        else if(input.charAt(0) > n1 ){
            setHead("it's  high (-) ");
            setCount(count+1);
        }
        else { 
             setHead("it's matched check the next value");
            }
        }

         if(input.charAt(1)!==''){
                setHead('enter the second number');
            
        if(input.charAt(1) < n2){
            setHead("it's low (+) ");
            setCount(count+1);
        }
        else if(input.charAt(1) > n2){
            setHead("it's high (-) ");
            setCount(count+1);
        }
        else{
            setHead("2nd value also matched check the next value");
        }
       }

        if(input.charAt(2)!==''){
                if(inp===total){
               setHead(`Congrats you won the game :) -> Attempt used ${count}`);
        }

         if(input.charAt(2) < n3){
            setHead("it's low (+)");
            setCount(count+1)
        }
        else if(input.charAt(2) > n3){
            setHead("it's high (-)");
            setCount(count+1);
        }
        }
    }
    

return(
    <div id="body">
    <div id="header">
    </div>
    <div className="game">
        <div className="content">
            <h2>Guessing number game <h2 id="count" ref={col}>{count}</h2></h2>
            <h2 className="head">{`Let's play ${a}`}</h2>
            <hr/>
        <h3>{title}</h3>
        <h2 className="head">{head}</h2>
        <input type="number" placeholder="Enter the gussing number" value={input} onChange={e=>setInput(e.target.value)}/><br/>
        <button onClick={submit}>Guess</button><br/>
       <Link to={'/'}> <button>Re-Start</button></Link>
        </div>
    </div>
    </div>
)}
export default Game;
