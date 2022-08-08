import "./adminheader.css";

import * as React from "react";

import {
  AppBar,
  Box,
  Button,
  Drawer,
  Menu,
  MenuItem,
  Toolbar,
} from "@mui/material";

import AdminBillAdvanced from "../AdminBillAdvanced/AdminBillAdvanced.js";
import AdminProductAdvanced from "../AdminProductAdvanced/AdminProductAdvanced.js";
import AdminUserAdvanced from "../AdminUserAdvanced/AdminUserAdvanced";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Logo from "../../../../assets/images/logo.svg";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const [open, handleOpen] = React.useState(null);
  const [pathName] = React.useState(useLocation().pathname);
  const [user, setUser] = React.useState({});

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    if (localStorage.getItem("token")) {
      const response = await axios.get("http://localhost:8000/api/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      const { data } = response;
      setUser(data);
    }
  };

  const logout = async () => {
    await axios.post(
      "http://localhost:8000/api/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleMenu = (even) => {
    handleOpen(even.currentTarget);
  };

  const handleClose = () => {
    handleOpen(null);
  };

  const drawerWidth = 240;

  return (
    <div>
      <AppBar
        className="admin-header"
        position="fixed"
        color="red"
        sx={{ zIndex: (theme) => theme.zIndex.drawer }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <div className="logo">
              <a
                href="https://cellphones.com.vn/"
                title="CellphoneS - Hệ thống bán lẻ điện thoại"
              >
                <img src={Logo} alt="Cellphones" width="100%" height="100%" />
              </a>
            </div>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <ul className="d-flex">
              <li className="m-r-5">
                <a
                  href="/admin/dashboard"
                  className={`font-weight-bold p-x-4 p-y-2 ${
                    pathName === "/admin/dashboard"
                      ? " bg-white text-red br-8px"
                      : " text-white"
                  }`}
                >
                  Dashboard
                </a>
              </li>
              <li className="m-r-5">
                <a
                  href="/admin/products"
                  className={`font-weight-bold p-x-4 p-y-2 ${
                    pathName === "/admin/products"
                      ? " bg-white text-red br-8px"
                      : " text-white"
                  }`}
                >
                  Sản phẩm
                </a>
              </li>
              <li className="m-r-5">
                <a
                  href="/admin/bills"
                  className={`font-weight-bold p-x-4 p-y-2 ${
                    pathName === "/admin/bills"
                      ? " bg-white text-red br-8px"
                      : " text-white"
                  }`}
                >
                  Hóa đơn
                </a>
              </li>
              <li>
                <a
                  href="/admin/users"
                  className={`font-weight-bold p-x-4 p-y-2 ${
                    pathName === "/admin/users"
                      ? " bg-white text-red br-8px"
                      : " text-white"
                  }`}
                >
                  Người dùng
                </a>
              </li>
            </ul>
          </Box>
          <div>
            <Button
              color="white"
              variant="text"
              onClick={handleMenu}
              endIcon={<KeyboardArrowDownRoundedIcon />}
            >
              {user.full_name}
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={open}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(open)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => logout()}>Thoát</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      {pathName !== "/admin/dashboard" && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              zIndex: 1199,
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto", padding: "16px" }}>
            {pathName === "/admin/products" && <AdminProductAdvanced />}
            {pathName === "/admin/bills" && <AdminBillAdvanced />}
            {pathName === "/admin/users" && <AdminUserAdvanced />}
          </Box>
        </Drawer>
      )}
    </div>
  );
}

export default Header;
