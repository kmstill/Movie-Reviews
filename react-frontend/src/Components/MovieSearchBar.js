const MovieSearchBar = ({ searchMovie, setSearchMovie, handleSubmit }) => {
  return (
    <>
      <div className="movie-container">
        <div id="form-wrapper">
          <form id="form">
            <div className="flex-wrapper">
              <div style={{ flex: 6 }}>
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
                  className="btn btn-warning submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MovieSearchBar;
