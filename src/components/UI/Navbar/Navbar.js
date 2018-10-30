import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
    <div>
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item ">
                            <NavLink class="nav-link" to='/home'>Home</NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink class="nav-link" to='/admin'>Admin</NavLink>
                        </li>

                        <li class="nav-item">
                            <NavLink class="nav-link" to='/profile'>Profile</NavLink>
                        </li>
                    </ul>
                </div>
        </nav>
    </div>
     );
}
 
export default Navbar;