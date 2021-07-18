import InputSpinner from "react-bootstrap-input-spinner"; //https://www.npmjs.com/package/react-bootstrap-input-spinner
const MovieReviewEditor = ({
  review,
  setReview,
  rating,
  setRating,
  submitReview,
}) => {
  return (
    <>
      <form id="form">
        <div className="component-container">
          <div style={{ flex: 8 }}>
            <input
              className="form-control"
              type="text"
              placeholder="Write a review for this movie..."
              onChange={(e) => setReview(e.target.value)}
              value={review}
            ></input>
          </div>
          <div className="input-spinner" style={{ flex: 2 }}>
            <InputSpinner
              type={"real"}
              precision={1}
              max={10}
              min={0}
              step={1}
              onChange={(num) => {
                setRating(num);
              }}
              value={rating}
            />
          </div>
          <div>
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
