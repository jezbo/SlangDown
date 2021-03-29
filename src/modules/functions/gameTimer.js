const gameTimer = (time, callback) => {
    const timeoutCallback = () => {
      callback('end')
      clearTimeout(timer);
    }
    const timer = setTimeout(timeoutCallback, time*1000)
}

export default gameTimer;