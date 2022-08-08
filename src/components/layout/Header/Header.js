import "./header.css";

import * as style from "@dicebear/micah";

import { Form, InputGroup } from "react-bootstrap";
import React, { useEffect } from "react";

import Account from "../../../assets/images/account.svg";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import Cart from "../../../assets/images/cart.svg";
import { FaSearch } from "react-icons/fa";
import Location from "../../../assets/images/information-location.svg";
import Logo from "../../../assets/images/logo.svg";
import Menu from "@mui/material/Menu";
import MenuData from "../../../assets/data/menu.json";
import MenuItemData from "../Menu/Menu";
import MenuSVG from "../../../assets/images/menu.svg";
import OrderSearch from "../../../assets/images/information-order-detail.svg";
import Phone from "../../../assets/images/information-phone.svg";
import axios from "axios";
import { createAvatar } from "@dicebear/avatars";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setTotalCart, setUserId } from "../../../redux/action";

function Header() {
  const total = useSelector((state) => state.admin.totalCart);
  const dispatch = useDispatch();
  const [active, setActive] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [user, setUser] = React.useState("");
  const menuData = MenuData.menu;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = () => {
    if (search !== "") {
      window.location.href = `/shop?search=${search}`;
    }
  };

  const handleCart = () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const initialValue = 0;
      const sumWithInitial = JSON.parse(cart).reduce(
        (previousValue, currentValue) => previousValue + currentValue.quantity,
        initialValue
      );
      dispatch(setTotalCart(sumWithInitial));
    } else {
      dispatch(setTotalCart(0));
    }
  };

  useEffect(async () => {
    handleCart();
    const user_token = localStorage.getItem("user_login_token");
    if (user_token) {
      const result = await axios.get("http://localhost:8000/api/me", {
        headers: {
          Authorization: `Bearer ${user_token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      if (result.status === 200) {
        const random = (Math.random() + 1).toString(36).substring(7);
        const svg = createAvatar(style, {
          seed: random,
          dataUri: true,
          baseColor: ["mellow"],
        });
        const user = result.data;
        user.avatar = svg;
        user.token = user_token;
        dispatch(setUserId(user.id));
        setUser(user);
      }
    }
  }, []);

  const logout = async () => {
    await axios.post(
      "http://localhost:8000/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    localStorage.removeItem("user_login_token");
    window.location.reload();
  };

  return (
    <>
      <header className="global-header">
        <nav className="gh-navbar">
          <div className="ghn-layout default" data-spy="affix">
            <div className="header-container h-full d-flex align-center justify-space-between">
              <div className="d-flex align-items-center">
                <div className="logo">
                  <a href="/" title="CellphoneS - Hệ thống bán lẻ điện thoại">
                    <img
                      src={Logo}
                      alt="Cellphones"
                      width="100%"
                      height="100%"
                    />
                  </a>
                </div>
                <a
                  className="i-menu d-flex align-center"
                  onClick={() => setActive(!active)}
                >
                  <img src={MenuSVG} alt="Phone" width="20px" height="20px" />
                  <div className="text-white m-l-2 font-12">
                    <p>Danh mục</p>
                  </div>
                </a>
              </div>
              <InputGroup className="ml-3" style={{ width: "360px" }}>
                <InputGroup.Text
                  id="basic-addon1"
                  onClick={() => handleSearch()}
                >
                  <FaSearch />
                </InputGroup.Text>
                <Form.Control
                  value={search}
                  onChange={() => setSearch(event.target.value)}
                  placeholder="Tìm kiếm"
                  aria-label="Tìm kiếm"
                  aria-describedby="basic-addon1"
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      handleSearch();
                    }
                  }}
                />
              </InputGroup>
              <div className="information d-flex justify-space-between">
                <a className="i-item d-flex align-center">
                  <div className="m-r-2">
                    <img src={Phone} alt="Phone" width="100%" height="100%" />
                  </div>
                  <div className="text-white font-12 line-height-1-2">
                    <p>
                      Gọi mua hàng
                      <br />
                      <strong>0969004098</strong>
                    </p>
                  </div>
                </a>
                <a className="i-item d-flex align-center">
                  <div className="m-r-2">
                    <img
                      src={Location}
                      alt="Location"
                      width="25px"
                      height="25px"
                    />
                  </div>
                  <div className="text-white font-12 line-height-1-2">
                    <p>
                      Cửa hàng
                      <br />
                      gần bạn
                    </p>
                  </div>
                </a>
                <a className="i-item d-flex align-center">
                  <div className="m-r-2">
                    <img
                      src={OrderSearch}
                      alt="OrderSearch"
                      width="100%"
                      height="24px"
                    />
                  </div>
                  <div className="text-white font-12 line-height-1-2">
                    <p>
                      Tra cứu
                      <br />
                      đơn hàng
                    </p>
                  </div>
                </a>
                <a className="i-item d-flex align-center">
                  <div className="m-r-2">
                    <img src={Cart} alt="Cart" width="100%" height="100%" />
                  </div>
                  <div className="text-white font-12 line-height-1-2">
                    <a href="/cart">
                      Giỏ
                      <br />
                      hàng ({total})
                    </a>
                  </div>
                </a>
                {user === "" && (
                  <a
                    href="/smember"
                    className="i-item i-item-account d-flex flex-column align-center"
                  >
                    <div>
                      <img
                        src={Account}
                        alt="Account"
                        width="20px"
                        height="100%"
                      />
                    </div>
                    <div className="text-white font-12 line-height-1-2">
                      <p>Smember</p>
                    </div>
                  </a>
                )}
                {user !== "" && (
                  <>
                    <Avatar
                      sx={{ bgcolor: "#ffffff" }}
                      alt={`${user.first_name} ${user.last_name}`}
                      src={user.avatar}
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    />
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      <div className="p-3 text-center">
                        <p className="font-weight-bold">
                          {user.last_name}&nbsp;{user.first_name}
                        </p>
                        <p className="font-weight-bold m-y-4">{user.email}</p>
                        <Button
                          onClick={logout}
                          sx={[
                            {
                              backgroundColor: "red.main",
                              color: "white.main",
                            },
                            {
                              "&:hover": {
                                backgroundColor: "red.main",
                                color: "white.main",
                              },
                            },
                          ]}
                        >
                          Đăng xuất
                        </Button>
                      </div>
                    </Menu>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`global-header-overlay ${active ? "active" : ""}`}
        onClick={() => {
          setActive(false);
        }}
      >
        <div className="global-header-menu">
          <div className="ghm-box-list-menu">
            <MenuItemData menu={menuData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
