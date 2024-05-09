import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from './Login';
import MySpace from '../Pages/MySpace';

const PrivateComponent = () => {
    const auth = localStorage.getItem('user');
    
  return (
    //if user loged out will redirect to login component
    auth ? <MySpace/> : <Navigate to= "login"/>
  )
}

export default PrivateComponent