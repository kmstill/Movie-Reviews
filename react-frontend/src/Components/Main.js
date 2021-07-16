import React, { useState, useEffect } from "react";
import "./Styles.css";
import Header from "./Header";
import MovieSearchBar from "./MovieSearchBar";
import MovieInfo from "./MovieInfo";
import MovieReviewEditor from "./MovieReviewEditor";
import MovieReviews from "./MovieReviews";

const Main = () => {
  const [initialScreen, setInitialScreen] = useState(true);
  const [displayedMovie, setDisplayedMovie] = useState({});
  const [searchMovie, setSearchMovie] = useState("");
  const [needToCreateNewMovie, setNeedToCreateNewMovie] = useState(false);
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    createNewMovie();
  }, [needToCreateNewMovie]);

  useEffect(() => {
    updateReviews();
  }, [displayedMovie]);

  useEffect(() => {
    checkMovieList();
  }, [initialScreen]);

  const updateReviews = () => {
    if (initialScreen) {
      return;
    }
    fetch(`http://127.0.0.1:8000/api/review-list/${displayedMovie.id}`)
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
    if (initialScreen) {
      return;
    }
    fetch("http://127.0.0.1:8000/api/movie-list/")
      .then((response) => response.json())
      .then((data) => {
        setNeedToCreateNewMovie(false);
        let foundMovie = false;
        Object.keys(data).forEach((key) => {
          if (data[key]?.title?.toLowerCase() === searchMovie?.toLowerCase()) {
            setDisplayedMovie(data[key]);
            foundMovie = true;
          }
        });
        setNeedToCreateNewMovie(!foundMovie);
        setSearchMovie("");
      });
  };

  const createNewMovie = () => {
    if (initialScreen) {
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
        setDisplayedMovie(data);
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
        //rating: rating,
        movie: displayedMovie.id,
      }),
    }).then(() => {
      updateReviews();
      setReview("");
    });
  };

  return (
    <div>
      <MovieSearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        checkMovieList={checkMovieList}
        initialScreen={initialScreen}
        setInitialScreen={setInitialScreen}
      />
      <MovieInfo currentMovie={displayedMovie} />
      <MovieReviewEditor
        review={review}
        setReview={setReview}
        submitReview={submitReview}
        setRating={setRating}
      />
      <MovieReviews reviewList={reviewList} />
    </div>
  );
};
export default Main;
