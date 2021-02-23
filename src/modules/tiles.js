import React from 'react';

const Tile = (props) => {
    return(
        <div className="tile" onClick={props.onClick}>
            <p className="tile-content">
                {props.value}
            </p>
        </div>
    )
}

export default Tile;