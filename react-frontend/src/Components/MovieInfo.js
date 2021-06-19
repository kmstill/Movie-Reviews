const MovieInfo = ({ currentMovie }) => {
  return (
    <div className="movie-container list-wrapper">
      <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
        <img src={currentMovie?.poster}></img>
      </div>
      <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
        <span>{currentMovie?.title}</span>
      </div>
      <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
        <span>{currentMovie?.year}</span>
      </div>
      <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
        <span>{currentMovie?.director}</span>
      </div>
      <div className="movie-wrapper flex-wrapper" style={{ flex: 7 }}>
        <span>{currentMovie?.runtime}</span>
      </div>
    </div>
  );
};

export default MovieInfo;
