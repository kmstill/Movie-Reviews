const MovieInfo = ({ currentMovie }) => {
  return (
    <div className="component-container">
      <div className="together movie-wrapper flex-wrapper" style={{ flex: 7 }}>
        <img src={currentMovie?.poster}></img>
      </div>
      <div className="together">
        <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
          <span>Title: {currentMovie?.title}</span>
        </div>
        <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
          <span>Released: {currentMovie?.year}</span>
        </div>
        <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
          <span>Directed by: {currentMovie?.director}</span>
        </div>
        <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
          <span>Runtime: {currentMovie?.runtime}</span>
        </div>
        <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
          <span>Plot: {currentMovie.plot}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
