import React from 'react'
import Navbar from './Navbar';
import '../css/weddingdecor.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default function Weddingdecor() {
  return (
    <div>
       <Navbar/>
       <div className="section1">
        <div className="img4">
          <img src="/images/wedding.jpg" alt="" />
        </div>
       </div>
       <div className="section2">
        <div className="left">
          <button>SERVICE</button>
          <h2>Wedding Decor</h2>
          <p>EventEase– is Barielly based Event Planning & Wedding décor company</p>
          <p>Having officially started the journey 2 years ago, we may sound young but our team comprises young members who each bring to the table ,an experience close to a decade in consumer services, events and marketing.</p>
            <p>We transfer your special occasion into an unforgettable experience</p>
            <button><Link to="/BookNow">BookNow</Link></button>
        </div>
        <div className="right">
          <img src="/images/wed1.png" alt="" />
        </div>
       </div>
       <Footer/>
    </div>
  )
}
