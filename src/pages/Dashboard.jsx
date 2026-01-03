import './Dashboard.css';
import '../App.css';
import NavBarDash from '../components/NavBarDash.jsx';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <NavBarDash />
            <div className="dashboard-content">
                <h1>Welcome to the Dashboard</h1>
            </div>
        </div>
    );
}

export default Dashboard;