import React, {useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import UseAdmin from '../Hooks/UseAdmin';
export default function PrivateRoute({children}) {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = UseAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
      return <div className="flex justify-center items-center h-screen bg-slate-200">
        Loading....
      </div>
    }

    if(user && isAdmin){
        return children;
    }
  return <Navigate to="/login" state={{from:location}} replace></Navigate>
}