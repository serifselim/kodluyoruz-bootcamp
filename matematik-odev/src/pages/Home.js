import React from 'react';
import styles from './Home.module.css';
import LineComp from '../assets/Line.js';
import EllipseComp from '../assets/Ellipse';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h1>Mathematics Game</h1>
                    <LineComp />
                </div>
                <div className={styles.details}>
                    <h2>Total Score: 129</h2>
                    <h2>Total Questions: 40</h2>
                    <h2>Correct Answers: 32</h2>
                </div>
                <div className={styles.footer}>
                    <Link to="/game">
                        <EllipseComp />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;