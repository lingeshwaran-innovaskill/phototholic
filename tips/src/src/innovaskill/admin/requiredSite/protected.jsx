import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import AXX from "../../routes/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [ user , setUser ] = useState(null);

    useEffect(()=>{

        AXX.get("getAdmin" , {
            headers:{
                "auth":localStorage.getItem('auth')
            }
        })
        .then( (res) => {setUser(res.data)})
        .catch( (err) => {setUser(null)} )

    })



    return(<>
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    </>)

}

export const useAuth = () => {
    return useContext(AuthContext);
}
