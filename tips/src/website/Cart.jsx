// import { useState } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logic from "./logic";


function Weblink({cart , clear, cartitem,incre,decre }) {


   return(
        <>
        <div className="maincartdiv">
        <div id="linkmaindiv">
        <h2>Your Cart</h2>
        <p><Link to={'/'}>Back to shop</Link></p>
        <br/>
        <hr/>
        </div>
        <div id="bodycart">
       <h2>{cart.length===0?`Go To Shop`:''}</h2>
       
        {cart.map((pro,index)=>{
            return(<>
            <div className="link">
            <img src={pro.img}/>
         
            <div className="btn ">
            <button onClick={decre}>-</button>
            <h2>{pro.count}</h2>
            <button onClick={incre}>+</button>
            </div>
        
            <div className="btn btn1">
              <p>${pro.amount}/-</p>
            <p>${pro.amount * pro.count}/-</p>
            </div>

            <div className="btn clear">
            <button onClick={()=>clear(pro.name)}>X</button>
            </div>
            </div>
            </>)
        })}
        </div>
        <div className="total">
          <p>{cart.length===0?'':`Total = $${cart.map((a)=>a.amount*a.count).reduce((a,b)=>a+b)}/-`}</p>
        </div>
        </div>
        </>
        
     );
};
export default Weblink;



