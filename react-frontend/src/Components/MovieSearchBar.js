const MovieSearchBar = ({
  searchMovie,
  setSearchMovie,
  checkMovieList,
  initialScreen,
  setInitialScreen,
}) => {
  return (
    <>
      <form id="form">
        <div className="component-container">
          <div style={{ flex: 8 }}>
            <input
              className="form-control"
              id="movie search"
              type="text"
              placeholder="find a movie..."
              onChange={(e) => setSearchMovie(e.target.value)}
              value={searchMovie}
            ></input>
          </div>
          <div style={{ flex: 1 }}>
            <input
              type="submit"
              value="Search"
              className="btn btn-color"
              onClick={(e) => {
                e.preventDefault();
                if (initialScreen) {
                  setInitialScreen(false);
                  return;
                }
                checkMovieList();
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default MovieSearchBar;
