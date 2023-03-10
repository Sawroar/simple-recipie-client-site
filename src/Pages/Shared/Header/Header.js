import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthoContext } from '../../../context/AuthProvider';
import logo from './../../../Assets/logo/logo.svg'

const Header = () => {
    const { user, logOut } = useContext(AuthoContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        {
            user?.email ?
                <>
                    <li><Link to='/orders' className='font-semibold'>Reviews</Link></li>
                    <li><Link to='/login' onClick={handleLogOut} className='font-semibold'>LogOut</Link></li>
                </>
                :
                <li><Link to='/login' className='font-semibold'>Login</Link></li>
        }
        <li><Link to='/signup' className='font-semibold'>SignUp</Link></li>
        <li><Link to='/blog' className='font-semibold'>Blog</Link></li>
    </>
    return (
        <div className="navbar pt-12 bg-gray-200 rounded-lg py-15 lg:px-20 shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"> <img height={'80px'} width={'60px'} src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a href="/" className="btn">Get started</a>
            </div>
        </div>
    );
};

export default Header;