// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header';
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';
import NowPlayingMovies from './components/NowPlayingMovies';
import UpcomingMovies from './components/UpcomingMovies';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults'; // Import the new component

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <Router>
            <Navbar />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/popular" element={<PopularMovies searchTerm={searchTerm} />} />
                <Route path="/top-rated" element={<TopRatedMovies searchTerm={searchTerm} />} />
                <Route path="/now-playing" element={<NowPlayingMovies searchTerm={searchTerm} />} />
                <Route path="/upcoming" element={<UpcomingMovies searchTerm={searchTerm} />} />
                <Route path="/search" element={<SearchResults searchTerm={searchTerm} />} /> {/* New route */}
                <Route path="/" element={<PopularMovies searchTerm={searchTerm} />} />
            </Routes>
        </Router>
    );
};

export default App;
