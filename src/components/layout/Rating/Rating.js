import * as React from "react";
import PropTypes from "prop-types";

function Rating({ rating }) {
  const items = [];

  for (var i = 0; i < 5; i++) {
    items.push(
      <span
        key={i}
        className={`material-icons-round ${
          i < rating ? "text-yellow" : "text-gray"
        }`}
      >
        star
      </span>
    );
  }

  return <div>{items}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
