import { useState } from 'react'
import TickTrackSiteLogo from '/TickTrackSiteLogo.png'
import './App.css'

function App() {
  return (
    <>
      <div className="NavigationBar">
        <div className="logo">
          <img src={TickTrackSiteLogo} alt="TickTrack Logo" width="40" height="40"/>
        </div>
        <label style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>TickTrack</label>
      </div>

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
        <button type="submit" className="">Login</button>
        <div className="login-register">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </div>
    </>
  )
}


export default App
