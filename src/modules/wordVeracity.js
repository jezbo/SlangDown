import fetchDefinition from './fetchDefinition';

const veracityOfDefinitions = async (word) => {
    const result =  await fetchDefinition(word);
    const definitionNo = result.length;
    const minThumbsUp = 100;
    let i = 0;
    let veracious = false;
    if(definitionNo>0) console.log('thumbs_up: ' + JSON.stringify(result[i].thumbs_up));
    const veracity = () => {
        if(definitionNo>1) {
            while(i<definitionNo && veracious===false) {
                console.log(JSON.stringify(result[i].thumbs_up)>minThumbsUp)
                JSON.stringify(result[i].thumbs_up)>minThumbsUp ? 
                    veracious=true : veracious=false;
                i++;
               }
            } 
        else veracious=false;   

        console.log('is it veracious?: ' + veracious)
    }   
    veracity();
    return veracious
}

export default veracityOfDefinitions;