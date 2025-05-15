import React from 'react'
import '../css/navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
     <header id="header" className="navheader">
        <div id="logo" className="fl_left">
          <h1><Link to="/">EventEase</Link></h1>
        </div>

        <nav id="mainav" className="fl_right">
          <ul className="clear">
            <li><Link to="/" className='abc'>Home</Link></li>
            <li><Link to="/Services" className='abc'>Services</Link></li>
            <li ><Link to="/BookNow" className='abc'>BookNow</Link></li>
            <li ><Link to="/About" className='abc'>About Us</Link></li>
            <li><Link to="/Contact" className='abc'>Contact</Link></li>
          </ul>
        </nav>
        </header>
      
     
  )
}
