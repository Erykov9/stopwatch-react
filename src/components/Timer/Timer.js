import styles from './Timer.module.scss'
import Button from '../Button/Button';
import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);

  
  
  useEffect(() => {
    let interval;

    if(run) {
      interval = setInterval(() => {
        setTime((prevValue) => prevValue + 10);
      }, 10);
    } else if (!run) {
      clearInterval(interval)
    }
    return () => clearInterval(interval);

  }, [run]);


  return (
    <div className={styles.header}>
      <h1 className={styles.test}>The Stopwatch - REACT</h1>
      <p>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>:
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>:
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>.
        <span>{("0" + ((time / 1) % 100)).slice(-2)}</span>
      </p>
      <div className={styles.btns}>
        <Button onClick={() => setRun(true) } btnText="Start"/>
        <Button onClick={() => setRun(false)} btnText="Stop"/>
        <Button onClick={() => setTime(0)} btnText="Reset"/>
      </div>
    </div>
  )

}
export default Timer;