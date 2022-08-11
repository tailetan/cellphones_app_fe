import * as React from "react";

import { Avatar, Chip, Stack, Tooltip } from "@mui/material";
import { getAllBills } from "../../../../../api/AdminBills";
import {
  setData,
  setFrom,
  setPerPage,
  setSkeleton,
  setTo,
  setTotalPage,
} from "../../../../../redux/action";
import { useDispatch, useSelector } from "react-redux";

import CachedRoundedIcon from "@mui/icons-material/CachedRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
// import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import Notiflix from "notiflix";
import PropTypes from "prop-types";
import StyledTableCell from "../../Custom/TableCell";
import Swal from "sweetalert2";
import axios from "axios";
import moment from "moment";

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

function AdminBillBody(props) {
  const { row, labelId, index } = props;

  const dispatch = useDispatch();

  const current_page = useSelector((state) => state.admin.current_page);
  const filter_status = useSelector((state) => state.admin.filter_status);
  const filter_sort = useSelector((state) => state.admin.filter_sort);

  const formatData = (date) => {
    return moment(date).format("DD/MM/yyyy h:mm:ss");
  };

  const changeStatus = async (id, status) => {
    Notiflix.Block.pulse("#root", "Đang xử lý vui lòng đợi", {
      zindex: 2000,
    });
    const result = await axios.put(
      `http://localhost:8000/api/orders/update/${id}`,
      {
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    if (result.status === 200) {
      Toast.fire({
        icon: "success",
        title: "Cập nhật trạng thái thành công!",
        background: "rgba(243, 252, 245, 1)",
        color: "#28a745",
      });
      let sort;
      let status;

      if (filter_status !== "") {
        status = filter_status;
      }

      if (filter_sort !== "") {
        sort = filter_sort;
      }

      getAllBills({ page: current_page, status, sort }).then((result) => {
        const { data, from, to, last_page, per_page } = result;
        dispatch(setFrom(from));
        dispatch(setTo(to));
        dispatch(setPerPage(per_page));
        dispatch(setTotalPage(last_page));
        dispatch(setData(data));
        dispatch(setSkeleton(false));
      });

      Notiflix.Block.remove("#root");
    }
  };

  const confirmDialog = (id) => {
    Swal.fire({
      text: "Bạn chắc chắn muốn hủy đơn hàng này",
      icon: "question",
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: "Hủy",
      confirmButtonText: "Chắc chắn",
      confirmButtonColor: "#d70018",
    }).then((result) => {
      if (result.isConfirmed) {
        changeStatus(id, "canceled");
      }
    });
  };

  return (
    <>
      <StyledTableCell align="left">{index + 1}</StyledTableCell>
      <StyledTableCell component="th" id={labelId} scope="row">
        Hóa đơn {index + 1}
      </StyledTableCell>
      <StyledTableCell align="left">
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        })
          .format(row.order_amount)
          .replace("₫", "")
          .trim()}
        ₫
      </StyledTableCell>
      <StyledTableCell align="left">
        <div className="font-weight-bold">
          {formatData(row.order_date).split(" ")[0]}
        </div>
        <div>{formatData(row.order_date).split(" ")[1]}</div>
      </StyledTableCell>
      <StyledTableCell align="left">
        {row.status === "pending" && (
          <Chip
            label="Chưa xử lý"
            sx={{
              backgroundColor: "orange.main",
              color: "white.main",
              fontWeight: 700,
              borderRadius: "6px",
            }}
          />
        )}
        {row.status === "processing" && (
          <Chip
            label="Đang xử lý"
            sx={{
              backgroundColor: "blue.main",
              color: "white.main",
              fontWeight: 700,
              borderRadius: "6px",
            }}
          />
        )}
        {row.status === "completed" && (
          <Chip
            label="Hoàn thành"
            sx={{
              backgroundColor: "green.main",
              color: "white.main",
              fontWeight: 700,
              borderRadius: "6px",
            }}
          />
        )}
        {row.status === "canceled" && (
          <Chip
            label="Đã hủy"
            sx={{
              backgroundColor: "blue.light",
              color: "white.main",
              fontWeight: 700,
              borderRadius: "6px",
            }}
          />
        )}
      </StyledTableCell>
      <StyledTableCell align="left">
        <Stack direction="row" spacing={2}>
          <Tooltip title="Xử lý">
            <Avatar
              sx={{
                bgcolor: `${
                  row.status === "pending" ? "blue.main" : "grey.main"
                }`,
                cursor: `${row.status === "pending" ? "pointer" : ""}`,
              }}
              variant="rounded"
              onClick={() => {
                if (row.status === "pending") {
                  changeStatus(row.id, "processing");
                }
              }}
            >
              <CachedRoundedIcon />
            </Avatar>
          </Tooltip>
          <Tooltip title="Hoàn thành">
            <Avatar
              sx={{
                bgcolor: `${
                  row.status === "processing" || row.status === "pending"
                    ? "green.main"
                    : "grey.main"
                }`,
                cursor: `${
                  row.status === "processing" || row.status === "pending"
                    ? "pointer"
                    : ""
                }`,
              }}
              variant="rounded"
              onClick={() => {
                if (row.status === "processing" || row.status === "pending") {
                  changeStatus(row.id, "completed");
                }
              }}
            >
              <LocalShippingRoundedIcon />
            </Avatar>
          </Tooltip>
          <Tooltip title="Hủy đơn hàng">
            <Avatar
              sx={{
                bgcolor: `${
                  row.status !== "canceled" && row.status !== "completed"
                    ? "blue.light"
                    : "grey.main"
                }`,
                cursor: `${
                  row.status !== "canceled" && row.status !== "completed"
                    ? "pointer"
                    : ""
                }`,
              }}
              variant="rounded"
              onClick={() => {
                if (row.status !== "canceled" && row.status !== "completed") {
                  confirmDialog(row.id);
                }
              }}
            >
              <CancelRoundedIcon />
            </Avatar>
          </Tooltip>
        </Stack>
      </StyledTableCell>
    </>
  );
}

export default AdminBillBody;

AdminBillBody.propTypes = {
  row: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
};
