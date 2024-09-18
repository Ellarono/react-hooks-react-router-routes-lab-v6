import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch movies from the db.json file
    fetch('http://localhost:5000/movies')
      .then(response => response.json())
      .then(data => {
        setMovies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home Page</h1>
      <div>
        {loading ? (
          <p>Loading movies...</p>
        ) : movies.length > 0 ? (
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
