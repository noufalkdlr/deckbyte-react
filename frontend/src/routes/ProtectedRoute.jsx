import React from 'react'
import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {

    const isAdmin = useSelector((state) => state.auth.isAdmin);

  return isAdmin ? <Outlet/> : <Navigate to="/admin/login" />
}

export default ProtectedRoute