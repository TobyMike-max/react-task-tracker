import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({title}) => {
  return (
    <div className="navbar">
      <h1>{title}</h1>
      <input placeholder="Search"/>
      <h4>Icons</h4>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'DoTrack'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar;
