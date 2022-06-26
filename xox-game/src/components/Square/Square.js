import React, { useState, useEffect } from 'react';
import styles from './Square.module.css';

const Square = ({ value, updateGameArr, winnerObj, type }) => {
    const [isWinnerSquare, setIsWinnerSquare] = useState(false);

    const dynamicStyle = { // kazanan oyuncuya göre border rengini belirledik
        borderColor: winnerObj.player === 'X' ? '#FF0505' : '#0026ED',
    };

    useEffect(() => { // winnerobj'yi takip edip eğer kazanan kareler bu componentin karesi ise bunu bir boolean değişkene atadık
        if (winnerObj.nums.includes(value)) setIsWinnerSquare(true);
        else setIsWinnerSquare(false);
    }, [winnerObj]);

    return (
        <button
            className={styles.square}
            onClick={(e) => updateGameArr(e.target.value)}
            style={isWinnerSquare ? dynamicStyle : null}
            value={value}
        >
            <span className={type === 'X' ? styles.red : styles.blue}>
                {type}
            </span>
        </button>
    );
};

export default Square;