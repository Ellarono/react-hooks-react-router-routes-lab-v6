import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const Directors = () => {
  const [directors, setDirectors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch directors from the db.json file
    fetch('http://localhost:5000/directors')
      .then(response => response.json())
      .then(data => {
        setDirectors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching directors:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>
      <div>
        {loading ? (
          <p>Loading directors...</p>
        ) : directors.length > 0 ? (
          <ul>
            {directors.map(director => (
              <li key={director.name}>
                <h2>{director.name}</h2>
                <ul>
                  {director.movies.map(movie => (
                    <li key={movie}>{movie}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        ) : (
          <p>No directors available</p>
        )}
      </div>
    </div>
  );
};

export default Directors;
