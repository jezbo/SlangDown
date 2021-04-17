/*A simple timer, a bar that decreases in size incrementally, so it visibly ticks*/

import React from 'react';

const BarTimer = (props) => {
    //Simplify the selection of the App.js props library
    const properties = props.properties;
    //The animation is managed with CSS styling via JSX
    const style={
        "--duration": properties.time,
        display: properties.gameState==='middle' ? 'flex' : 'none',
    }

    //*************************************JSX**************************************
    return (
        <div className="barTimer" data-style="smooth" style={style}>
            <div></div>
        </div>
    )

}

export default BarTimer;