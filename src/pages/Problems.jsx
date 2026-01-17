import './Problems.css';
import '../App.css';
import NavBarDash from '../components/NavBarDash.jsx';
import ShortcutBar from '../components/ShortcutBar.jsx';

export default function Problems() {
    return (
        
        <div className="problems-container">
            <NavBarDash />
            <ShortcutBar />
            <div className="problems-content">
                <h1>Problems Page</h1>
            </div>
        </div>
    );
} 