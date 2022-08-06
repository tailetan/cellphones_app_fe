import * as React from "react";
import PropTypes from "prop-types";
import "./boxproduct.css";

function BoxProduct({ children }) {
  return <div className="box-product-item">{children}</div>;
}

BoxProduct.propTypes = {
  children: PropTypes.object,
};

export default BoxProduct;
