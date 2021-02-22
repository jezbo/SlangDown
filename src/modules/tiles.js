import React from 'react';

const Tile = (props) => {
    const tileStyle = {
        border: "1px solid black",
        boxShadow: "#d1d1d1",
        maxWidth: "4vw",
        maxHeight: "4vw",
        fontSize: "6vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1vw",
        margin: "1vw",
    }
    const pStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid black",
    }

    return(
        <div className="tile" style={tileStyle} onClick={props.onClick}>
            
                {props.value}
           
        </div>
    )
}

export default Tile;