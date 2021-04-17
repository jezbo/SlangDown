/*
    Called by handleButtonClick.
    On submission it takes value in word state array, checks if it 
    is unique against already submitted words and if so saves it 
    to savedWords array leading to its data being fetched and 
    verified or if not unique discarded
*/

const saveWord = (word,properties) => {
    // convert uppercase values of gameTiles to lowercase
    const newWord = word.toLowerCase();

    // check if the word is unique
    const wordIsUnique = !properties.savedWords.includes(newWord);

    // add word to savedWords state array
    if(wordIsUnique) properties.setSavedWords((prev) => [...prev, newWord])
}
  

export default saveWord;