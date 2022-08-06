import "./adminlogin.css";

import * as React from "react";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Logo from "../../../../assets/images/logo.svg";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import Notiflix from "notiflix";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AdminLogin() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (values.email && values.password) {
      callLogin();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const callLogin = async () => {
    Notiflix.Block.pulse("#admin-login-form", "Đang đăng nhập vui lòng đợi");
    const url = "/login";
    const body = { email: values.email, password: values.password };
    try {
      const result = await axios.post(url, body);
      const { data } = result;
      const { token } = data;
      localStorage.setItem("token", token);
      setOpen(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Đăng nhập thành công
        </Alert>
      </Snackbar>
      <div id="admin-login-form" className="form">
        <div className="card">
          <div className="logo">
            <a href="/" title="CellphoneS - Hệ thống bán lẻ điện thoại">
              <img src={Logo} alt="Cellphones" width="100%" height="100%" />
            </a>
          </div>
          <div className="body">
            <div className="title">Đăng nhập hệ thống</div>
            <form onSubmit={handleLogin}>
              <Stack spacing={2}>
                <TextField
                  size="small"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  helperText="Vui lòng nhập Email"
                  color="red"
                  value={values.email}
                  onChange={handleChange("email")}
                />
                <TextField
                  size="small"
                  fullWidth
                  label="Mật khẩu"
                  variant="outlined"
                  helperText="Vui lòng tạo mật khẩu"
                  color="red"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <a className="forgot">Quên mật khẩu</a>
                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  sx={[
                    { backgroundColor: "red.main" },
                    {
                      "&:hover": {
                        backgroundColor: "red.main",
                      },
                    },
                  ]}
                >
                  Đăng nhập
                </Button>
              </Stack>
            </form>
          </div>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default AdminLogin;
