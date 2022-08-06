/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Progess from "./Progess";
import React from "react";
import { Row, Col } from "react-bootstrap";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Rating from "../../components/layout/Rating/Rating";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Pagination } from "@mui/material";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  width: "26em",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default function Comment(props) {
  const [modalShow, setModalShow] = React.useState(false);
  const { reviews } = props;
  const [pageNumber, setPageNumber] = React.useState(0);
  const [reviewsNumber, setReviewsNumber] = React.useState(0);

  const reviewsPerPage = 5;
  const pagesVisited = pageNumber * reviewsPerPage;
  const [name, setName] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const displayReviews = reviews
    .slice(pagesVisited, pagesVisited + reviewsPerPage)
    .map((item) => {
      return (
        <li key={item.id} className="m-b-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <p
                style={{
                  width: "25px",
                  height: "25px",
                  backgroundColor: "#ddd",
                  fontWeight: "600",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                {item.reviewer_name.slice(0, 1)}
              </p>
              <p className="m-l-2 font-weight-bold">{item.reviewer_name}</p>
            </div>
            <div style={{ fontSize: "14px" }} className="font-weight-bold">
              {item.review_date}
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#f3f4f6",
              marginLeft: "40px",
              borderRadius: "16px",
            }}
            className="p-y-3 p-x-3 m-t-2"
          >
            <div
              style={{ fontSize: "14px" }}
              className="d-flex align-items-center"
            >
              <span style={{ width: "10%" }} className="font-weight-bold">
                Đánh giá:
              </span>
              <span style={{ width: "90%" }} className="flex-grow-1">
                <Rating rating={item.rating_star} />
              </span>
            </div>
            <div style={{ fontSize: "14px" }} className="d-flex">
              <span style={{ width: "10%" }} className="font-weight-bold">
                Nhận xét:
              </span>
              <span style={{ width: "90%" }}>{item.review_details}</span>
            </div>
          </div>
        </li>
      );
    });

  const pageCount = Math.ceil(reviews.length / reviewsPerPage);

  const disabledButton = () => {
    return reviewsNumber === 0 || name === "" || desc === "" ? true : false;
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    const id = window.location.pathname.substring(
      window.location.pathname.lastIndexOf("/") + 1
    );

    const url = `https://d731-42-115-169-248.ap.ngrok.io/api/product/review/${id}`;

    const body = {
      reviewer_name: name,
      review_details: desc,
      rating_star: reviewsNumber,
    };

    try {
      await axios.post(url, body, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      Toast.fire({
        icon: "success",
        title: "Đánh giá thành công!",
        background: "rgba(243, 252, 245, 1)",
        color: "#28a745",
      });
      setTimeout(() => {
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h6 className="font-weight-bold text-red">
          Đánh giá và nhận xét {props.rating.product_name}
        </h6>
      </div>
      <br />
      <Row
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "20px",
          margin: "4px",
        }}
      >
        <Col
          xs={5}
          className="d-flex align-items-center justify-content-center"
          style={{ borderRight: "1px solid #e5e7eb" }}
        >
          <div className="text-center d-flex flex-column align-items-center justify-content-center">
            <h5 className="font-weight-bold">{props.rating.rate_point}/5</h5>
            <Rating rating={parseInt(props.rating.rate_point)} />
            <p>
              <span className="font-weight-bold">{props.reviews.length}</span>{" "}
              đánh giá và nhận xét
            </p>
          </div>
        </Col>
        <Col xs={7}>
          <ul className="font-weight-semi">
            <li
              className="d-flex align-items-center justify-content-between m-b-2"
              style={{ fontSize: "12px" }}
            >
              <p className="d-flex align-items-center" style={{ width: "10%" }}>
                <p className="flex-grow-1">5</p>
                <span className="text-yellow m-l-3">
                  <StarRoundedIcon style={{ width: "18px", height: "18px" }} />
                </span>
              </p>
              <div className="m-x-4" style={{ width: "70%" }}>
                <Progess now={props.rating.five_star} />
              </div>
              <p style={{ width: "20%" }}>{props.rating.five_star} đánh giá</p>
            </li>
            <li
              className="d-flex align-items-center justify-content-between m-b-2"
              style={{ fontSize: "12px" }}
            >
              <p className="d-flex align-items-center" style={{ width: "10%" }}>
                <p className="flex-grow-1">4</p>
                <span className="text-yellow m-l-3">
                  <StarRoundedIcon style={{ width: "18px", height: "18px" }} />
                </span>
              </p>
              <div className="m-x-4" style={{ width: "70%" }}>
                <Progess now={props.rating.four_star} />
              </div>
              <p style={{ width: "20%" }}>{props.rating.four_star} đánh giá</p>
            </li>
            <li
              className="d-flex align-items-center justify-content-between m-b-2"
              style={{ fontSize: "12px" }}
            >
              <p className="d-flex align-items-center" style={{ width: "10%" }}>
                <p className="flex-grow-1">3</p>
                <span className="text-yellow m-l-3">
                  <StarRoundedIcon style={{ width: "18px", height: "18px" }} />
                </span>
              </p>
              <div className="m-x-4" style={{ width: "70%" }}>
                <Progess now={props.rating.three_star} />
              </div>
              <p style={{ width: "20%" }}>{props.rating.three_star} đánh giá</p>
            </li>
            <li
              className="d-flex align-items-center justify-content-between m-b-2"
              style={{ fontSize: "12px" }}
            >
              <p className="d-flex align-items-center" style={{ width: "10%" }}>
                <p className="flex-grow-1">2</p>
                <span className="text-yellow m-l-3">
                  <StarRoundedIcon style={{ width: "18px", height: "18px" }} />
                </span>
              </p>
              <div className="m-x-4" style={{ width: "70%" }}>
                <Progess now={props.rating.two_star} />
              </div>
              <p style={{ width: "20%" }}>{props.rating.two_star} đánh giá</p>
            </li>
            <li
              className="d-flex align-items-center justify-content-between"
              style={{ fontSize: "12px" }}
            >
              <p className="d-flex align-items-center" style={{ width: "10%" }}>
                <p className="flex-grow-1">1</p>
                <span className="text-yellow m-l-3">
                  <StarRoundedIcon style={{ width: "18px", height: "18px" }} />
                </span>
              </p>
              <div className="m-x-4" style={{ width: "70%" }}>
                <Progess now={props.rating.one_star} />
              </div>
              <p style={{ width: "20%" }}>{props.rating.one_star} đánh giá</p>
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center text-center">
        <Col xs={4}>
          <p className="m-b-2">Bạn đánh giá sao sản phẩm này</p>
          <button
            onClick={() => {
              setReviewsNumber(0);
              setName("");
              setDesc("");
              setModalShow(true);
            }}
            className="add"
          >
            Đánh giá ngay
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <ul>{displayReviews}</ul>
        </Col>
        <Col xs={12} className="d-flex justify-content-center">
          <Pagination
            count={pageCount}
            page={pageNumber + 1}
            variant="outlined"
            color="red"
            shape="rounded"
            onChange={(event, page) => setPageNumber(page - 1)}
          />
        </Col>
      </Row>
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <h6 className="font-weight-bold">Đánh giá và nhận xét sản phẩm</h6>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmitReview(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Họ và tên"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                as="textarea"
                value={desc}
                onChange={(event) => setDesc(event.target.value)}
                placeholder="Xin mời chia sẻ một số cảm nhận về sản phẩm"
              />
            </Form.Group>

            <Form.Group
              style={{
                padding: "0.375rem 0.75rem",
                border: "1px solid #ced4da",
                borderRadius: "0.375rem",
              }}
              className="mb-3"
              controlId="formBasicRatingStar"
            >
              <Form.Label>Bạn thấy sản phẩm này thế nào</Form.Label>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex flex-column align-items-center"
                  onClick={() => setReviewsNumber(1)}
                >
                  <StarRateRoundedIcon
                    className={`${
                      reviewsNumber >= 1 ? "text-yellow" : "text-gray"
                    }`}
                  />
                  <span className="font-weight-bold">Rất tệ</span>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  onClick={() => setReviewsNumber(2)}
                >
                  <StarRateRoundedIcon
                    className={`${
                      reviewsNumber >= 2 ? "text-yellow" : "text-gray"
                    }`}
                  />
                  <span className="font-weight-bold">Tệ</span>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  onClick={() => setReviewsNumber(3)}
                >
                  <StarRateRoundedIcon
                    className={`${
                      reviewsNumber >= 3 ? "text-yellow" : "text-gray"
                    }`}
                  />
                  <span className="font-weight-bold">Bình thường</span>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  onClick={() => setReviewsNumber(4)}
                >
                  <StarRateRoundedIcon
                    className={`${
                      reviewsNumber >= 4 ? "text-yellow" : "text-gray"
                    }`}
                  />
                  <span className="font-weight-bold">Tốt</span>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  onClick={() => setReviewsNumber(5)}
                >
                  <StarRateRoundedIcon
                    className={`${
                      reviewsNumber >= 5 ? "text-yellow" : "text-gray"
                    }`}
                  />
                  <span className="font-weight-bold">Rất tốt</span>
                </div>
              </div>
            </Form.Group>
            <Button
              variant="primary"
              disabled={disabledButton()}
              style={{ width: "100%" }}
              type="submit"
            >
              Gửi đánh giá
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
