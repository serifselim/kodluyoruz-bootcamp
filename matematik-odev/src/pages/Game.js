import Svg from '../svg';
import useSizing from '../hooks/sizing';
import { useEffect, useState } from 'react';
import styles from './Game.module.css';

function Game() {
  const [w, h] = useSizing();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [sira, setSira] = useState(0);

  const list = [
    {
      question: '7 * 8',
      answer1: 56,
      answer2: 64,
      answer3: 49,
      true: 56,
      result: null
    },
    {
      question: '7 * 8',
      answer1: 56,
      answer2: 64,
      answer3: 49,
      true: 56,
      result: null
    },
    {
      question: '7 * 8',
      answer1: 56,
      answer2: 64,
      answer3: 49,
      true: 56,
      result: null
    },
    {
      question: '7 * 8',
      answer1: 56,
      answer2: 64,
      answer3: 49,
      true: 56,
      result: null
    },
    {
      question: '7 * 8',
      answer1: 56,
      answer2: 64,
      answer3: 49,
      true: 56,
      result: null
    },

  ];


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
    <div>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h3>Score: 120</h3>
          <h3>Tour: 2</h3>
          <h3>Questions: 6/7</h3>
        </div>
      </header>
      <div className={styles.main}>
        <Svg width={size.width - 200} height={size.height - 200}
          question={list[sira].question}
          a1={list[sira].answer1}
          a2={list[sira].answer2}
          a3={list[sira].answer3} />
      </div>
    </div>
  );
}

export default Game;
