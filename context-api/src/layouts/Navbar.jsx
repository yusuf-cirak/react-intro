import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Navbar() {
  
  return (
    
    <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-10">

      <ul className="navbar-nav ml-auto">
        <li className="nav-item active p-3">
          <Link to = "/" className = "nav-link">Home</Link>
        </li>
        <li className="nav-item active p-3">
          <Link to = "/user/add" className = "nav-link">Add User</Link>
       </li>
      
      </ul>
    
    </nav>
    
  )
}
Navbar.propTypes = {
  title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
  title : "Default App"
}
export default Navbar;
