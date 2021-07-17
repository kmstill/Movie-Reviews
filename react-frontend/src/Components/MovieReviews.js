const MovieReviews = ({ reviewList }) => {
  const reviews = reviewList.map((review, index) => (
    <div key={index} className="review-wrapper">
      <div style={{ flex: 7 }}>
        <span>{review.text}</span>
        <span>{review.rating}</span>
      </div>
      <div>
        <button className="btn btn-color">Upvote</button>
      </div>
      <div>
        <button className="btn btn-color">Downvote</button>
      </div>
    </div>
  ));

  return (
    <div className="component-container review-container list-wrapper">
      {reviews}
    </div>
  );
};

export default MovieReviews;
