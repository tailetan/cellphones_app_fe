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
import { getAllUsers } from "../../../../api/AdminUser";
import { mapStateToProps } from "../../../../redux/useSelector.js";

class AdminUserAdvanced extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSort = async (event) => {
    let sort;

    this.props.setSkeleton(true);
    this.props.changePage(1);
    this.props.setSearch("");

    if (event.target.value === this.props.admin.filter_sort) {
      await this.props.setFilterSort("");
      getAllUsers().then((result) => {
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
    getAllUsers({ sort }).then((result) => {
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

    this.props.changePage(event.target.value);
    this.props.setSkeleton(true);

    if (this.props.admin.filter_sort) {
      sort = this.props.admin.filter_sort;
    }

    getAllUsers({ page: event.target.value, status, sort }).then((result) => {
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
              label="Tên: A - Z"
            />
            <FormControlLabel
              value="desc"
              control={<Radio color="red" onClick={this.handleSort} />}
              label="Tên: Z - A"
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

AdminUserAdvanced.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminUserAdvanced);
