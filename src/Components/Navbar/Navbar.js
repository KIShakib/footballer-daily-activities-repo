import React from 'react';
import './Navbar.css';
import logo from '../Image/bg2.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-300 shadow-xl lg:px-20">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case lg:text-2xl" href='/'>Footballer Daily Practice Activities</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={logo} alt='Shakib' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between" href='/'>
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a href='/'>Settings</a></li>
                            <li><a href='/'>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;