import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TickTrackSiteLogo from '/TickTrackSiteLogo.png'
import './NavBar.css'

export default function NavBarDash() {
  const navigate = useNavigate();
  
  const handleDash = () => {
    navigate("/dashboard");
  }
  return (
    <>
      <div className="NavigationBar">
        <div className="Navigation" onClick={handleDash}>
          <div className="logo">
            <img src={TickTrackSiteLogo} alt="TickTrack Logo" width="40" height="40"/>
          </div>
          <label style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>TickTrack</label>
        </div>
      </div>
    </>
  )
}
