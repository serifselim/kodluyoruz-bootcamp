import React, { useState } from 'react';
import { Header, Square } from './components';
import styles from './App.module.css';

const App = () => {
  const [gameArr, setGameArr] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winnerObj, setWinnerObj] = useState({
    player: '',
    nums: []
  });

  const calculateWinner = () => {
    const lines = [ // Kazanma ihtimali olan kare serilerinin değişkene atıyoruz.
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    lines.forEach(item => { // Kazanma ihtimallerini dönüo herhangi bir eşleşme var mı diye kontrol ediyoruz.
      const [a, b, c] = item;
      if (gameArr[a] && gameArr[a] === gameArr[b] && gameArr[a] === gameArr[c]) { // tüm değeler bir birine denkse
        setWinnerObj({ player: currentPlayer, nums: [a, b, c] }); // varsa eğer onu winnerobj değişkenine atıyoruz
      };
    });
  };

  const updateGameArr = (index) => { // Kareye tıkladığımız zaman çalışacak fonksiyon
    let prevArr = gameArr;

    if (!gameArr.includes(null)) { // Eğer tüm kareler doluysa başka ihtimal olmadığından oyunu sıfırlıyoruz
      resetGame();
      return;
    }

    if (!prevArr[index] && !winnerObj.player) { // Kutunun değeri boşsa ve kazanan kişi belli değilsei içeri gir
      prevArr[index] = currentPlayer; // anlık oyuncunun değerini o karenin eğerine ata
      setGameArr(prevArr); // oyunu güncelle
      reversePlayer(); // sonraki oyuncuya geç
      calculateWinner(); // kazanan var mı yok mu kontrol et
    } else if (winnerObj.player) { // kazanan birisi varsa 
      resetGame(); // oyunu resetle
    }
  };

  const resetGame = () => { // oyunu sıfırlamamızı sağlayan fonksiyon
    setGameArr(Array(9).fill(null)); // tüm array değerlerini null'e çek
    setWinnerObj({ // kazanan değerinin içine boşalt
      player: '',
      nums: [],
    });
    setCurrentPlayer('X'); // oyun sırasını x'e ver
  };

  const reversePlayer = () => currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  // Oyuncu x ise 0 yap 0 ise x yap

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.game}>
          <div className={styles.gameRow}>
            <Square
              value={0}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[0]}
            />
            <Square
              value={1}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[1]}
            />
            <Square
              value={2}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[2]}
            />
          </div>
          <div className={styles.gameRow}>
            <Square
              value={3}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[3]}
            />
            <Square
              value={4}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[4]}
            />
            <Square
              value={5}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[5]}
            />
          </div>
          <div className={styles.gameRow}>
            <Square
              value={6}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[6]}
            />
            <Square
              value={7}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[7]}
            />
            <Square
              value={8}
              updateGameArr={updateGameArr}
              winnerObj={winnerObj}
              type={gameArr[8]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;