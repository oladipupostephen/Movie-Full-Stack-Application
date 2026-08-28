// Import the necessary libraries
import React from 'react';
// Routing libraries
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
// Imported Components
import Header from './components/Header'
import Home from './components/Home'
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Import Style

import {GlobalStyle} from "./GlobalStyle";

const App: React.FC = () => (
    // Renamed as Router
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path='/:movieId' element={ <Movie/> }/>
            <Route path='/*' element={ <NotFound/> }/>
        </Routes>
        <GlobalStyle/>
    </Router>
);

export default App;
