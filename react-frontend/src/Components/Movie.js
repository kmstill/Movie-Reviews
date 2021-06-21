import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Movie.css";
import MovieSearchBar from "./MovieSearchBar";
import MovieInfo from "./MovieInfo";
import MovieReviewEditor from "./MovieReviewEditor";
import MovieReviews from "./MovieReviews";

const Movie = () => {
  const [currentMovie, setCurrentMovie] = useState({
    id: 0,
    title: "",
    year: "",
    runtime: "",
    director: "",
    poster: "",
  });
  const [searchMovie, setSearchMovie] = useState("");
  const [needToCreateNewMovie, setNeedToCreateNewMovie] = useState(false);
  const [review, setReview] = useState("");
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    createNewMovie();
  }, [needToCreateNewMovie]);

  useEffect(() => {
    updateReviews();
  }, [currentMovie]);

  const updateReviews = () => {
    fetch("http://127.0.0.1:8000/api/review-list/" + currentMovie.id)
      .then((response) => response.json())
      .then((data) => {
        let newReviewList = [];
        Object.keys(data).forEach((key) => {
          newReviewList.push(data[key]?.text);
        });
        setReviewList(newReviewList);
      });
  };

  const checkMovieList = () => {
    fetch("http://127.0.0.1:8000/api/movie-list/")
      .then((response) => response.json())
      .then((data) => {
        let foundMovie = false;
        Object.keys(data).forEach((key) => {
          if (data[key]?.title?.toLowerCase() === searchMovie?.toLowerCase()) {
            setCurrentMovie(data[key]);
            foundMovie = true;
          }
        });
        setNeedToCreateNewMovie(!foundMovie);
      });
  };

  const createNewMovie = () => {
    if (!needToCreateNewMovie) {
      return;
    }
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

  const submitReview = () => {
    fetch("http://127.0.0.1:8000/api/review-create/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        text: review,
        movie: currentMovie.id,
      }),
    }).then(updateReviews());
  };

  return (
    <div>
      <MovieSearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        checkMovieList={checkMovieList}
      />
      <MovieInfo currentMovie={currentMovie} />
      <MovieReviewEditor
        review={review}
        setReview={setReview}
        submitReview={submitReview}
      />
      <MovieReviews reviewList={reviewList}>hi</MovieReviews>
    </div>
  );
};
export default Movie;
