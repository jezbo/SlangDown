import React, { useState, useRef } from 'react';


const DropDownMenu = (props) => {
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);
    const clickHandler = (e) => {
        setIsActive(!isActive);
        console.log(isActive)
    }
    return (
        <div className="menu-div" >
            <button className="menuButton" onClick={clickHandler}>
                |||
            </button>
            <p ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`} > 
                Find the longest slang word before the time runs out!
            </p>
        </div>
    ); 
}

export default DropDownMenu;

