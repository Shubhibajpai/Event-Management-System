import React,{useState} from 'react'
import '../css/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/login',{email,password})
    .then(result => {
      console.log(result)
      if(result.data === "Success"){
        console.log("done")
        alert("Login successfully");
        navigate('/')
      }
    })
    .catch(err=> console.log(err))
   
  }
  return (
    <div>
        <div className="form">
        <form className="formfield" onSubmit={handleSubmit}>
            <h1 className="head">Login Here</h1><br/><br/>
            <label className="label">Email</label>
            <input type="email" className="input1"placeholder="Enter your email" value={email}  onChange={(e) => setEmail(e.target.value)}/><br/><br/>
            <label className="label">Password</label>
            <input type="text" className="input1" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/><br/>
            <button className="btn-login" type='submit'>Login</button><br/>
            <p className="para">Don't have an account? <Link to="/SignUp"> Sign Up</Link></p>
        </form>
        </div>
    </div>
  )
}
