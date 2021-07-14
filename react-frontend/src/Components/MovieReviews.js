const MovieReviews = ({ reviewList }) => {
  const reviews = reviewList.map((review, index) => (
    <div key={index} className="review-wrapper">
      <div style={{ flex: 7 }}>
        <span>{review}</span>
      </div>
      <div>
        <button className="btn btn-sm btn-outline-info">Edit</button>
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
