import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Container } from 'react-bootstrap';

const PopularMovies = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = '47c6f63e37d84ef2e6f5456e0f974c91';
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const response = await axios.get(API_URL);
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchPopularMovies();
    }, [API_URL]); // Add API_URL to the dependency array

    return (
        <Container>
            <h2>Popular Movies</h2>
            <div className="d-flex flex-wrap">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </Container>
    );
};

export default PopularMovies;
