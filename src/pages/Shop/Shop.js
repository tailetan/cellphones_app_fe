import * as React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Phone from "./Phone.js";
import Theme from "../../components/layout/Themes/Themes";
import { getAllProducts } from "../../api/AdminProducts";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

function handleClick(event) {
  event.preventDefault();
  window.location.href = "/";
}

function Shop() {
  const [data, setData] = React.useState([]);
  const [cate, setCategory] = React.useState("");
  const [displayCate, setDisplayCate] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [total_page, setTotalPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const [search, setSearch] = React.useState("");
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  React.useEffect(() => {
    getDataFromUrl();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSort = (value) => {
    let url =
      search === "" ? `/shop?category=${cate}` : `/shop?search=${search}`;

    if (sort === value) {
      setSort("");
    } else {
      setSort(value);
      url += `&price=${value}`;
    }

    if (brand !== "" && search === "") {
      url += `&brand=${brand}`;
    }

    setPage(1);

    window.history.pushState("cellphoneS", "Shop", url);

    window.scrollTo(0, 0);

    getDataFromUrl();
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBrand = (name) => {
    let url = `/shop?category=${cate}`;

    if (brand === name) {
      setBrand("");
    } else {
      setBrand(name);
      url += `&brand=${name}`;
    }

    if (sort !== "") {
      url += `&price=${sort}`;
    }

    setPage(1);

    window.history.pushState("cellphoneS", "Shop", url);

    window.scrollTo(0, 0);

    getDataFromUrl();
  };

  const onChangePage = (event, value) => {
    event.preventDefault();

    let url =
      search === "" ? `/shop?category=${cate}` : `/shop?search=${search}`;

    if (brand !== "" && search === "") {
      url += `&brand=${brand}`;
    }

    if (sort !== "") {
      url += `&price=${sort}`;
    }

    url += `&page=${value}`;

    window.history.pushState("cellphoneS", "Shop", url);

    window.scrollTo(0, 0);

    getDataFromUrl();
  };

  const getDataFromUrl = async () => {
    setLoading(true);
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    let category;
    let brand;
    let page;
    let sort;
    let search;

    if (!params.search) {
      if (params.category) {
        if (params.category === "mobile") category = "Điện Thoại";
        if (params.category === "laptop") category = "Laptop";
        if (params.category === "tablet") category = "Tablet";
        if (params.category === "accessory") category = "Phụ kiện";
        setCategory(params.category);
        setDisplayCate(category);
      }

      if (params.brand) {
        brand = params.brand;
        setBrand(brand);
      }
    } else {
      search = params.search;
      setSearch(params.search);
    }

    if (params.price) {
      sort = params.price;
      setSort(params.price);
    }

    if (params.page) {
      page = params.page;
      setPage(params.page);
    }

    getAllProducts({ category, brand, sort, page, search }).then((result) => {
      setData(result.data);
      setTotalPage(result.last_page);
      setLoading(false);
    });
  };

  const breadcrumbs = [
    <Link
      underline="none"
      className="font-12 text-black font-weight-semi"
      key="1"
      color="inherit"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
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
      {search === "" ? `${displayCate}` : "Tìm kiếm"}
    </Link>,
  ];

  return (
    <Theme>
      <div>
        <Header />
        <main style={{ paddingTop: "64px", position: "relative" }}>
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
          <div className="container" style={{ position: "relative" }}>
            <div className="p-y-4">
              <Phone
                data={data}
                sort={sort}
                page={page}
                total_page={total_page}
                display_cate={displayCate}
                loading={loading}
                search={search}
                onChangePage={onChangePage}
                handleBrand={handleBrand}
                handleSort={handleSort}
              />
            </div>
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
        </main>
        <Footer />
      </div>
    </Theme>
  );
}

export default Shop;
