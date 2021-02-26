import React, { useState } from 'react';

const Tiles = (props) => {
    const [tileState, setTileState] = useState(false);

    const onClick = (e) => {
        setTileState(!tileState)
    }

    const tileContents = ["S","L","A","N","G","D","O","W","N"];
    const selectLetters = () => {
        if(props.letters===9) {
            props.letters.forEach((e,i) => {
                tileContents[i] = e;
            })
        }
    }
    selectLetters();
    const tiles = 
        tileContents.map((e,i) => {
            return (
                <button className="tile" key={i.toString()} onClick={onClick}>
                    {e}
                </button>
            )
        });

    return(
        <div className="letterTiles-container">
            {tiles}
        </div>
    )
}

export default Tiles;