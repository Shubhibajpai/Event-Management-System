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
          <img src="/images/Product1.png" alt="" />
        </div>
       </div>
       <div className="section2">
        <div className="left">
          <button>SERVICE</button>
          <h2>Product Launch</h2>
          <p>Elevate Your Product Launch with EventEase Management</p>
          <p>At EventEase Management, we specialize in orchestrating product launches that captivate your target audience and leave a lasting impression. With our blend of creative conceptualization, cutting-edge technology, and meticulous execution, we ensure your new product makes a grand entrance into the market.</p>
          <button><Link to="/BookNow">BookNow</Link></button>
        </div>
        <div className="right">
          <img src="/images/Product.png" alt="" />
        </div>
       </div>
       <Footer/>
    </div>
  )
}
