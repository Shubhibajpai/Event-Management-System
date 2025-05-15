import React,{useState} from 'react'
import '../css/signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    axios.post('http://127.0.0.1:3001/register',{name,email,password,confirmPassword})
    .then(result => console.log(result))
    .catch(err=> console.log(err))
    navigate('/')
   
  };
  return (
    <div>
      <div className="form-sign">
            <form onSubmit={handleSubmit}>
                <h1 className="head-sign">Sign Up</h1><br/><br/>
                <input type="text" className="input-sign" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/><br/><br/>
                <input type="email"className="input-sign" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value) }/><br/><br/>
                <input type="password" className="input-sign" placeholder="Enter your password" value={password}  onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <input type="password" className="input-sign" placeholder="Confirm password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/><br/><br/>
                <button className="btn-sign" type='submit'>Sign up</button><br/>
                <p className="para">Already have an account? <Link to="/Login">Login here</Link></p>
            </form>
        </div>
    </div>
  )
}
