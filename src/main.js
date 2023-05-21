import React, { Component } from "react";
import ReviewItem from "./ReviewItem";
import { connect } from "react-redux";
import { changePage } from "./actions";

class Main extends Component {
  render() {
    const { data, handlePageChange, selectLanguage, currentPage } = this.props;
    const ruRew = Object.values(data.ru);
    const enRew = Object.values(data.en);
    const reviews = selectLanguage === "Ru" ? ruRew : enRew;
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
              onClick={() => handlePageChange(page)}
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
const mapStateToProps = (state) => ({
  data: state.moveWithMain.data,
  currentPage: state.moveWithMain.currentPage,
  selectLanguage: state.moveWithLanguages.selectLanguage,
});
const mapDispatchToProps = {
  handlePageChange: changePage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
