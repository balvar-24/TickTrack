import { useState } from 'react';
import './ShortcutBar.css'

function ShortcutBar() {

    return (
        <div className="shortcut-bar">
            <button type="button">
                Changes
            </button>
            <button type="button">
                Incidents
            </button>
            <button type="button">
                Problems
            </button>
        </div>
    )
}
export default ShortcutBar;