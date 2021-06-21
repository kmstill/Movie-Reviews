const MovieReviews = ({ reviewList }) => {
  console.log(reviewList);
  return reviewList.map((review, index) => (
    <div key={index} className="movie-container" id="list-wrapper">
      <span>{review}</span>
    </div>
  ));
};

export default MovieReviews;
