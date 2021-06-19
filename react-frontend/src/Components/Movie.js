import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Movie.css";
import MovieSearchBar from "./MovieSearchBar";
import MovieInfo from "./MovieInfo";

const Movie = () => {
  //const [movieList, setMovieList] = useState();
  const [currentMovie, setCurrentMovie] = useState({
    id: 1,
    title: "Goodfellas",
    year: "1990",
    runtime: "100 mins",
    director: "Martin Scorsese",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  });
  const [searchMovie, setSearchMovie] = useState("");

  const handleSubmit = () => {
    if (!checkMovieList()) {
      createNewMovie();
    }
  };

  const checkMovieList = () => {
    fetch("http://127.0.0.1:8000/api/movie-list/")
      .then((response) => response.json())
      .then((data) => {
        Object.keys(data).forEach((key) => {
          if (data[key]?.title?.toLowerCase() === searchMovie?.toLowerCase()) {
            setCurrentMovie(data[key]);
            return true;
          }
        });
      });
    return false;
  };

  const createNewMovie = () => {
    fetch("http://127.0.0.1:8000/api/movie-create/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(searchMovie),
    })
      .then((response) => response.json())
      .then((data) => setCurrentMovie(data));
  };

  return (
    <div>
      <MovieSearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        handleSubmit={handleSubmit}
      />
      <MovieInfo currentMovie={currentMovie} />
    </div>
  );
};
export default Movie;
