import React, { useContext } from 'react'
import { Outlet, useNavigate } from 'react-router';
import { ShopContext } from '../ShopContext/Shopcontext';

const ProtectedRoute = () => {
    const valueContext = useContext(ShopContext);
    const nav = useNavigate();

  if (valueContext.user === null) {
    return (
        <>
        { nav("/login") }
        </>
    )
  }

  return <Outlet />
}

export default ProtectedRoute