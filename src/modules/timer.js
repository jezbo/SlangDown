import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const [time, setTime] = useState(props.time ? props.time : 30);
    
    const timeLeftStyle = {
      color: time>10 ? (time>20 ? "#3b3640" : "#f5537e") : "#fa0a4a",
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
        <div className="timerContainer" >
            <p className="timeLeft" style={timeLeftStyle}>
                {time>0 ? time : 0} 
            </p>
            
        </div>
    )
}

export default Timer;