import React, { useState, useEffect, useCallback } from "react";
import "./Styles.css";
//import Header from "./Header";
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
  const [totalReviews, setTotalReviews] = useState(0);
  const [averageRating, setAverageRating] = useState("N/A");

  const updateReviews = () => {
    if (initialScreen) {
      return;
    }
    fetch(`http://127.0.0.1:8000/api/review-list/${displayedMovie.id}`)
      .then((response) => response.json())
      .then((data) => {
        let newReviewList = [];
        let totalRatingPoints = 0;
        Object.keys(data).forEach((key) => {
          totalRatingPoints += data[key].rating;
          newReviewList.push(data[key]);
        });
        setTotalReviews(newReviewList.length);
        if (newReviewList.length) {
          setAverageRating(
            (totalRatingPoints / newReviewList.length).toFixed(2)
          );
        }
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
        setReview("");
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
        rating: rating,
        likes: 0,
        dislikes: 0,
        movie: displayedMovie.id,
      }),
    }).then(() => {
      updateReviews();
      setReview("");
    });
  };

  const addLikeOrDislike = (reviewId, isLike, newAmount) => {
    console.log("addlikeordislike");
    let data;
    if (isLike) {
      data = {
        likes: newAmount,
      };
    } else {
      data = {
        dislikes: newAmount,
      };
    }
    fetch(`http://127.0.0.1:8000/api/review-update/${reviewId}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      updateReviews();
    });
  };

  const createNewMovie = () => {
    if (initialScreen || !needToCreateNewMovie) {
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
        if (JSON.stringify(data) === "{}") {
          return;
        }
        setDisplayedMovie(data);
      });
  };

  useEffect(() => {
    createNewMovie();
  }, [needToCreateNewMovie]);

  useEffect(() => {
    updateReviews();
  }, [displayedMovie]);

  useEffect(() => {
    checkMovieList();
  }, [initialScreen]);

  if (initialScreen) {
    return (
      <MovieSearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        checkMovieList={checkMovieList}
        initialScreen={initialScreen}
        setInitialScreen={setInitialScreen}
      />
    );
  }

  return (
    <div>
      <MovieSearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        checkMovieList={checkMovieList}
        initialScreen={initialScreen}
        setInitialScreen={setInitialScreen}
      />
      {
        <div>
          <MovieInfo
            displayedMovie={displayedMovie}
            totalReviews={totalReviews}
            averageRating={averageRating}
          />
          <MovieReviewEditor
            review={review}
            setReview={setReview}
            submitReview={submitReview}
            rating={rating}
            setRating={setRating}
          />
          <MovieReviews
            reviewList={reviewList}
            addLikeOrDislike={addLikeOrDislike}
          />
        </div>
      }
    </div>
  );
};
export default Main;
