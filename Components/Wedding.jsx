import React from 'react'
import Navbar from './Navbar';
import '../css/weddingdecor.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';
export default function Wedding() {
  return (
    <div>
       <Navbar/>
       <div className="section1">
        <div className="img4">
          <img src="/images/weddingdecor.jpg" alt="" />
        </div>
       </div>
       <div className="section2">
        <div className="left">
          <button>SERVICE</button>
          <h2>Wedding Management</h2>
          <p>We provide a one-stop shop for all of your wedding demands. EventEase is a wedding planning company situated in Bareilly, Uttar Pradesh, that offers full-service, bespoke wedding planning. Our services are available all throughout Uttar Pradesh and India.</p>
          <p>Indian weddings are lavish and colorful affairs that usually include numerous functions. EventEase will help you with all aspects of wedding planning, including venues and locations, décor and themes, photography and videography, and budgeting</p>
           <button><Link to="/BookNow">BookNow</Link></button>
        </div>
        <div className="right">
          <img src="/images/wedmanagement.png" alt="" />
        </div>
       </div>
       <Footer/>
    </div>
  )
}
