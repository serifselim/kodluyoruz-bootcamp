import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../hooks/provider';
import Svg from '../svg';
import useSizing from '../hooks/sizing';
import styles from './Game.module.css';

function Game() {
  const [w, h] = useSizing();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [sira, setSira] = useState(0);

  // Hooks
  // const [result, setResult] = {

  // };

  // Context
  const {
    setAllQuestion,
    score,
    tour,
    questionsArr,
    currentQuestion,
    currentNumber,
    checkAnswer,
    bgColor,
    isClick
  } = useContext(Context);

  useEffect(() => {
    setAllQuestion();
  }, []);

  useEffect(() => {
    const ratio = 1.7;

    if (w / h > ratio) {
      setSize({
        width: h * ratio,
        height: h,
      });
    }
    else {
      setSize({
        width: w * 0.9,
        height: (w * 0.9) / ratio,
      });
    }
  }, [w, h]);

  return (
    <div style={{ background: bgColor }} className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h3>Score: {score}</h3>
          <h3>Tour: {tour}</h3>
          <h3>Questions: {currentNumber + 1}/{questionsArr.length}</h3>
        </div>
      </header>
      <div className={styles.main}>
        {questionsArr.length > 0 &&
          <Svg
            width={size.width - 200}
            height={size.height - 200}
            checkAnswer={checkAnswer}
            isClick={isClick}
            currentQuestion={currentQuestion}
          />
        }
      </div>
    </div>
  );
}

export default Game;
