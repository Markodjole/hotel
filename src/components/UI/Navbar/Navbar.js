import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
    <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item ">
                            <NavLink className="nav-link" to='/home'>Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/admin'>Admin</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to='/profile'>Profile</NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
     );
}
 
export default Navbar;