const MovieInfo = ({ currentMovie }) => {
  return (
    <div className="component-container">
      <div className="together">
        <img src={currentMovie?.poster}></img>
      </div>
      <div className="together">
        <div className="movie-info-wrapper">
          <span>Title: {currentMovie?.title}</span>
        </div>
        <div className="movie-info-wrapper">
          <span>Released: {currentMovie?.year}</span>
        </div>
        <div className="movie-info-wrapper">
          <span>Directed by: {currentMovie?.director}</span>
        </div>
        <div className="movie-info-wrapper">
          <span>Runtime: {currentMovie?.runtime}</span>
        </div>
        <div className="movie-info-wrapper">
          <span>Plot: {currentMovie.plot}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
