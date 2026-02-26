import React, { use, useState } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../ProViderr/AuthenPro';

const Navbar = () => {
    const { usser, LogOutt } = use(AuthContext);
    // State to handle mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    let handleLogOut = () => {
        LogOutt().then(() => {
            alert("Sign-out successful.")
        }).catch((error) => {
            console.log("An error happened.dddddddd", error);
        });
    }

    return (
        <nav className="relative bg-white p-4">
            <div className="flex items-center justify-between">
                {/* Logo / User Info */}
                <div className="flex-shrink-0">
                    {usser?.name}{usser?.email}
                </div>

                {/* Desktop Links (Hidden on mobile/tablet) */}
                <div className="navv text-accent hidden md:flex gap-6">
                    <NavLink to="/" >Home </NavLink>
                    <NavLink to="/about" >About </NavLink>
                    <NavLink to="/career" >Career </NavLink>
                </div>

                {/* Right Side: Auth + Mobile Toggle */}
                <div className="login-btnn flex items-center gap-5">
                    <img
                        className='w-10 h-10 rounded-full object-cover'
                        src={`${usser ? usser.photoURL : userIcon}`}
                        alt="User"
                    />

                    {/* Desktop Login Button */}
                    <div className="hidden md:block">
                        {usser ?
                            <button
                                onClick={handleLogOut}
                                className='btn btn-primary px-9'>Log Out</button> :
                            <Link to="/authen/login" className='btn btn-primary px-9'>Login</Link >
                        }
                    </div>

                    {/* Hamburger Icon (Visible only on mobile/tablet) */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md z-50 flex flex-col p-4 gap-4 border-t">
                    <NavLink onClick={() => setIsOpen(false)} to="/" >Home </NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to="/about" >About </NavLink>
                    <NavLink onClick={() => setIsOpen(false)} to="/career" >Career </NavLink>
                    <hr />
                    {usser ?
                        <button
                            onClick={() => { handleLogOut(); setIsOpen(false); }}
                            className='btn btn-primary w-full'>Log Out</button> :
                        <Link onClick={() => setIsOpen(false)} to="/authen/login" className='btn btn-primary w-full'>Login</Link >
                    }
                </div>
            )}
        </nav>
    );
};

export default Navbar;