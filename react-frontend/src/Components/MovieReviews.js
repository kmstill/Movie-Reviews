const MovieReviews = ({ reviewList }) => {
  console.log(reviewList);
  return reviewList.map((review, index) => (
    <div key={index} className="component-container" id="list-wrapper">
      <span>{review}</span>
      <div style={{ flex: 1 }}>
        <button className="btn btn-sm btn-outline-info">Edit</button>
      </div>
    </div>
  ));
};

export default MovieReviews;
