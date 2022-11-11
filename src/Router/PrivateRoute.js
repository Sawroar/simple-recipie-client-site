import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthoContext } from '../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthoContext)
    const location = useLocation()
    if (loading) {
        return <h1 className='text-2xl text-center mt-5 text-orange-500'>Please Login First to Order!!<Link className='text-blue-800' to='/login'>Login</Link></h1>
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;