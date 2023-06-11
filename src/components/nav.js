import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

        <ul>
          <li><Link to={"/"}>Dashboard</Link></li>
          <li><Link to={"/cart"}>Cart</Link></li>
        </ul>
      
    </div>
  )
}

export default NavBar
