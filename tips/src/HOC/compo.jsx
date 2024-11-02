import { useState } from "react";

function Compo(Transferlogic){

function Logicfunc(){

    const [cart,setCart] = useState(1);

    const incre = () => {
        setCart(cart+1);
    }

    const Decre = () => {
        if(cart==0){
            setCart(0)
        }
        else{
        setCart(cart=>cart-1)
        }
    }

    return<Transferlogic cart={cart}  incre={incre} Decre={Decre}/>

}return Logicfunc;

}

export default Compo;
