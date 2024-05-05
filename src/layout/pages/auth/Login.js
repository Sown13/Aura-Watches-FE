import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../../../css/layout/pages/auth/LoginStyles.css";
import facebookLogo from '../../../images/facebook.png';
import googleLogo from '../../../images/google.png';
import { useCookies } from 'react-cookie';
import { UserContext } from '../../../context/UserContext';

const Login = () => {

  const { handleLogout, cookies, setCookie, removeCookie, isLoggedIn, setIsLoggedIn, handleLogin } = useContext(UserContext);

  // useEffect(() => {
  //   if (cookies.user) {
  //     navigate('/');
  //   };
  // }, [])

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(showPassword => !showPassword);
  };

  const loginUser = async (event) => {
    event.preventDefault();

    try {

      const response = await axios.get('http://localhost:8080/users');
      const users = response.data;


      const foundUser = users.find(
        (user) => user.username === credentials.username && user.password === credentials.password
      );

      if (foundUser) {
        handleLogin(foundUser);
        toast.success('Login Successful!');
        // navigate('/');
      } else {
        toast.error('Login Failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='login-container d-flex justify-content-center'>
      <div className="background-image">
        <img className='login-bg-image' src="/img/register.png"></img>
      </div>
      <div>
        <a className="logo-aura-watch" href={"/"}>
          <img src="/img/logo.svg" alt="logo"></img>
        </a>
      </div>

      <div className="Login d-flex flex-column justify-content-center" style={{padding:"5%"}}>
        <h2>Login</h2>
        <form onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              className="form-control"
              id="username"
              required
              value={credentials.username}
              onChange={handleInputChange}
              name="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                required
                value={credentials.password}
                onChange={handleInputChange}
                name="password"
              />
              <i onClick={togglePasswordVisibility} className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
        <h6>Already have a account? <Link to="/register">Register</Link></h6>

        <div className='other-login'>
          <button className="log-facebook">
            <img src={facebookLogo} />
            Sign in with Facebook
          </button>
          <button className="log-google">
            <img src={googleLogo} />
            Sign in with Google
          </button>
        </div>
      </div>

    </div>
  );
};

export default Login;