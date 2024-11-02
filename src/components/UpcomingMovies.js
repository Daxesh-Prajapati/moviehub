// src/components/UpcomingMovies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Container } from 'react-bootstrap';

const UpcomingMovies = ({ searchTerm }) => {
    const [movies, setMovies] = useState([]);
    const API_KEY = '47c6f63e37d84ef2e6f5456e0f974c91';
    const minDate = new Date().toISOString().split('T')[0]; // Today
    const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 2)).toISOString().split('T')[0]; // Two months from today

    const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=US&release_date.gte=${minDate}&release_date.lte=${maxDate}`;

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(API_URL);
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching upcoming movies:", error);
            }
        };

        fetchMovies();
    }, [API_URL, maxDate, minDate]); // Include maxDate and minDate in the dependency array

    return (
        <Container>
            <h2>Upcoming Movies</h2>
            <div className="movie-grid">
                {movies.length > 0 ? (
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))
                ) : (
                    <p>No upcoming movies found.</p>
                )}
            </div>
        </Container>
    );
};

export default UpcomingMovies;
