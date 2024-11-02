// src/components/SearchResults.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Container } from 'react-bootstrap';

const SearchResults = ({ searchTerm }) => {
    const [movies, setMovies] = useState([]);
    const API_KEY = '47c6f63e37d84ef2e6f5456e0f974c91';
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`;

    useEffect(() => {
        const fetchMovies = async () => {
            if (searchTerm) {
                try {
                    const response = await axios.get(API_URL);
                    setMovies(response.data.results);
                } catch (error) {
                    console.error("Error fetching search results:", error);
                }
            } else {
                setMovies([]); // Clear movies if searchTerm is empty
            }
        };

        fetchMovies();
    }, [searchTerm, API_URL]);

    return (
        <Container>
            <h2>Search Results</h2>
            <div className="movie-grid">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No movies found.</p>
                )}
            </div>
        </Container>
    );
};

export default SearchResults;
