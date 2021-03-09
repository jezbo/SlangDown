import React, { useState } from 'react';
import SingleTile from './singleTile';
import BabyTile from './babyTile';
import Button from './button';
import iterateComponent from './iterateComponent'

const Tiles = (props) => {
    const newWord = [];
    const [word, setWord] = useState(newWord)
    const [originIndex, setOriginIndex] = useState([]);
    const bigTileSwitches = {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    }
    const [bigTileState, setBigTileState] = useState(bigTileSwitches);

    const addLetter = (event, index) => {
        setWord([...word, event.target.value]);
        setOriginIndex([...originIndex, index])
        setBigTileState((prevState) => {
            let change = {...prevState};
            change[index]=true;
            console.log(change)
            console.log(bigTileState)
            return change
            
        })
    }
    
    const removeLetter = (event, index, origin) => {
       setWord((prevState) => prevState.filter((element,i) => i!==index));
       setBigTileState((prevState) => {
        let change = {...prevState};
        change[origin]=false;
        return change
       });
       setOriginIndex((prevState) => prevState.filter((element,i ) => i!==index))
    }

    const saveWord = () => {
        if(word.length>0) {
            let savedWord = word.join('');
            props.saveWord(savedWord);
            setWord([]);
            setOriginIndex([]);
            setBigTileState(bigTileSwitches);
        } 
    }
    
    const babyTilesProps = {
        originIndexes: originIndex,
        removeLetter:  removeLetter
    }
    const babyTiles = iterateComponent(BabyTile,word,babyTilesProps)

    const tileContents = ["S","L","A","N","G","D","O","W","N"];
    const selectLetters = () => {
        if(props.letters && props.letters.length>0) {
            props.letters.forEach((e,i) => {
                tileContents[i] = e;
            })
        }
    }
    selectLetters();

    const tilesProps = {
        addLetter: addLetter,
        switch: bigTileState
    }
    const tiles = iterateComponent(SingleTile,tileContents,tilesProps);

    return(
    <div className="gameTiles">
         <div className="letterTiles-container">
            {tiles}
        </div>
        <div className="babyTiles-container">
            {babyTiles}
        </div>
        <div className="button-container">
            <Button 
                value="Enter" 
                onClick={saveWord}
            />
        </div>
    </div>
       
    )
}

export default Tiles; 