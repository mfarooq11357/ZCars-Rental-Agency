import React from 'react';
import './Signup.css';


const SignUp = () => {
  return (
    <>  <div className="background"></div> 
    <div className="page">
    <div className="bcontainer">
      <div className="inner">
      <h1>Sign Up</h1>
      <form className="form">
        <div className="formGroup">
          <label htmlFor="username" className="label">Username</label>
          <input type="text" id="username" name="username" className="input" />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="label">Email</label>
          <input type="email" id="email" name="email" className="input" />
        </div>
        <div className="formGroup">
          <label htmlFor="password" className="label">Password</label>
          <input type="password" id="password" name="password" className="input" />
        </div>
        <div className="formGroup">
          <label htmlFor="confirmPassword" className="label">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" className="input" />
        </div>
        <button type="submit" className="button">Sign Up</button>
      </form>
      </div>
    </div>
    </div>\
     </>
  );
};

export default SignUp;
