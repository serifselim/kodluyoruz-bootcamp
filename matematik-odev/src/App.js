import React from 'react';
import { Routes, Route } from "react-router-dom";
import Game from './pages/Game.js';
import Home from './pages/Home.js';
import Result from './pages/Result.js';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/result" element={<Result />} />
        </Routes>
    );
};

export default App;