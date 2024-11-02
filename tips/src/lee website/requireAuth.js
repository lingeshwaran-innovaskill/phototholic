import {  useLocation, Navigate} from "react-router-dom";
import { useAuth } from "./auth";

function RequireAuth({children}){

    const location = useLocation();

    if(!localStorage.getItem('agent_viewer')){

        return <Navigate to={'/login'} state={{path : location.pathname}} ></Navigate>

    }

    return children;

}

export default RequireAuth;