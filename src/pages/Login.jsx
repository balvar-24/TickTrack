import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import '../App.css';
import NavBarLogin from '../components/NavBarLogin.jsx';

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  /*
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    const loginSuccess = mockLogin(username, password);
    
    if (loginSuccess){
      navigate("/dashboard");
    }
    else {
      setError("Invalid username or password");
    }
  }
  */
  const handleLogin = () => {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="login-container">
        <NavBarLogin />

        <h1>TickTrack</h1>
        <p>Manage your tickets more efficiently.</p>
        <div className="login-box">
          <h2>Login</h2>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="person-circle-outline">
              </ion-icon>
            </span>
            <input type="username" required/>
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed-outline">
              </ion-icon>
            </span>
            <input type="password" required/>
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox"/>Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="button" onClick={handleLogin}>Login</button>
          <div className="login-register">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
