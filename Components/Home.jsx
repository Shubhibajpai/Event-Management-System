import React from 'react';
import '../css/home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="imgcontainer">
      <img src="./images/17.JPG" alt="" />
    </div>
    <div className="container">
           <h2 className="heading">Simplify Event Planning &amp; Execution</h2>
           <p>Organize events seamlessly, enhance attendee engagement, and gain valuable insights from data – all with EventEase, your one-stop solution for effortless event management.</p>
           <ul className="loginlink">
                  <li><Link className="btnlink" to="/Login">Login with existing account</Link></li>
                  <li><Link className="btnlink" to="/SignUp">Create Account</Link></li>
            </ul>
    </div>
    <Footer/>
  
    </>
  );
}
