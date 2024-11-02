import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <div className="d-flex flex-wrap">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
