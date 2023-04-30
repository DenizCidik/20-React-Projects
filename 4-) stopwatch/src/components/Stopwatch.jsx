import React, { useState, useEffect } from 'react';

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (time) => {
    const milliseconds = `${time % 1000}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 1000 / 60) % 60)}`.slice(-2);
    const hours = `0${Math.floor(time / 1000 / 60 / 60)}`.slice(-2);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div className="stopwatch">
      <h1>Stopwatch</h1>
      <div className="timer">{formatTime(time)}</div>
      <div className="controls">
        {isRunning ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;