import * as React from "react";
import * as yup from "yup";

import Button from "react-bootstrap/Button";
import Footer from "../../components/layout/Footer/Footer";
import Form from "react-bootstrap/Form";
import Header from "../../components/layout/Header/Header";
import Swal from "sweetalert2";
import Theme from "../../components/layout/Themes/Themes";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = yup
  .object({
    email: yup.string().email("Email không hợp lệ").required("Bắt buộc"),
    password: yup.string().required("Bắt buộc"),
  })
  .required();

function ResetPassword() {
  const [show, setShow] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const params = Object.fromEntries(urlSearchParams.entries());
      const token = Object.keys(params)[0];

      const temp_data = { ...data };
      temp_data.password_confirmation = data.password;
      temp_data.token = token;

      await axios.post("/reset-password", temp_data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      Toast.fire({
        icon: "success",
        title: "Cài đặt mật khẩu thành công!",
        background: "rgba(243, 252, 245, 1)",
        color: "#28a745",
      });
      window.location.href = "/smember";
    } catch (error) {
      if (error.response.data.message === "Incorrect credentials") {
        Toast.fire({
          icon: "error",
          title: "Có lỗi vui lòng thử lại!",
          background: "rgba(253, 241, 244, 1)",
          color: "#d70018",
        });
      }
    }
  };

  return (
    <Theme>
      <div>
        <Header />
        <main style={{ paddingTop: "64px" }}>
          <div className="container">
            <div className="p-4" style={{ maxWidth: "500px", margin: "auto" }}>
              <h5 className="font-weight-bold text-center">
                Cài đặt lại mật khẩu
              </h5>
              <br />
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="font-weight-bold">Email</Form.Label>
                  <Form.Control
                    {...register("email")}
                    type="email"
                    placeholder="Nhập email"
                  />
                  <Form.Text className="text-red">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="font-weight-bold">
                    Mật khẩu mới
                  </Form.Label>
                  <Form.Control
                    {...register("password")}
                    type={show ? "text" : "password"}
                    placeholder="Nhập mật khẩu mới"
                  />
                  <Form.Text className="text-red">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    checked={show}
                    onChange={() => setShow(!show)}
                    type="checkbox"
                    label="Hiển thị mật khẩu"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  style={{ width: "100%" }}
                  className="font-weight-bold"
                  type="submit"
                >
                  Cài đặt lại mật khẩu
                </Button>
              </Form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Theme>
  );
}

export default ResetPassword;
