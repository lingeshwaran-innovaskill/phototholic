import { Link } from "react-router-dom";



function Game1(){




    return(
        <>
        <div id="main">
            <h1>Welcome</h1>
      <Link to={"/Game"}><button >Start Game</button></Link>  
        </div>
        </>
    )

}
export default Game1;