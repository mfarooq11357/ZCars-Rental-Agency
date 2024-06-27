// SignIn.js

import React from 'react';
import './Login.css'; // Assuming your styles.css is in the same directory

function Login() {
  return (
    <>  <div className="background"></div>  
    <div className="page">
    <div className="login-container">
      <form action="login.html" method="POST">
        <h2>Sign In</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
    </div>
    </>
  );
}


export default Login;
