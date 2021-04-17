/*
    Not currently in use - 
    Requires revision to improve letter spread.
    Sets out probability of letter to be chosen
    Chooses letters and returns them in an array 
*/

const chooseLetters = (number) => {
    if(number<1) {console.log('chooseLetters must be passed a number > 0')}
    else{
        let x = Math.ceil(number/100);
        //*********LETTER SPREAD [LETTER,QUOTA]**************
        const letterSpread = [
            ["a",9*x],
            ["b",2*x],
            ["c",2*x],
            ["d",3*x],
            ["e",4*x],
            ["f",2*x],
            ["g",4*x],
            ["h",3*x],
            ["i",9*x],
            ["j",1*x],
            ["k",2*x],
            ["l",4*x],
            ["m",2*x],
            ["n",6*x],
            ["o",8*x],
            ["p",2*x],
            ["q",1*x],
            ["r",4*x],
            ["s",3*x],
            ["t",6*x],
            ["u",4*x],
            ["v",2*x],
            ["w",2*x],
            ["x",1*x],
            ["y",2*x],
            ["z",1*x],
        ];
        const possibleLetters=[];
        // const tickets=[];
        const resultArray = [];
        
        //**********CREATE POSSIBLE LETTERS*************
        letterSpread.forEach((e) => {
            for(let i=0; i<e[1]; i++) {
                possibleLetters.push(e[0].toUpperCase())
            }
        })

        //***************RANDOMISER*********************
        const randomiser = (range) => {
            const randomNo = Math.floor(Math.random()*range);
            return randomNo;
        }
        
        //********CHOOSE AND STORE RANDOM LETTERS*********
        for(let i=0; i<number; i++){
            const range=possibleLetters.length;
            const letterPosition = randomiser(range);
            const letter = possibleLetters[letterPosition];
            console.log('letter' + letter);
            resultArray.push(letter);
            possibleLetters.splice(letterPosition,1);
        }
        return resultArray;
    }
}

export default chooseLetters;