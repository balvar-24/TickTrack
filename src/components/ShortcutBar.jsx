import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ShortcutBar.css'

export default function ShortcutBar() {
    const navigate = useNavigate();

    const handleChanges = () => {
    navigate("/changes");
    }
    const handleIncidents = () => {
    navigate("/incidents");
    }
    const handleProblems = () => {
    navigate("/problems");
    }

    return (
        <div className="shortcut-bar">
            <button type="button" onClick={handleChanges}>
                Changes
            </button>
            <button type="button" onClick={handleIncidents}>
                Incidents
            </button>
            <button type="button" onClick={handleProblems}>
                Problems
            </button>
        </div>

    )
}
