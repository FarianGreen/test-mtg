import React, { Component } from "react";
import ReviewItem from "./ReviewItem";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    };
  }

  handlePageChange = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };

  render() {
    const { reviews } = this.props;
    const { currentPage } = this.state;
    const reviewsPerPage = 10;
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    return (
      <div>
        <div className="wrapper-item">
          {currentReviews.map((review) => (
            <ReviewItem
              key={review.name}
              name={review.name}
              text={review.review}
              date={review.date}
            />
          ))}
        </div>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => this.handlePageChange(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Main;
