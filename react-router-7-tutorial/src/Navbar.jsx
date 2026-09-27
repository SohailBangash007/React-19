import React from 'react';
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
          <Link to="/"><h1>Home</h1></Link>
        <Link to="/about"><h1>About</h1></Link>
        <Link to="/product"><h1>Product</h1></Link>
    </div>
  )
}

export default Navbar