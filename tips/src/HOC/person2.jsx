import Compo from "./compo";


function Person2({cart,incre,Decre}) {
    return ( 
        <>
        <h1>
            {cart}
        </h1>
        <button onClick={incre}>Increment</button>
        <button onClick={Decre}>Decrement</button>
        </>
     );
}

export default Compo(Person2);