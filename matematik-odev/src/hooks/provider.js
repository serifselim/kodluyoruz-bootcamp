import { useState, createContext, useEffect } from 'react';

export const Context = createContext();

const randomNmb = () => Math.floor(Math.random() * 8 + 2);

const getSqrt = (a, b) => Math.ceil(Math.sqrt(a * b));

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const Provider = ({ children }) => {
    const [tour, setTour] = useState(1);
    const [questionsArr, setQuestionsArr] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState({});
    const [currentNumber, setCurrentNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [bgColor, setBgColor] = useState('#2d2d2d');
    const [isClick, setIsClick] = useState(false);
    const [clickBtnId, setClickBtnId] = useState(null);

    const setAllQuestion = () => {
        const newArr = [];

        for (let i = 0; i < 10; i++) {
            const numA = randomNmb();
            const numB = randomNmb();
            const scorePoint = getSqrt(numA, numB);
            const trueAnswer = numA * numB;
            const answerObj = {
                a1: numA * numB,
                a2: (numA + 1) * numB,
                a3: numA * (numB - 1)
            };
            let answerArr = Object.values(answerObj);
            answerArr = shuffleArray(answerArr);

            newArr.push({
                numA,
                numB,
                scorePoint,
                trueAnswer,
                answerArr,
                result: null
            });
        }
        setCurrentQuestion(newArr[currentNumber]);
        setQuestionsArr(newArr);
    };

    const checkAnswer = (answer, btnId) => {
        const isTrue = answer === currentQuestion.trueAnswer;
        setIsClick(true);
        setClickBtnId(btnId);

        if (isTrue) {
            setBgColor('green');
        } else {
            setBgColor('red');
        }

        setTimeout(() => {
            if (isTrue) {
                setScore(score + currentQuestion.scorePoint);
            }
            setBgColor('#2d2d2d');
            setCurrentNumber(currentNumber + 1);
            setClickBtnId(null);
            setIsClick(false);
        }, 3000);
    };

    // useEffect(() => {
    //     console.log(currentQuestion);
    // }, [currentQuestion]);

    useEffect(() => {
        if (questionsArr.length > 0) {
            setCurrentQuestion(questionsArr[currentNumber]);
        }
    }, [currentNumber]);

    return (
        <Context.Provider value={{
            tour,
            questionsArr,
            score,
            setAllQuestion,
            currentQuestion,
            isClick,
            currentNumber,
            checkAnswer,
            bgColor,
            clickBtnId
        }}>
            {children}
        </Context.Provider>
    );
};

export default Provider;