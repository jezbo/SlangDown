const removeWord = (index, properties) => {
    properties.setSavedWords((prev) => prev.filter((e,i) => index!==i));
}

export default removeWord;