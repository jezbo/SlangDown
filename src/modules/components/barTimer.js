import React from 'react';

const BarTimer = (props) => {
    const properties = props.properties;

    const time = properties.time ? properties.time : 60;
    const style={
        "--duration": time,
    }
    return (
        <div className="barTimer" data-style="smooth" style={style}>
            <div></div>
        </div>
    )

}

export default BarTimer;