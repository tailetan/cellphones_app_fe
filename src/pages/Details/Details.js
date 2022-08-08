import * as React from "react";

import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import Theme from "../../components/layout/Themes/Themes";
import Link from "@mui/material/Link";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Rating from "../../components/layout/Rating/Rating";
import { Row, Col } from "react-bootstrap";
import Slider from "./Slider";
import Advantages from "./Advantages";
import Promotion from "./Promotion";
import Store from "./Store";
import Feature from "./Features";
import Number from "./Number";
import Comment from "./Comment";
import axios from "axios";
import Cover from "../../assets/images/No_Cover.jpg";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setTotalCart } from "../../redux/action";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import NotFound from "../../assets/images/404_notfound.jpg";

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

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Details() {
  const dispatch = useDispatch();

  const [details, setDetails] = React.useState({});
  const [reviews, setReviews] = React.useState([]);
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    handleDetails(
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      )
    );
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleReview(
      window.location.pathname.substring(
        window.location.pathname.lastIndexOf("/") + 1
      )
    );
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDetails = async (id) => {
    setLoading(false);
    const result = await axios.get(
      `https://localhost:8000/api/products/${id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    if (result.data.length > 0) {
      setDetails(result.data[0]);
      setLoading(true);
    }
  };

  const handleReview = async (id) => {
    setLoading(true);
    const result = await axios.get(
      `https://localhost:8000/api/product/list-review/${id}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    setReviews(result.data);
    setLoading(false);
  };

  const handleBuy = () => {
    const check_cart = localStorage.getItem("cart");

    let cart = [];

    if (!check_cart) {
      details.quantity = 1;
      cart.push(details);
      localStorage.setItem("cart", JSON.stringify(cart));
      handleTotal(cart);
      window.location.href = "/cart";
      return;
    }

    cart = JSON.parse(check_cart);

    const findIndex = cart.findIndex((e) => e.id === details.id);

    if (findIndex !== -1) {
      if (cart[findIndex].quantity < 3) {
        cart[findIndex].quantity = cart[findIndex].quantity + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        Toast.fire({
          icon: "error",
          title: "Chỉ được phép thêm vào giỏ hàng mỗi sản phẩm số lượng là 3!",
          background: "rgba(253, 241, 244, 1)",
          color: "#d70018",
        });
      }
    } else {
      details.quantity = 1;
      cart.push(details);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    handleTotal(cart);
    window.location.href = "/cart";
  };

  const handleTotal = (data) => {
    const initialValue = 0;
    const sumWithInitial = data.reduce(
      (previousValue, currentValue) => previousValue + currentValue.quantity,
      initialValue
    );
    dispatch(setTotalCart(sumWithInitial));
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const breadcrumbs = [
    <Link
      underline="none"
      className="font-12 text-black font-weight-semi"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <HomeRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" color="red" />
      Trang chủ
    </Link>,
    <Link
      underline="none"
      key="2"
      className="font-12 text-black font-weight-semi"
      color="inherit"
    >
      {details.category_id === 1 && <span>Điện Thoại</span>}
      {details.category_id === 2 && <span>Laptop</span>}
      {details.category_id === 3 && <span>Tablet</span>}
      {details.category_id === 4 && <span>Phụ kiện</span>}
    </Link>,
    <Link
      underline="none"
      key="2"
      className="font-12 text-black font-weight-semi"
      color="inherit"
    >
      {Object.keys(details).length > 0 && details.product_name}
    </Link>,
  ];

  return (
    <Theme>
      <div>
        <Header />
        <main style={{ paddingTop: "64px", position: "relative" }}>
          {!loading && Object.keys(details).length === 0 && (
            <img src={NotFound} width="100%" />
          )}
          {!loading && Object.keys(details).length > 0 && (
            <>
              <div
                className="p-2 shop-box-shadow"
                style={{
                  position: "sticky",
                  top: "64px",
                  background: "#ffffff",
                  zIndex: 1000,
                }}
              >
                <div className="container p-x-0">
                  <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    {breadcrumbs}
                  </Breadcrumbs>
                </div>
              </div>
              <div className="container p-x-0">
                <div className="d-flex align-items-center m-y-6">
                  <h4 className="font-weight-bold m-r-6">
                    {details.product_name}
                  </h4>
                  <Rating rating={parseInt(details.rate_point)} />
                </div>
              </div>
              <div className="container" style={{ position: "relative" }}>
                <Row>
                  <Col xs={4}>
                    {details.product_images &&
                    details?.product_images !== null ? (
                      <Slider images={details.product_images} />
                    ) : (
                      <div
                        style={{
                          border: "1px solid #d1d5db",
                          borderRadius: "15px",
                        }}
                      >
                        <img src={Cover} width="100%" />
                      </div>
                    )}
                  </Col>
                  <Col xs={5}>
                    {details.discount_percent === "0" ? (
                      <p className="text-red font-weight-bold">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(details.product_price)}
                      </p>
                    ) : (
                      <div className="d-flex">
                        <span className="text-gray font-weight-bold m-r-3">
                          <strike>
                            {new Intl.NumberFormat("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            }).format(details.product_price)}
                          </strike>
                        </span>
                        <p className="text-red font-weight-bold">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })
                            .format(
                              details.product_price -
                                details.product_price *
                                  parseFloat(details.discount_percent)
                            )
                            .toString()}
                        </p>
                      </div>
                    )}
                    <br />
                    <Promotion />
                    <br />
                    <button className="add" onClick={() => handleBuy()}>
                      <p>MUA NGAY</p>
                      <p>(Giao tận nơi hoặc lấy tại cửa hàng)</p>
                    </button>
                    <div className="d-flex m-t-6">
                      <button className="installment flex-grow-1 m-r-2">
                        <p>TRẢ GÓP 0%</p>
                        <p>(Xét duyệt qua điện thoại)</p>
                      </button>
                      <button className="installment flex-grow-1 m-l-2">
                        <p>TRẢ GÓP QUA THẺ</p>
                        <p>(Visa, Master Card, JCB)</p>
                      </button>
                    </div>
                    <br />
                    <Advantages />
                  </Col>
                  <Col xs={3}>
                    <Store />
                  </Col>
                </Row>
                <Row>
                  <Col xs={8}>
                    <div className="features">
                      <Feature features={details.desc} />
                    </div>
                    <br />
                    <div className="features">
                      <Comment reviews={reviews} rating={details} />
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="number">
                      <Number numbers={details.sku} />
                    </div>
                  </Col>
                </Row>
                <div>
                  {scrollPosition > 0 && (
                    <button
                      style={{
                        position: "fixed",
                        bottom: "110px",
                        right: "calc(50% - 600px)",
                        borderRadius: "50%",
                        border: "1px solid #ff0000",
                        background: "#ff0000",
                        color: "#ffffff",
                        width: "38px",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: "1000",
                      }}
                      onClick={() => goToTop()}
                    >
                      <KeyboardArrowUpRoundedIcon />
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </main>
        <Footer />
      </div>
    </Theme>
  );
}

export default Details;
