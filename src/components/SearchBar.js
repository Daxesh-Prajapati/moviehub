// src/components/SearchBar.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        navigate('/search'); // Navigate to the search results page
    };

    return (
        <Form className="my-3 d-flex justify-content-center" onSubmit={handleSearch}>
            <Form.Group controlId="search" className="me-2 w-50">
                <Form.Control
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control-lg"
                />
            </Form.Group>
            <Button type="submit" className="btn-lg">Search</Button>
        </Form>
    );
};

export default SearchBar;
