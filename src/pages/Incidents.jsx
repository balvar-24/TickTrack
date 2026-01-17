import './Incidents.css';
import '../App.css';
import NavBarDash from '../components/NavBarDash.jsx';
import ShortcutBar from '../components/ShortcutBar.jsx';

export default function Incidents() {
    return (
        
        <div className="incidents-container">
            <NavBarDash />
            <ShortcutBar />
            <div className="incidents-content">
                <h1>Incidents Page</h1>
            </div>
        </div>
    );
}
