import React from 'react';

const Button = (props) => {
    const buttonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        font: "Trebuchet MS",
        fontWeight: "normal",
        color: "#3b3640",
        minWidth: "80px",
        height: "30px",
        padding: "2px 8px",
        border: "none",
        backgroundColor: "#f2f7f4",
        boxShadow: "2px 2px #edf0ee",
        margin: "10px 20px"
    }

    return(
        <div className="buttonContainer" style={containerStyle} >
            <button className="button" style={buttonStyle} onClick={props.onClick}>
                <p>
                    {props.value}
                </p>
            </button>
        </div>
    )
}

export default Button;