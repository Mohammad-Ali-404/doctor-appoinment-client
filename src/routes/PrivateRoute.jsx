import React, {useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
export default function PrivateRoute({children}) {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
      return <div className="flex justify-center items-center h-screen bg-slate-200">
        Loading...
      </div>
    }

    if(user){
        return children;
    }
  return <Navigate to="/" state={{from:location}} replace></Navigate>
}