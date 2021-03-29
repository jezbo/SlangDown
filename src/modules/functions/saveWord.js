const saveWord = (word,properties) => {
    const newWord = word.toLowerCase();
    const wordIsUnique = !properties.savedWords.includes(newWord);
    if(wordIsUnique) properties.setSavedWords((prev) => [...prev, newWord])
    return wordIsUnique;   
}
  

export default saveWord;