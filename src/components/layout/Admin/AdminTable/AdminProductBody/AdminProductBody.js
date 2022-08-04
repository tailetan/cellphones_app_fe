import * as React from 'react';

import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import { Stack, Avatar, Chip, Tooltip } from '@mui/material';
import StyledTableCell from '../../Custom/TableCell.js';
import Swal from 'sweetalert2';
import moment from 'moment';
import { deleteProduct, getProductById } from '../../../../../api/AdminProducts.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSkeleton,
  setFrom,
  setTo,
  setData,
  setTotalPage,
  changePage
} from '../../../../../redux/action.js';
import { getAllProducts } from '../../../../../api/AdminProducts.js';
import PropTypes from 'prop-types';

function AdminProductBody(props) {
  const { row, index, labelId } = props;

  const dispatch = useDispatch();
  const current_page = useSelector((state) => state.admin.current_page);
  const current_search = useSelector((state) => state.admin.current_search);
  const filter_category = useSelector((state) => state.admin.filter_category);
  const filter_brand = useSelector((state) => state.admin.filter_brand);

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

  const confirmDialog = (id) => {
    Swal.fire({
      text: 'Bạn chắc chắn muốn lưu trữ sản phẩm này',
      icon: 'question',
      showCancelButton: true,
      focusConfirm: false,
      cancelButtonText: 'Hủy',
      confirmButtonText: 'Chắc chắn',
      confirmButtonColor: '#d70018'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setSkeleton(true));
        let category;
        let brand;
        let search;

        if (current_search) {
          search = current_search;
        }

        if (filter_brand) {
          brand = filter_brand;
        }

        if (filter_category) {
          category = filter_category;
        }

        deleteProduct(id).then((result) => {
          if (Object.keys(result).length === 0) {
            dispatch(setSkeleton(false));
            Toast.fire({
              icon: 'error',
              title: 'Xóa sản phẩm không thành công!',
              background: 'rgba(253, 241, 244, 1)',
              color: '#d70018'
            });
          } else if (Object.keys(result).length > 0 && result.success) {
            Toast.fire({
              icon: 'success',
              title: 'Xóa sản phẩm thành công!',
              background: 'rgba(243, 252, 245, 1)',
              color: '#28a745'
            });
            getAllProducts({
              page: current_page,
              category: category,
              brand: brand,
              search: search
            }).then((result) => {
              const { data, from, to, last_page } = result;
              if (data.length > 0) {
                dispatch(setSkeleton(false));
                dispatch(setFrom(from));
                dispatch(setTo(to));
                dispatch(setData(data));
                dispatch(setTotalPage(last_page));
              } else {
                getAllProducts({
                  page: current_page - 1,
                  category: category,
                  brand: brand,
                  search: search
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

  const formatData = (date) => {
    return moment(date).format('DD/MM/yyyy h:mm:ss');
  };

  const editItem = async (id) => {
    const result = await getProductById(id);
    props.editItem(result);
  };

  return (
    <>
      <StyledTableCell align="left">{index + 1}</StyledTableCell>
      <StyledTableCell align="left">
        {row.product_thumbnail ? (
          <Avatar sx={{ width: 80, height: 80 }} variant="rounded" src={row.product_thumbnail}>
            <PhotoRoundedIcon sx={{ width: 80, height: 80 }} />
          </Avatar>
        ) : (
          <Avatar sx={{ width: 80, height: 80 }} variant="rounded">
            <PhotoRoundedIcon />
          </Avatar>
        )}
      </StyledTableCell>
      <StyledTableCell component="th" id={labelId} scope="row">
        {row.product_name}
      </StyledTableCell>
      {row.product_price !== 0 ? (
        <StyledTableCell align="left">
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
          })
            .format(row.product_price)
            .replace('₫', '')
            .trim()}
          ₫
        </StyledTableCell>
      ) : (
        <StyledTableCell align="left">Giá liên hệ</StyledTableCell>
      )}
      <StyledTableCell align="left">{row.category.category_name}</StyledTableCell>
      <StyledTableCell align="left">
        <div className="font-weight-bold">{formatData(row.created_at).split(' ')[0]}</div>
        <div>{formatData(row.created_at).split(' ')[1]}</div>
      </StyledTableCell>
      <StyledTableCell align="left">
        <div className="font-weight-bold">{formatData(row.updated_at).split(' ')[0]}</div>
        <div>{formatData(row.updated_at).split(' ')[1]}</div>
      </StyledTableCell>
      <StyledTableCell align="left">
        {row.product_quantity > 0 ? (
          <Chip label="Còn hàng" sx={{ backgroundColor: 'green.main', color: 'white.main' }} />
        ) : (
          <Chip label="Hết hàng" sx={{ backgroundColor: 'blue.main', color: 'white.main' }} />
        )}
      </StyledTableCell>
      <StyledTableCell align="left">
        <Stack direction="row" spacing={2}>
          <Tooltip title="Chỉnh sửa">
            <Avatar
              sx={{ bgcolor: 'green.main', cursor: 'pointer' }}
              variant="rounded"
              onClick={() => editItem(row.id)}>
              <EditRoundedIcon />
            </Avatar>
          </Tooltip>
          <Tooltip title="Lưu trữ">
            <Avatar
              sx={{ bgcolor: 'red.main', cursor: 'pointer' }}
              variant="rounded"
              onClick={() => confirmDialog(row.id)}>
              <DeleteRoundedIcon />
            </Avatar>
          </Tooltip>
        </Stack>
      </StyledTableCell>
    </>
  );
}

export default AdminProductBody;

AdminProductBody.propTypes = {
  row: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  labelId: PropTypes.string.isRequired,
  editItem: PropTypes.func.isRequired
};
