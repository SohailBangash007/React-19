import React from 'react';
import { NavLink, Outlet  } from "react-router";
import  "./Header.css";

const Navbar = () => {
  return (
    <div>
    <div className='Header'>
        <div>
          <NavLink to="/" className="Link"><h1>Logo</h1></NavLink>
        </div>
        <div>
           <ul>
            <li>
                <NavLink to="/" className="Link">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className="Link">About</NavLink>
            </li>
            <li>
                <NavLink to="/product" className="Link">Product</NavLink>
            </li>
            <li>
                <NavLink to="/collage" className="Link">Collage</NavLink>
            </li>
            <li>
                <NavLink to="/user" className="Link">Users</NavLink>
            </li>
            <li>
                <NavLink to="/user/list" className="Link">List</NavLink>
            </li>
           </ul>
        </div>
    </div>
    <Outlet />
    </div>
  )
}

export default Navbar