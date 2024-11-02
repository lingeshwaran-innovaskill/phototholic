import { useState } from "react";



function Checkbox(){

    const Games=['Cricket','Footbal','KHO_KHO','Athlate','Volley-Ball'];
    const Days=['holiday','Evening-time'];

const [gameval,setGameval]=useState();
const [day,setDay]=useState();
    return(
        <>
        <h1>Games</h1>
        {
            Games.map((game)=>{
                return(
            <>
            <input type="radio" id={game} name='game' value={game} onChange={e=>setGameval(e.target.value)}/>
            <label for={game}>{game}</label><br/>
        </>
                      )
            })
        }

        <h1>Days</h1>

        {
            Days.map((day)=>{
                return(
                    <>
                    <input type="radio" id={day} name="d" value={day} onChange={e=>setDay(e.target.value)}/>
                    <label for={day}>{day}</label><br/>
                    </>
                )
                
            })
        }
        <h1>{gameval} on {day}</h1>
        </>
    )

}
export default Checkbox;