import './adminuserform.css';

import { Button, TextField } from '@mui/material';
import { Col, Form, Row } from 'react-bootstrap';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import Swal from 'sweetalert2';
import axios from 'axios';
import moment from 'moment';
import { useEffect } from 'react';

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

const genderList = [
  {
    id: 0,
    value: 'male',
    label: 'Nam'
  },
  {
    id: 1,
    value: 'female',
    label: 'Nữ'
  }
];

function AdminUserForm(props) {
  const [first_name, setFirstName] = React.useState('');
  const [last_name, setLastName] = React.useState('');
  const [date_of_birth, setDateOfBirth] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [button_title, setButtonTitle] = React.useState('Thêm');
  const [isEdit, setIsEdit] = React.useState(false);
  const [id, setId] = React.useState('');

  useEffect(() => {
    if (props?.detail_user !== null) {
      const data = props.detail_user;
      setButtonTitle('Chỉnh sửa');
      setIsEdit(true);
      setId(data.id);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setEmail(data.email);
      if (data.gender === 'male') {
        setGender({
          id: 0,
          value: 'male',
          label: 'Nam'
        });
      } else {
        setGender({
          id: 1,
          value: 'female',
          label: 'Nữ'
        });
      }
      setDateOfBirth(moment.utc(data.date_of_birth).valueOf());
    }
  }, []);

  const changeFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const changeLastName = (event) => {
    setLastName(event.target.value);
  };

  const changeDateOfBirth = (event) => {
    setDateOfBirth(event);
  };

  const changeGender = (event) => {
    setGender(event);
  };

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const checkInfor = () => {
    if (!isEdit) {
      return (
        first_name === '' ||
        last_name === '' ||
        date_of_birth === '' ||
        gender === '' ||
        gender === null ||
        email === '' ||
        password === '' ||
        !validateEmail(email)
      );
    } else {
      return (
        first_name === '' ||
        last_name === '' ||
        date_of_birth === '' ||
        gender === '' ||
        gender === null ||
        email === '' ||
        !validateEmail(email)
      );
    }
  };

  const createUser = async (e) => {
    e.preventDefault();
    Notiflix.Block.pulse('.admin-user-form', 'Đang xử lý vui lòng đợi');
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;

    const body = {
      first_name,
      last_name,
      email,
      is_admin: true,
      joined_date: today,
      date_of_birth: moment(date_of_birth).format('YYYY-MM-DD'),
      gender: gender.value
    };

    if (!isEdit) {
      body.password = password;
    }

    let action = 'create';

    if (isEdit) {
      action = `update/${id}`;
    }

    let result;
    if (!isEdit) {
      result = await axios.post(`/user/${action}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    } else {
      result = await axios.put(`/user/${action}`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
    }

    if (result.status === 200) {
      Toast.fire({
        icon: 'success',
        title: `${button_title} user thành công!`,
        background: 'rgba(243, 252, 245, 1)',
        color: '#28a745'
      });
      window.location.reload();
    } else {
      Toast.fire({
        icon: 'error',
        title: `${button_title} user không thành công!`,
        background: 'rgba(253, 241, 244, 1)',
        color: '#d70018'
      });
    }
  };

  return (
    <div>
      <form onSubmit={createUser}>
        <Row className="m-0 admin-user-form">
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="font-weight-bold">Họ</Form.Label>
              <TextField value={first_name} onChange={changeFirstName} fullWidth variant="filled" />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="font-weight-bold">Tên</Form.Label>
              <TextField value={last_name} onChange={changeLastName} fullWidth variant="filled" />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="font-weight-bold">Ngày sinh</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  inputFormat="yyyy-MM-dd"
                  value={date_of_birth}
                  onChange={changeDateOfBirth}
                  renderInput={(params) => <TextField {...params} fullWidth variant="filled" />}
                />
              </LocalizationProvider>
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3">
              <Form.Label className="font-weight-bold">Giới tính</Form.Label>
              <Select
                value={gender}
                onChange={changeGender}
                isClearable={true}
                placeholder=""
                options={genderList}
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="font-weight-bold">Email</Form.Label>
              <TextField value={email} onChange={changeEmail} fullWidth variant="filled" />
            </Form.Group>
          </Col>
          <Col xs={6}>
            {!isEdit && (
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="font-weight-bold">Mật khẩu</Form.Label>
                <TextField
                  value={password}
                  type="password"
                  onChange={changePassword}
                  fullWidth
                  variant="filled"
                />
              </Form.Group>
            )}
          </Col>
          <Col xs={12} className="d-flex justify-content-end">
            <Button
              sx={[
                { backgroundColor: 'red.main', color: 'white.main' },
                {
                  '&:hover': {
                    backgroundColor: 'red.main',
                    color: 'white.main'
                  }
                }
              ]}
              disabled={checkInfor()}
              type="submit">
              {button_title}
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

AdminUserForm.propTypes = {
  detail_user: PropTypes.any
};

export default AdminUserForm;
