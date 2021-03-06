import React from 'react';

const BarTimer = (props) => {
    const time = props.time ? props.time : 60;
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