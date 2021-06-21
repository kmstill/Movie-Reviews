const MovieReviewEditor = ({ review, setReview, submitReview }) => {
  return (
    <>
      <div className="movie-container">
        <div id="form-wrapper">
          <form id="form">
            <div className="flex-wrapper">
              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  id="review editor"
                  type="text"
                  placeholder="Write a review for this film..."
                  onChange={(e) => setReview(e.target.value)}
                  value={review}
                ></input>
              </div>
              <div style={{ flex: 1 }}>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-warning submit"
                  onClick={(e) => {
                    e.preventDefault();
                    setReview("");
                    submitReview();
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

export default MovieReviewEditor;
