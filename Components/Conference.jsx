import React from 'react'
import Navbar from './Navbar';
import '../css/wedding.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default function Conference() {
  return (
    <div>
       <Navbar/>
       <div className="section1">
        <div className="img4">
          <img src="/images/Confrence.jpg" alt="" />
        </div>
       </div>
       <div className="section2">
        <div className="left">
          <button>SERVICE</button>
          <h2>Conference Management</h2>
          <p>Conceptualize, Execute, and Engage with EventEase Management</p>
          <p>At EventEase Management, we specialize in creating and managing highly engaging and impactful conferences. With over 2 years of experience, our expertise in event conceptualization, state-of-the-art technical support, and comprehensive participant management ensures your conference stands out.</p>
          <button><Link to="/BookNow">BookNow</Link></button>
        </div>
        <div className="right">
          <img src="/images/Confrence1.jpg" alt="" />
        </div>
       </div>
       <Footer/>
    </div>
  )
}
