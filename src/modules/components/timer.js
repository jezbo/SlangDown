/*
  Deprecated Timer
*/

// import React, { useState, useEffect } from 'react';

// const Timer = (props) => {
        
//     useEffect(() => {
//         let timer = setInterval(() => {
//           setTime((t) => t-1);
//           console.log('still running');
//         }, 1000);
//         return() => {
//           clearInterval(timer); 
//           console.log('cleaned up')
//         }  
//       }, []);
//     return(
//         <div className="timerContainer" >
//             <p className="timeLeft">
//                 {props.time>0 ? props.time : 0} 
//             </p>
            
//         </div>
//     )
// }

// export default Timer;