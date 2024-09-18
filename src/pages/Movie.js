import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:5000/movies/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        setError(error);
        console.error('Error fetching movie:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading movie: {error.message}</div>;
  if (!movie) return <div>No movie found</div>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Time: {movie.time} minutes</p>
      <p>Genres: {movie.genres.join(', ')}</p>
    </div>
  );
};

export default Movie;
