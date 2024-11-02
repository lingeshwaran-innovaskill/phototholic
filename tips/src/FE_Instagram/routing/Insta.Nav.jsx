import "./Insta.Nav.css";
import { NavLink } from "react-router-dom";
import { useReducer, useState } from "react";


function ExploreNav() {

    const [navbar , setnavbar] = useState([
        {
            icons:"fa-solid fa-house",
            navName:"Home"
        },
        {
            icons:"fa-solid fa-magnifying-glass",
            navName:"Search"
        },
        {
            icons:"fa-regular fa-compass",
            navName:"Explore"
        },
        {
            icons:"fa-solid fa-clapperboard",
            navName:"Reels"
        },
        {
            icons:"fa-brands fa-facebook-messenger",
            navName:"Messages"
        },
        {
            icons:"fa-regular fa-heart",
            navName:"Notification"
        },
        {
            icons:"fa-regular fa-square-plus",
            navName:"Create"
        },
        {
            img:"lee",
            navName:"Profile"
        }
    ])

    const [clas , setClas] = useState();

    const activeCls = (ele) => {
        setClas(ele)
    }

    const [moreOpt , setMoreOpt] = useState(false);
    const moreOp = () => {
        setMoreOpt(!moreOpt)
    }

    return (<>
    <div className="Insta-nav">
        <h1>Instagram</h1>
        <div className="Nav-div"> 
            <ul>
            {navbar.map((n) => {
                return(<>
                    <li onClick={()=>activeCls(n.navName)} className={clas === n.navName ? "active" : "" }> <i class={n.icons}></i><span> {n.navName}</span> </li>
                </>)
            })}                
            </ul>
        </div>

        <div className="Nav-div">
            <ul>
                <li onClick={moreOp}><i class="fa-solid fa-bars"></i> <span> More </span>  </li>
            </ul>
        </div>

            
        </div>

    {moreOpt &&
        <div className="nav-popup">
            <div className="popup-nav">
            <ul>
                <li><i class="fa-solid fa-gear"></i> <span> Settings </span> </li>
                <li><i class="fa-solid fa-square-person-confined"></i> Your activity </li>
                <li> <i class="fa-solid fa-bookmark"></i> <span> Saved </span> </li>
                <li> <i class="fa-regular fa-moon"></i> <span> Swich appearence </span> </li>
                <li> <i class="fa-solid fa-file-circle-exclamation"></i> <span> Report a problem </span> </li>
                <li> <i class="fa-brands fa-threads"></i> <span> Threads </span> </li>
                <li> Switch accounts </li>
                <li> Log Out </li>
            </ul>
            </div>
        </div>
    }

    </>);
}

export default ExploreNav;