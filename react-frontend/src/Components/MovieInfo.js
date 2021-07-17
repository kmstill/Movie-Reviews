const MovieInfo = ({ currentMovie }) => {
  return (
    <div className="component-container">
      <div className="together">
        <img src={currentMovie?.poster} alt=""></img>
      </div>
      <div className="together">
        <div className="movie-info-wrapper">
          <span className="movieInfoType">Title:</span>
          <span className="movieInfo"> {currentMovie?.title}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="movieInfoType">Released:</span>
          <span className="movieInfo"> {currentMovie?.year}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="movieInfoType">Directed by:</span>
          <span className="movieInfo"> {currentMovie?.director}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="movieInfoType">Runtime:</span>
          <span className="movieInfo"> {currentMovie?.runtime}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="movieInfoType">Plot:</span>
          <span className="movieInfo"> {currentMovie?.plot}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="movieInfoType">Total Reviews:</span>
          <span className="movieInfo"> {currentMovie?.total_reviews}</span>
        </div>
        <div className="movie-info-wrapper">
          <span className="movieInfoType">Average Rating:</span>
          <span className="movieInfo"> {currentMovie?.average_rating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
