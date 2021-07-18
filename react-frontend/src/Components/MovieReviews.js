const MovieReviews = ({ reviewList }) => {
  const reviews = reviewList.map((review, index) => (
    <div key={index} className="review-wrapper">
      <div style={{ flex: 2 }}>
        <span className="info-type">Rating: </span>
        <span>{review.rating}</span>
      </div>
      <div style={{ flex: 7 }}>
        <span className="info-type">Review: </span>
        <span>{review.text}</span>
      </div>
      <div>
        <button className="btn btn-color">{review.likes} Likes</button>
      </div>
      <div>
        <button className="btn btn-color">{review.dislikes} Dislikes</button>
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
