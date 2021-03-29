const selectLetters = (properties) => {
    if(properties.gameState==='end') properties.gameTiles = properties.gameOverTiles;
    else if(properties.letters && properties.letters.length>0) {
        properties.letters.forEach((e,i) => {
            properties.gameTiles[i] = e;
        })
    }
}

export default selectLetters;