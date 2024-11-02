import { useLocation , Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RequiredAuth({children}){

    const navigate = useNavigate();
    const location = useLocation();

    if(!localStorage.getItem('auth')){
       return <Navigate to={'/admin'}  > </Navigate>
    }

    return children

}

