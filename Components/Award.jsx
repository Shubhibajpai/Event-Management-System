import React from 'react'
import Navbar from './Navbar';
import '../css/wedding.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default function Conference() {
  return (
    <div>
       <Navbar/>
       <div className="section1">
        <div className="img4">
          <img src="/images/award.jpg" alt="" />
        </div>
       </div>
       <div className="section2">
        <div className="left">
          <button>SERVICE</button>
          <h2>Award Ceremony Services</h2>
          <p>Elevating Every Achievement with EventEase</p>
          <p>
          In the world of recognition and celebration, EventEase Management stands as your premier partner in orchestrating award ceremonies that resonate with prestige, emotion, and unforgettable moments. Our dedication to excellence transforms these occasions into a grand celebration of success, inspiring attendees and honorees alike. Businesses are involved in the ceremony. Such magnanimous events should be handled with care to prevent any sort of blunder.</p>
          <button><Link to="/BookNow">BookNow</Link></button>
        </div>
        <div className="right">
          <img src="/images/award1.jpg" alt="" />
        </div>
       </div>
       <Footer/>
    </div>
  )
}

