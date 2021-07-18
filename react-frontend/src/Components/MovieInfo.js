const MovieInfo = ({ currentMovie }) => {
  return (
    <div className="component-container">
      <div className="together">
        <img src={currentMovie?.poster} alt=""></img>
      </div>
      <div className="together">
        <div className="movie-info-wrapper">
          <span className="info-type">Title:</span>
          <span className="info"> {currentMovie?.title}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Released:</span>
          <span className="info"> {currentMovie?.year}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Directed by:</span>
          <span className="info"> {currentMovie?.director}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Runtime:</span>
          <span className="info"> {currentMovie?.runtime}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Plot:</span>
          <span className="info"> {currentMovie?.plot}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Total Reviews:</span>
          <span className="info"> {currentMovie?.total_reviews}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Average Rating:</span>
          <span className="info">
            {" "}
            {(
              currentMovie?.total_rating_points / currentMovie.total_reviews
            ).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
