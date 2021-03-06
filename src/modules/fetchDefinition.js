

const fetchDefinition = (word) => {
    const url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=";
    const query = word;
    const call = url+query;
    const theData = fetch(call, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "545bb288aamsh78de795e35f307bp1855e1jsn21e4caf72047",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('list length: ' + data.list.length)
        if(data.list.length>0) console.log('data: ' + JSON.stringify(data.list[0].thumbs_up))
        return data.list;
    }) 
    return theData;
}

export default fetchDefinition;