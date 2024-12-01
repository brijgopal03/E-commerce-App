import React from 'react'
import { HiShoppingCart } from "react-icons/hi";
  import  {NavLink}  from "react-router-dom";

const Navbar = () => {
  return (
    <div>
<div className="flex flex-row justify-between">
    <NavLink to = "/">
      <div>
      <img src="" alt="logo" />
      </div>
    </NavLink>
     <div className='flex flex-row'>
    <NavLink to = "/"> <p>Home</p></NavLink>
      <NavLink to = "/cart"><div><HiShoppingCart /></div></NavLink>
      </div>
    
</div>   

    </div>
  )
}

export default Navbar