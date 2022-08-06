import * as React from "react";
import * as yup from "yup";

import Button from "react-bootstrap/Button";
import { Controller } from "react-hook-form";
import Form from "react-bootstrap/Form";
import InputMask from "react-input-mask";
import PropTypes from "prop-types";
import Select from "react-select";
import Swal from "sweetalert2";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const options = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
];

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
    password: yup
      .string()
      .min(8, "Mật khẩu có độ dài ít nhất là 8")
      .required("Bắt buộc"),
    first_name: yup.string().required("Bắt buộc"),
    last_name: yup.string().required("Bắt buộc"),
    gender: yup.string().required("Bắt buộc"),
  })
  .required();

function RegisterForm({ changeToLoginForm }) {
  const [show, setShow] = React.useState(false);
  const [date_of_birth, setDate] = React.useState("");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      if (date_of_birth !== "") {
        const temp_data = { ...data };
        temp_data.date_of_birth = date_of_birth;
        const result = await axios.post("/register", temp_data, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        });
        if (result.status === 201) {
          changeToLoginForm();
          Toast.fire({
            icon: "success",
            title: "Đăng ký thành công!",
            background: "rgba(243, 252, 245, 1)",
            color: "#28a745",
          });
        }
      }
    } catch (error) {
      if (error) {
        Toast.fire({
          icon: "error",
          title: "Đăng ký không thành công!",
          background: "rgba(253, 241, 244, 1)",
          color: "#d70018",
        });
      }
    }
  };

  return (
    <div>
      <h6 className="font-weight-semi">
        Chào mừng bạn đến với{" "}
        <span className="font-weight-bold text-red">CellphoneS</span>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-weight-bold">Mật khẩu</Form.Label>
          <Form.Control
            {...register("password")}
            type={show ? "text" : "password"}
            placeholder="Nhập mật khẩu"
          />
          <Form.Text className="text-red">{errors.password?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label className="font-weight-bold">Họ</Form.Label>
          <Form.Control {...register("first_name")} placeholder="Nhập họ" />
          <Form.Text className="text-red">
            {errors.first_name?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label className="font-weight-bold">Tên</Form.Label>
          <Form.Control {...register("last_name")} placeholder="Nhập tên" />
          <Form.Text className="text-red">
            {errors.last_name?.message}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicGender">
          <Form.Label className="font-weight-bold">Giới tính</Form.Label>
          <Controller
            name="gender"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <Select
                  options={options}
                  onChange={(options) => onChange(options?.value)}
                  value={options?.filter((option) => value === option?.value)}
                  placeholder="Chọn giới tính"
                />
              );
            }}
          />
          <Form.Text className="text-red">{errors.gender?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
          <Form.Label className="font-weight-bold">Ngày sinh</Form.Label>
          <InputMask
            mask="9999-99-99"
            value={date_of_birth}
            onChange={() => setDate(event.target.value)}
            alwaysShowMask={true}
            style={{
              width: "100%",
              padding: "6px 12px",
              borderRadius: "0.375rem",
              border: "1px solid #ced4da",
            }}
          />
          <Form.Text className="text-red">
            {errors.date_of_birth?.message}
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
          Đăng ký
        </Button>
      </Form>
    </div>
  );
}

RegisterForm.propTypes = {
  changeToLoginForm: PropTypes.func,
};

export default RegisterForm;
