import * as React from 'react';
import * as yup from 'yup';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  width: '26em',
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

const schema = yup
  .object({
    email: yup.string().email('Email không hợp lệ').required('Bắt buộc'),
    password: yup.string().required('Bắt buộc')
  })
  .required();

function LoginForm() {
  const [show, setShow] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = async (data) => {
    try {
      const result = await axios.post('/login', data);
      const { token } = result.data;
      localStorage.setItem('user_login_token', token);
      Toast.fire({
        icon: 'success',
        title: 'Đăng nhập thành công!',
        background: 'rgba(243, 252, 245, 1)',
        color: '#28a745'
      });
      window.location.href = '/';
    } catch (error) {
      if (error.response.data.message === 'Incorrect credentials') {
        Toast.fire({
          icon: 'error',
          title: 'Thông tin đăng nhập không chính xác!',
          background: 'rgba(253, 241, 244, 1)',
          color: '#d70018'
        });
      }
    }
  };

  return (
    <div>
      <h6 className="font-weight-semi">
        Chào mừng bạn quay trở lại <span className="font-weight-bold text-red">CellphoneS</span>
      </h6>
      <br />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-weight-bold">Email</Form.Label>
          <Form.Control {...register('email')} type="email" placeholder="Nhập email" />
          <Form.Text className="text-red">{errors.email?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-weight-bold">Mật khẩu</Form.Label>
          <Form.Control
            {...register('password')}
            type={show ? 'text' : 'password'}
            placeholder="Nhập mật khẩu"
          />
          <Form.Text className="text-red">{errors.password?.message}</Form.Text>
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
          style={{ width: '100%' }}
          className="font-weight-bold"
          type="submit">
          Đăng nhập
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
