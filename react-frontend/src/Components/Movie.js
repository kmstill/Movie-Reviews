import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Movie.css";
import MovieSearchBar from "./MovieSearchBar";
import MovieInfo from "./MovieInfo";

const Movie = () => {
  const [currentMovie, setCurrentMovie] = useState({
    id: 1,
    title: "Goodfellas",
    year: "1990",
    runtime: "146 mins",
    director: "Martin Scorsese",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  });
  const [searchMovie, setSearchMovie] = useState("");
  const [needToCreateNewMovie, setNeedToCreateNewMovie] = useState(false);

  const handleSubmit = () => {
    checkMovieList();
  };

  useEffect(() => {
    createNewMovie();
  }, [needToCreateNewMovie]);

  const checkMovieList = () => {
    console.log("checkMovieList");
    fetch("http://127.0.0.1:8000/api/movie-list/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let foundMovie = false;
        Object.keys(data).forEach((key) => {
          if (data[key]?.title?.toLowerCase() === searchMovie?.toLowerCase()) {
            console.log("found a match");
            setCurrentMovie(data[key]);
            foundMovie = true;
            // setNeedToCreateNewMovie(false);
          }
        });
        //replace this with setNeedToCreateNewMovie(!foundMovie);
        if (foundMovie) {
          setNeedToCreateNewMovie(false);
          console.log("setNeedToCreateNewMovie(false);");
        } else {
          setNeedToCreateNewMovie(true);
          console.log("setNeedToCreateNewMovie(true);");
        }
      });
  };

  //should only be called after iterating though movie list and determining
  //searchMovie is not in movie list
  const createNewMovie = () => {
    if (!needToCreateNewMovie) {
      return;
    }
    console.log("needToCreateNewMovie");
    fetch("http://127.0.0.1:8000/api/movie-create/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        movie: searchMovie,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentMovie(data);
      });
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
