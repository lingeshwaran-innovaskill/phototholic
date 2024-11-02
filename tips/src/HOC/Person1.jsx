import Compo from "./compo";

function Person1({cart,incre,Decre}) {

    return ( <>
        <h1>{cart}</h1>
        <button onClick={incre}> increment</button>
        <button onClick={Decre}>Decrement</button>
        </>
     );
}

export default Compo(Person1);