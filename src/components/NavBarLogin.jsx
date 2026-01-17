import TickTrackSiteLogo from '/TickTrackSiteLogo.png'
import './NavBar.css'

export default function NavBarLogin() {
  return (
    <>
      <div className="NavigationBar">
        <div className="logo">
          <img src={TickTrackSiteLogo} alt="TickTrack Logo" width="40" height="40"/>
        </div>
        <label style={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>TickTrack</label>
      </div>
    </>
  )
}
