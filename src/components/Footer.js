import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const getDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer>
      <p>Copyright &copy; {getDate()}</p>
      <Link to="/about"> About </Link>
    </footer>
  )
}


export default Footer;
