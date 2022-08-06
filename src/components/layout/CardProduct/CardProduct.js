import "./cardproduct.css";

import * as React from "react";

import PropTypes from "prop-types";
import Rating from "../Rating/Rating.js";

function CardProduct({ item }) {
  // const isPreOrder = item.preOrder.status;
  const isSalePrice = parseFloat(item.discount.discount_percent);
  // const isPromotion = item.promotion.status;
  const isRating = item.rate_point > 0;

  return (
    <a href={`/shop/${item.id}`}>
      <div className="card-product p-x-3 p-y-3">
        <div className="cp-image d-flex justify-center align-center m-t-8 m-b-6">
          <a>
            <img src={item.product_thumbnail} alt={item.product_name} />
          </a>
        </div>
        {isSalePrice > 0 ? (
          <div className="cp-sticker-percent d-flex align-center justify-center">
            <p>
              Giảm {parseFloat(item.discount.discount_percent * 100).toFixed(0)}
              %
            </p>
          </div>
        ) : (
          ""
        )}
        <div className="m-b-4 cp-name">
          <a className="font-weight-bold">{item.product_name}</a>
        </div>
        {/* {isPreOrder ? (
        <div className="cp-preorder m-b-4">
          <span className="p-x-2 p-y-1 font-weight-semi">{item.preOrder.content}</span>
        </div>
      ) : (
        ''
      )} */}
        <div className="d-flex align-center cp-price m-b-4">
          <span className="special-price font-weight-bold">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            })
              .format(
                item.product_price -
                  item.product_price *
                    parseFloat(item.discount.discount_percent)
              )
              .toString()}
          </span>
          {isSalePrice > 0 ? (
            <span className="sale-price m-l-2">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(item.product_price)}
            </span>
          ) : (
            ""
          )}
        </div>
        {/* {isPromotion ? (
        <div className="cp-promotion d-flex p-x-2 p-y-2">
          {item.promotion.voucher !== '' ? (
            <div className="cpp-voucher font-weight-bold m-r-3">
              <span>PMH</span>
              <span>{item.promotion.voucher} ₫</span>
            </div>
          ) : (
            ''
          )}
          {item.promotion.content !== '' ? (
            <span className="cpp-content flex-1">{item.promotion.content}</span>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )} */}
        {isRating ? (
          <div className="cp-rating d-flex align-center m-t-4">
            <Rating rating={parseInt(item.rate_point)} className="flex-1" />
          </div>
        ) : (
          ""
        )}
      </div>
    </a>
  );
}

CardProduct.propTypes = {
  item: PropTypes.object,
};

export default CardProduct;
