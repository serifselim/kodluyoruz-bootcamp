import React from 'react';
import styles from './Result.module.css';
import LineComp from '../assets/Line.js';
import EllipseComp from '../assets/Ellipse';
import { Link } from 'react-router-dom';
import TrueIcon from '../assets/TrueIcon';

const Home = () => {
    return (
        <main className={styles.container}>
            <section className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.header}>
                        <h1>Final</h1>
                        <LineComp
                            width='228'
                        />
                    </div>
                    <div className={styles.details}>
                        <h2>Point: 129</h2>
                        <h2>Questions: 10</h2>
                        <h2>Correct Answers: 8</h2>
                    </div>
                    <div className={styles.footer}>
                        <Link to="/game">
                            <EllipseComp
                                x='150'
                                name="Restart"
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.header}>
                        <h1>All Question</h1>
                        <LineComp
                            width='430'
                        />
                    </div>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                        <li className={styles.listItem}>
                            <h4>3 x 4 = 12</h4>
                            <TrueIcon />
                        </li>
                    </ul>
                </div>
            </section>

        </main>
    );
};

export default Home;