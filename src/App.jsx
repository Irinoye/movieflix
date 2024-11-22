import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const apiUrl = "https://www.omdbapi.com/?i=tt3896198&apikey="; // Replace with your API URL

  // Fetch data from API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        // Ensure data is in an array format for multiple movies
        setMovies([data]);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchMovies();
  }, [apiUrl]);

  return (
    <div className="app">
      <h1>Movie Posters</h1>
      <div className="grid-container">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <h2 className="movie-title">{movie.Title}</h2>
            <p className="movie-year">{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
