import React from 'react';

const BarTimer = (props) => {
    const properties = props.properties;

    const style={
        "--duration": properties.time,
        display: properties.gameState==='middle' ? 'flex' : 'none',
    }
    return (
        <div className="barTimer" data-style="smooth" style={style}>
            <div></div>
        </div>
    )

}

export default BarTimer;