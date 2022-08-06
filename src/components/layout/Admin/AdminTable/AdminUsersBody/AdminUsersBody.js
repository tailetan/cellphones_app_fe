import * as React from "react";

import { Avatar, Chip, Stack, Tooltip } from "@mui/material";
import {
  changePage,
  setData,
  setFrom,
  setSkeleton,
  setTo,
  setTotalPage,
} from "../../../../../redux/action";
import { deleteUser, getAllUsers } from "../../../../../api/AdminUser";
import { useDispatch, useSelector } from "react-redux";

import AdminUserForm from "../../AdminUserForm/AdminUserForm";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import StyledTableCell from "../../Custom/TableCell";
import Swal from "sweetalert2";
import axios from "axios";

function AdminUsersBody(props) {
  const { row, labelId, index } = props;

  const [modalShow, setModalShow] = React.useState(false);
  const [detail_user, setDetailUser] = React.useState(null);

  const dispatch = useDispatch();
  const current_page = useSelector((state) => state.admin.current_page);
  const filter_sort = useSelector((state) => state.admin.filter_sort);
  const current_search = useSelector((state) => state.admin.search);

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

  const editDialog = async (id) => {
    const result = await axios.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    });
    setDetailUser(result.data);
    setModalShow(true);
  };

  const confirmDialog = (id) => {
    Swal.fire({
      text: "Bạn chắc chắn muốn lưu trữ sản phẩm này",
      icon: "question",
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Hủy",
      confirmButtonText: "Chắc chắn",
      confirmButtonColor: "#d70018",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setSkeleton(true));
        let sort;
        let search;

        if (current_search !== "") {
          search = current_search;
        }

        if (filter_sort !== "") {
          sort = filter_sort;
        }

        deleteUser(id).then((result) => {
          if (Object.keys(result).length === 0) {
            dispatch(setSkeleton(false));
            Toast.fire({
              icon: "error",
              title: "Xóa user không thành công!",
              background: "rgba(253, 241, 244, 1)",
              color: "#d70018",
            });
          } else if (Object.keys(result).length > 0 && result.success) {
            Toast.fire({
              icon: "success",
              title: "Xóa user thành công!",
              background: "rgba(243, 252, 245, 1)",
              color: "#28a745",
            });
            getAllUsers({
              page: current_page,
              sort,
              search,
            }).then((result) => {
              const { data, from, to, last_page } = result;
              if (data.length > 0) {
                dispatch(setSkeleton(false));
                dispatch(setFrom(from));
                dispatch(setTo(to));
                dispatch(setData(data));
                dispatch(setTotalPage(last_page));
              } else {
                getAllUsers({
                  page: current_page - 1,
                  sort,
                  search,
                }).then((result) => {
                  const { data, from, to, last_page } = result;
                  dispatch(setSkeleton(false));
                  dispatch(setFrom(from));
                  dispatch(setTo(to));
                  dispatch(setData(data));
                  dispatch(setTotalPage(last_page));
                  dispatch(changePage(current_page - 1));
                });
              }
            });
          }
        });
      }
    });
  };

  return (
    <>
      <StyledTableCell align="left">{index + 1}</StyledTableCell>
      <StyledTableCell component="th" id={labelId} scope="row">
        {row.full_name}
      </StyledTableCell>
      <StyledTableCell align="left">{row.date_of_birth}</StyledTableCell>
      <StyledTableCell align="left">
        <Chip
          label={`${
            row.gender !== null ? row.gender.toUpperCase() : "Chưa xác định"
          }`}
          sx={{
            backgroundColor: "orange.main",
            color: "white.main",
            fontWeight: 700,
            borderRadius: "6px",
          }}
        />
      </StyledTableCell>
      <StyledTableCell align="left">
        <Chip
          label={row.is_admin ? "Admin" : "User"}
          sx={{
            backgroundColor: `${row.is_admin ? "red.main" : "blue.main"}`,
            color: "white.main",
            fontWeight: 700,
            borderRadius: "6px",
          }}
        />
      </StyledTableCell>
      <StyledTableCell align="left">{row.email}</StyledTableCell>
      <StyledTableCell align="left">
        <Stack direction="row" spacing={2}>
          <Tooltip title="Chỉnh sửa">
            <Avatar
              onClick={() => editDialog(row.id)}
              variant="rounded"
              sx={{ bgcolor: "green.main", cursor: "pointer" }}
            >
              <EditRoundedIcon />
            </Avatar>
          </Tooltip>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            centered
            size="md"
          >
            <Modal.Header className="bg-red text-white">
              <h5 className="font-weight-bold">Thêm user</h5>
              <CloseRoundedIcon
                onClick={() => setModalShow(false)}
                className="text-white cursor-pointer"
              />
            </Modal.Header>
            <Modal.Body className="p-0 bg-grey">
              <AdminUserForm detail_user={detail_user} />
            </Modal.Body>
          </Modal>
          <Tooltip title="Lưu trữ">
            <Avatar
              sx={{ bgcolor: "red.main", cursor: "pointer" }}
              variant="rounded"
              onClick={() => confirmDialog(row.id)}
            >
              <DeleteRoundedIcon />
            </Avatar>
          </Tooltip>
        </Stack>
      </StyledTableCell>
    </>
  );
}

export default AdminUsersBody;

AdminUsersBody.propTypes = {
  row: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
};
