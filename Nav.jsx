import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/viewAll"}>View All</NavLink>
    </div>
  )
}

export default Nav