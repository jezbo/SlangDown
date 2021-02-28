import React from 'react';
import SingleTile from './singleTile';

const Tiles = (props) => {
    const tileContents = ["S","L","A","N","G","D","O","W","N"];
    const selectLetters = () => {
        if(props.letters.length===9) {
            props.letters.forEach((e,i) => {
                tileContents[i] = e;
            })
        }
    }
    selectLetters();

    const tiles = 
        tileContents.map((e,i) => {
            return (
                <SingleTile key={i.toString()} value={e} />
            )
        });

    return(
        <div className="letterTiles-container">
            {tiles}
        </div>
    )
}

export default Tiles; 