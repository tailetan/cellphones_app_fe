import "./adminbilladvanced.css";

import * as React from "react";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import {
  changePage,
  setData,
  setFilterBrand,
  setFilterCategory,
  setFilterSort,
  setFilterStatus,
  setFrom,
  setPerPage,
  setSearch,
  setSkeleton,
  setTo,
  setTotalPage,
} from "../../../../redux/action.js";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllBills } from "../../../../api/AdminBills.js";
import { mapStateToProps } from "../../../../redux/useSelector.js";

class AdminProductAdvanced extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSort = async (event) => {
    let sort;
    let status;

    this.props.setSkeleton(true);
    this.props.changePage(1);
    this.props.setSearch("");

    if (this.props.admin.filter_status) {
      status = this.props.admin.filter_status;
    }

    if (event.target.value === this.props.admin.filter_sort) {
      await this.props.setFilterSort("");
      getAllBills().then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
        this.props.setData(data);
        this.props.setSkeleton(false);
      });
      return;
    }
    await this.props.setFilterSort(event.target.value);
    sort = this.props.admin.filter_sort;
    getAllBills({ status, sort }).then((result) => {
      const { data, from, to, last_page, per_page } = result;
      this.props.setFrom(from);
      this.props.setTo(to);
      this.props.setPerPage(per_page);
      this.props.setTotalPage(last_page);
      this.props.setData(data);
      this.props.setSkeleton(false);
    });
  };

  handleStatus = async (event) => {
    let sort;
    let status;

    this.props.setSkeleton(true);
    this.props.changePage(1);
    this.props.setSearch("");

    if (this.props.admin.filter_sort) {
      sort = this.props.admin.filter_sort;
    }

    if (event.target.value === this.props.admin.filter_status) {
      await this.props.setFilterStatus("");
      getAllBills().then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
        this.props.setData(data);
        this.props.setSkeleton(false);
      });
      return;
    }
    await this.props.setFilterStatus(event.target.value);
    status = this.props.admin.filter_status;
    getAllBills({ status, sort }).then((result) => {
      const { data, from, to, last_page, per_page } = result;
      this.props.setFrom(from);
      this.props.setTo(to);
      this.props.setPerPage(per_page);
      this.props.setTotalPage(last_page);
      this.props.setData(data);
      this.props.setSkeleton(false);
    });
  };

  handleChange = (event) => {
    let sort;
    let status;

    this.props.changePage(event.target.value);
    this.props.setSkeleton(true);

    if (this.props.admin.filter_sort) {
      sort = this.props.admin.filter_sort;
    }

    if (this.props.admin.filter_status) {
      status = this.props.admin.filter_status;
    }

    getAllBills({ page: event.target.value, status, sort }).then((result) => {
      const { data, from, to, last_page, per_page } = result;
      this.props.setFrom(from);
      this.props.setTo(to);
      this.props.setPerPage(per_page);
      this.props.setTotalPage(last_page);
      this.props.setData(data);
      this.props.setSkeleton(false);
    });
  };

  render() {
    return (
      <>
        <p className="m-b-4 font-weight-bold text-red">Trang hiện tại</p>
        <FormControl sx={{ width: "100%" }} size="small">
          <InputLabel id="demo-select-small">Trang</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={this.props.admin.current_page}
            label="Trang"
            onChange={this.handleChange}
            MenuProps={{ PaperProps: { sx: { maxHeight: 500 } } }}
          >
            {[...Array(this.props.admin.total)].map((item, index) => (
              <MenuItem key={index} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p className="p-y-4 font-weight-bold text-red">Bộ lọc</p>
        <FormControl>
          <FormLabel
            id="demo-radio-buttons-group-label"
            className="font-weight-bold"
          >
            Trạng thái
          </FormLabel>
          <RadioGroup
            value={this.props.admin.filter_status}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="pending"
              control={<Radio color="red" onClick={this.handleStatus} />}
              label="Chưa xử lý"
            />
            <FormControlLabel
              value="processing"
              control={<Radio color="red" onClick={this.handleStatus} />}
              label="Đã xử lý"
            />
            <FormControlLabel
              value="completed"
              control={<Radio color="red" onClick={this.handleStatus} />}
              label="Hoàn thành"
            />
            <FormControlLabel
              value="cancelled"
              control={<Radio color="red" onClick={this.handleStatus} />}
              label="Đã hủy"
            />
          </RadioGroup>
          <br />
          <FormLabel
            id="demo-radio-buttons-group-label-2"
            className="font-weight-bold"
          >
            Sắp xếp
          </FormLabel>
          <RadioGroup
            value={this.props.admin.filter_sort}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="asc"
              control={<Radio color="red" onClick={this.handleSort} />}
              label="Tổng hóa đơn tăng dần"
            />
            <FormControlLabel
              value="desc"
              control={<Radio color="red" onClick={this.handleSort} />}
              label="Tổng hóa đơn giảm dần"
            />
          </RadioGroup>
        </FormControl>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(setData(data)),
    changePage: (data) => dispatch(changePage(data)),
    setFrom: (data) => dispatch(setFrom(data)),
    setTo: (data) => dispatch(setTo(data)),
    setSkeleton: (data) => dispatch(setSkeleton(data)),
    setFilterCategory: (data) => dispatch(setFilterCategory(data)),
    setSearch: (data) => dispatch(setSearch(data)),
    setPerPage: (data) => dispatch(setPerPage(data)),
    setTotalPage: (data) => dispatch(setTotalPage(data)),
    setFilterBrand: (data) => dispatch(setFilterBrand(data)),
    setFilterSort: (data) => dispatch(setFilterSort(data)),
    setFilterStatus: (data) => dispatch(setFilterStatus(data)),
  };
};

AdminProductAdvanced.propTypes = {
  admin: PropTypes.object,
  setData: PropTypes.func,
  changePage: PropTypes.func,
  setFrom: PropTypes.func,
  setTo: PropTypes.func,
  setSkeleton: PropTypes.func,
  setFilterCategory: PropTypes.func,
  setSearch: PropTypes.func,
  setPerPage: PropTypes.func,
  setTotalPage: PropTypes.func,
  setFilterBrand: PropTypes.func,
  setFilterStatus: PropTypes.func,
  setFilterSort: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminProductAdvanced);
