import * as React from "react";
import * as yup from "yup";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
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
  })
  .required();

function ForgotPassword({ changeToLoginForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      await axios.post("/forget-password", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });
      Toast.fire({
        icon: "success",
        title: "Vui lòng kiểm tra email và làm theo hướng dẫn!",
        background: "rgba(243, 252, 245, 1)",
        color: "#28a745",
      });
      changeToLoginForm();
    } catch (error) {
      if (error.response.data.message === "Incorrect credentials") {
        Toast.fire({
          icon: "error",
          title: "Đã có lỗi. Vui lòng thử lại!",
          background: "rgba(253, 241, 244, 1)",
          color: "#d70018",
        });
      }
    }
  };

  return (
    <div>
      <h6 className="font-weight-semi">
        Vui lòng nhập email để tiến hành cài đặt lại mật khẩu
      </h6>
      <br />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-weight-bold">Email</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="Nhập email"
          />
          <Form.Text className="text-red">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Button
          variant="primary"
          style={{ width: "100%" }}
          className="font-weight-bold"
          type="submit"
        >
          Gửi
        </Button>
      </Form>
    </div>
  );
}

ForgotPassword.propTypes = {
  changeToLoginForm: PropTypes.func,
};

export default ForgotPassword;
