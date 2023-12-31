import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const NavItems = 
        <>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link className="active:bg-red-400" to="#about">
                    About
                </Link>
            </li>
            <li>
                <Link to="#skills">Skills</Link>
            </li>
            <li>
                <Link to="#projects">Projects</Link>
            </li>
            
            <li>
                <Link to="#contacts">Contacts</Link>
            </li>


        </>
        
        return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">

                    <h1 className='text-emerald-800'>Naimun Nahar</h1>


                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-violet-700">
                    {NavItems}
                </ul>
            </div>

        </div>



        );
};

        export default NavBar;