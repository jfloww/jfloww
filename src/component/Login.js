import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';
import Footer from './footer'

function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  
  const handleSubmit = event => {
    event.preventDefault();
    // check if username and password are correct
    if (username === 'dol-pal-ee' && password === '981001') {
      props.onLogin();
    } else {
      alert('Invalid username or password!');
    }
  };
  
  return (
    <div className='login_page'>
        <form onSubmit={handleSubmit}>
            <img className='gallary_img' src="images/test.JPG"/>
            <h2 className='test'>Login</h2>
            <label className='test'>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <br />
            <label className='test'>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
        <Footer/>
    </div>
  );
}

export default Login;
