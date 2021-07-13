const MovieReviewEditor = ({ review, setReview, submitReview }) => {
  return (
    <>
      <form id="form">
        <div className="component-container">
          <div style={{ flex: 8 }}>
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
              className="btn btn-color"
              onClick={(e) => {
                e.preventDefault();
                submitReview();
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default MovieReviewEditor;
