import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>TickTrack</h1>
      <p>Manage your tickets more efficiently.</p>
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="person-circle-outline"></ion-icon>
          </span>
          <input type="text"/>
          <label>Username</label>
        </div>
        <div className="input-box">
          <span className="icon">
            <ion-icon name="lock-closed-outline"></ion-icon>
          </span>
          <input type="text"/>
          <label>Password</label>
        </div>
      </div>
    </>
  )
}


export default App
