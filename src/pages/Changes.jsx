import './Changes.css';
import '../App.css';
import NavBarDash from '../components/NavBarDash.jsx';
import ShortcutBar from '../components/ShortcutBar.jsx';

export default function Changes() {
    return (
        
        <div className="changes-container">
            <NavBarDash />
            <ShortcutBar />
            <div className="changes-content">
                <h1>Changes Page</h1>
            </div>
        </div>
    );
}
