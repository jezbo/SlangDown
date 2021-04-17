/*
    fetches the definition of the given
    word from the Urban Dictionary API.
*/

const fetchDefinition = (word) => {

    const url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=";
    const query = word;
    const call = url+query;

    //fetch the data
    const theData = fetch(call, {
        "method": "GET",
        "headers": {
            // this is a free but limited API access so I haven't hidden the key
            "x-rapidapi-key": "545bb288aamsh78de795e35f307bp1855e1jsn21e4caf72047",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        if(data.list.length>0) console.log('data: ' + JSON.stringify(data.list[0].thumbs_up))
        //return data from list property
        return data.list;
    }) 
    .catch(error => console.log(error))
    return theData;
}

export default fetchDefinition;