// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Doctor Strange',
      time: 115,
      genres: ['Action', 'Adventure', 'Fantasy'],
    },
    {
      id: 2,
      title: 'Trolls',
      time: 92,
      genres: ['Animation', 'Adventure', 'Comedy', 'Family', 'Fantasy'],
    },
    {
      id: 3,
      title: 'Jack Reacher: Never Go Back',
      time: 118,
      genres: ['Action', 'Adventure', 'Crime', 'Mystery', 'Thriller'],
    },
  ]);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div>
        {movies.length > 0 ? (
          movies.map(movie => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>Genres: {movie.genres.join(', ')}</p>
              <p>Runtime: {movie.time} minutes</p>
              <Link to={`/movie/${movie.id}`}>View Info</Link>
            </div>
          ))
        ) : (
          <p>No movies available</p>
        )}
      </div>
    </div>
  );
};

export default Home;
