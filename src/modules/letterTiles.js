import React from 'react';
import Tile from './tiles.js';

const LetterTiles = (props) => {
    const tileContents = ["W","O","R","D","Y","D","O","W","N"];
    const selectLetters = () =>{
        if(props.letters===9) {
            props.letters.forEach((e,i) => {
                tileContents[i] = e;
            })
        }
    }
    selectLetters();
    const tiles = 
        tileContents.map((e,i) => {
            return <Tile className={i} value={e} />
        });

    return(
        <div className="letterTiles-container">
            {tiles
            }
        </div>
    )
}

export default LetterTiles;