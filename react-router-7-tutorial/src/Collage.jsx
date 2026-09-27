import React from 'react'
import {NavLink, Outlet} from 'react-router'

const Collage = () => {
  return (
    <div className='collage' style={{textAlign:"center"}}>
        <h1>Collage Page </h1>
       <div>
       <NavLink to="/">Go Back To Home Page</NavLink>
       </div>
        <NavLink className="Link" to="">Student</NavLink>
        <NavLink className="Link" to="departments">Departments</NavLink>
        <NavLink className="Link" to="collageDetails">Collage Details</NavLink>
        <Outlet />
    </div>
  )
}

export default Collage