import React from 'react'

const Login = ({ isLoginOpen }) => {
  return (
    <form action="" className={`login-form ${isLoginOpen ? 'active' : ''}`}>
      <h3>login form</h3>
      <input type="email" placeholder="enter your email" className="box" />
      <input
        type="password"
        placeholder="enter your password"
        className="box"
      />
      <div className="remember">
        <input type="checkbox" name="" id="remember-me" />
        <label for="remember-me">remember me</label>
      </div>
      <input type="submit" value="login now" className="btn" />
      <p>
        forget password? <a href="#">click here</a>
      </p>
      <p>
        don't have an account? <a href="#">create one</a>
      </p>
    </form>
  )
}

export default Login;