import * as React from "react";

import AdminHeader from "../../components/layout/Admin/AdminHeader/AdminHeader.js";
import AdminLogin from "../../components/layout/Admin/AdminLogin/AdminLogin.js";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import Theme from "../../components/layout/Themes/Themes";
import Toolbar from "@mui/material/Toolbar";
import { useEffect } from "react";

function Admin(props) {
  const [isLogin, setIsLogin] = React.useState(false);
  const { layout } = props;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, []);

  return (
    <Theme>
      <div>
        {isLogin ? (
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AdminHeader />
            <Box
              component="main"
              sx={{ flexGrow: 1, p: 4, backgroundColor: "grey.light" }}
            >
              <Toolbar />
              <div>{layout}</div>
            </Box>
          </Box>
        ) : (
          <AdminLogin />
        )}
      </div>
    </Theme>
  );
}

export default Admin;

Admin.propTypes = {
  layout: PropTypes.any.isRequired,
};
