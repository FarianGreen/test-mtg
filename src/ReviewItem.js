import React from "react";

class ReviewItem extends React.Component {
  render() {
    const { name, text, date } = this.props;
    return (
      <div className="review-item">
        <h3>{name}</h3>
        <p>{text}</p>
        <p>{date}</p>
      </div>
    );
  }
}

export default ReviewItem;
