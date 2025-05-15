import React,{useState} from 'react'
import '../css/contact.css';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Contact() {

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
      event.preventDefault();
  
      
  
      axios.post('http://127.0.0.1:3001/contact',{name,email,phone,message})
      .then(result => console.log(result))
      .catch(err=> console.log(err))
      navigate('/')
     
    };
  return (
    <>
        <Navbar/>
        <div className="main">
            <div className="div1">
                We’d love to hear from you.
            </div>
            <div className="div2">
                Connect for collaboration and projects
            </div>
         </div>
    
    <div className="form-cont">
        <h1 className='head12'>Send a message</h1>
        
        <form onSubmit={handleSubmit}>
        <input type="text" className="input-field" placeholder="Name"  value={name} onChange={(e)=> setName(e.target.value)}/><br/><br/><br/>
        <input type="email"className="input-field" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value) }/><br/><br/><br/>
        <input type="number" className="input-field" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/><br/>
        <input type="text" className="input-field-msg" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}/><br/><br/><br/>
        <button type="submit" className="btn-field">Send a msg</button>
        </form>
        
    </div>
    <div className="form-footer">
        <div className="footer1">
            <h1>GET IN TOUCH</h1>
            <h2>Contact us</h2>
            <p>We are here to answer any question you may have.</p>
        </div>
        <div className="footer2">
            <h1>ADDRESS</h1>
            <p>
                V1, Gala No. 24, Mehra Industrial Estate,
                Andheri – Kurla Road, Near DSK
                Madhuban, Opp. Sakinaka Telephone Exchange,
                Sakinaka, Andheri (E), Mumbai – 400 072.</p>
        </div>
        <div className="footer3">
            <h1>CONNECT</h1>
           <p><i className="fa-solid fa-envelope"></i>  Example@gmail.com</p>
            <p><i className="fa-solid fa-phone-flip"></i>  XXXX-XXX-XXX</p>
        </div>
    </div>
    <Footer/>
    </>
  )
}
