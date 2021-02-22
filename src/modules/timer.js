import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const [time, setTime] = useState(props.time ? props.time : 30);
    const timeLeftStyle = {
      color: time>10 ? (time>20 ? "#3b3640" : "#f5537e") : "#fa0a4a",
      backgroundColor: "#fcfcf7",
      fontWeight: "bolder",
      fontSize: "10vw",
      border: "1px black solid",
      borderRadius: "50%",
      height: "14vw",
      width: "14vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "3px",
      paddingRight: "1px",

    }
    const timerContainerStyle = {
      maxHeight: "15vw",
      padding: "25px 25px",
      backgroundColor: "#fcfcf7",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
        
    useEffect(() => {
        let timer = setInterval(() => {
          setTime((t) => t-1);
          console.log('still running');
        }, 1000);
        return() => {
          clearInterval(timer); 
          console.log('cleaned up')
        }  
      }, []);
    return(
        <div className="timerContainer" style={timerContainerStyle} >
            <p className="timeLeft" style={timeLeftStyle}>
                {time>0 ? time : 0} 
            </p>
            
        </div>
    )
}

export default Timer;