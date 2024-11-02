import { useState } from "react";


function Logic(Transfer){

    function Logicfunc(){

        const[cartitem,setCartitem]=useState(1);

        const incre=()=>{

            setCartitem(cartitem+1);

        }
        const decre=()=>{

            if(cartitem==0){
                setCartitem(0);
            }
            else{
            setCartitem(cartitem-1)
            }
        }
        return<Transfer cart={cartitem} incre={incre} decre={decre}/>
    }
   return Logicfunc;
}
export default Logic;