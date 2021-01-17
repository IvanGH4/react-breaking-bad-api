import React from 'react'
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return(
            <nav className="navbar">
                <h2>Breaking Bad</h2>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/list'>List</NavLink>
                    </li>
                </ul>
            </nav>
    )
}

export default Nav;