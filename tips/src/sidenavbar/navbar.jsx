import { useState } from "react";
import "./navbar.css";

function Navbar(){

const nav=["Home","About","Event","Contact","Queries","Settings"];

    const[isopen,setIsopen]=useState(false);

    return(
    <aside className={`sidebar ${isopen?'open':''}`}>
        <div className="sidebar-inner">
            <header className="siderbar-header">
            <button 
            type="button"
            className="sidebar-burger"
            onClick={()=>setIsopen(!isopen)}>
            <span>{isopen?'close':'menu'}</span>
            </button>
            </header>
            <nav className="sidebar-menu">
                {nav.map(l=>{
                <button className="sidebar-button">
                    <span>{l}</span>
                    <p>{l}</p>
                </button>
                })}
            </nav>
        </div>
    </aside>
    )



}
export default Navbar;