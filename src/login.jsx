import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if(data.status == 200){
        console.log("logged in")
    }
  };

  return (
    <div className='login'>
      <h2 className="welcome">Welcome IITR-Junta</h2>
      <form onSubmit={handleLogin}>
        <div className="form-field">
          <input
            type="email"
            placeholder="Email / Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <button className="btn" type="submit">Log in</button>
        </div>
      </form>
      <div id="result">{result}</div>
    </div>
  );
}

export default Login;