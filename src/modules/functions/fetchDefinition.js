

const fetchDefinition = (word) => {
    const url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=";
    const query = word;
    const call = url+query;
    console.log('fetchDef has been called');
    const theData = fetch(call, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "545bb288aamsh78de795e35f307bp1855e1jsn21e4caf72047",
            "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com"
        }
    })
    .then(response => {
        if(response.ok) {
            console.log('fetch response: ' + response)
            return response.json();
        }
        throw new Error('Request Failed!');
    }, networkError => console.log(networkError.message)
    )
    .then(data => {
        console.log('2nd then, data: ' + data);
        console.log('2nd then, data.list.length: ' + data.list.length);
        console.log('2nd then, data.list.length: ' + data.list.length);
        if(data.list.length>0) {
            return data.list
        }
        else {
            return false
        }
    })
    .catch(error => console.log('ERROR'))   
}

export default fetchDefinition;