import React from 'react';
const containerStyle = {   
    height: "22px",
    font: "Trebuchet MS",
    display: "flex",
    alignItems: "center",
    width: "150px",
    cursor: "context-menu",
}
const wordStyle = { 
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100px",
    boxShadow: "0px 0.3px 0px 0px grey",
    padding: "2px 15px",
}
const exitStyle = {
    width: "5px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2px 8px",
    textAlign: "center",
    boxShadow: "0px 0.3px 0.3px 0px grey",
    fontSize: "12px",
}
const Word = (props) => {
    return(
       <div className="container" style={containerStyle} >
            <p className="word" style={wordStyle} >
                {props.value}
            </p>
            <p className="exit" style={exitStyle} onClick={props.onClick} >
                x
            </p>
        </div> 
    )
    
}

export default Word;