import React, { useState, useRef } from 'react';


const DropDownMenu = (props) => {
    const activeStyle = {
        transform: "rotate(0deg)",
        boxShadow: "0.1vw 0.1vw rgba(0, 81, 255, 0.447)",
        paddingTop : "0.3vw",
        paddingRight: "0.25vw",
        color: "rgba(0, 81, 255)",
        backgroundColor: "rgba(0, 0, 0, 0)",
    }
    const inactiveStyle = {
        transform: "rotate(90deg)",
        boxShadow: "0.1vw -0.1vw gray",
        padding: "0 0 0.2vw 0.2vw",
        backgroundColor: "rgba(0, 0, 0, 0)",
    }
    const [isActive, setIsActive] = useState(false);
    const dropdownRef = useRef(null);
    const clickHandler = (e) => {
        setIsActive(!isActive);
    }
    return (
        <div className="menu-div" >
            <button style={isActive ? activeStyle : inactiveStyle} className="menuButton" onClick={clickHandler}>
                {isActive? 'X' : '|||'}
            </button>
            <p ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`} > 
                Howdy.
            </p>
        </div>
    ); 
}

export default DropDownMenu;

