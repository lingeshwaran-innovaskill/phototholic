


import React from 'react'
import { Navigate } from 'react-router-dom'

const User = ( { children } ) => {

    if(localStorage.getItem('agent_viewer')){
        return <Navigate to={'/home'} />
    }

  return children;

}

export default User 