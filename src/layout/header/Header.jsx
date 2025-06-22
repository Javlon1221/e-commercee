import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Logoo</h2>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/shop"}>Shop</NavLink>
    </header>
  )
}

export default React.memo(Header)