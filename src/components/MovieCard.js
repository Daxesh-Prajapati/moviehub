import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ movie }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    <strong>Rating:</strong> {movie.vote_average} <br />
                    <strong>Release Date:</strong> {movie.release_date} <br />
                    <strong>Overview:</strong> {movie.overview}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default MovieCard;
