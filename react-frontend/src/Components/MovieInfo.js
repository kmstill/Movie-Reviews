const MovieInfo = ({ displayedMovie, totalReviews, averageRating }) => {
  return (
    <div className="component-container">
      <div className="together">
        <img src={displayedMovie?.poster} alt=""></img>
      </div>
      <div className="together">
        <div className="movie-info-wrapper">
          <span className="info-type">Title:</span>
          <span className="info"> {displayedMovie?.title}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Released:</span>
          <span className="info"> {displayedMovie?.year}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Directed by:</span>
          <span className="info"> {displayedMovie?.director}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Runtime:</span>
          <span className="info"> {displayedMovie?.runtime}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Plot:</span>
          <span className="info"> {displayedMovie?.plot}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Total Reviews:</span>
          <span className="info"> {totalReviews}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="info-type">Average Rating:</span>
          <span className="info"> {averageRating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
