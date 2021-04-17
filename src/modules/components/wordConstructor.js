/*
    As letters are selected they are added to word state Array
    this prints them using babyTiles.js component on gamePage.
    On endPage prints 'PlayAgain?'
    No effect on startPage.
*/

import BabyTile from './babyTile';
import iterateComponent from '../functions/iterateComponent';

const WordConstructor = (props) => {
    //ease access to state/global var library
    const properties = props.properties;
    
    //change output per state
    const input = properties.gameState==='end' ? properties.endingBabyTiles : properties.word;

    //iterate over input word array as decided above
    const constructedWord = iterateComponent(BabyTile,input,properties);

    //return the list from above
    return constructedWord;
}

export default WordConstructor; 