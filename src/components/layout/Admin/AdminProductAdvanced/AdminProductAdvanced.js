import './adminproductadvanced.css';

import * as React from 'react';

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select
} from '@mui/material';
import {
  changePage,
  setData,
  setFilterBrand,
  setFilterCategory,
  setFrom,
  setPerPage,
  setSearch,
  setSkeleton,
  setTo,
  setTotalPage,
  setFilterSort
} from '../../../../redux/action.js';

import Brands from '../../../../assets/data/brands.json';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllProducts } from '../../../../api/AdminProducts.js';
import { mapStateToProps } from '../../../../redux/useSelector.js';

const brands = Brands;
class AdminProductAdvanced extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSortDate = async (event) => {
    let search;
    let category;
    let brand;
    let date;

    this.props.setSkeleton(true);
    this.props.changePage(1);

    if (this.props.admin.search) {
      search = this.props.admin.search;
    }

    if (this.props.admin.filter_category) {
      category = this.props.admin.filter_category;
    }

    if (this.props.admin.filter_brand) {
      brand = this.props.admin.filter_brand;
    }

    if (event.target.value === this.props.admin.filter_sort) {
      await this.props.setFilterSort('');
      getAllProducts({
        page: event.target.value,
        search: search,
        category: category,
        brand: brand
      }).then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setData(data);
        this.props.setSkeleton(false);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
      });
    } else {
      await this.props.setFilterSort(event.target.value);
      date = this.props.admin.filter_sort;
      getAllProducts({
        page: event.target.value,
        search: search,
        category: category,
        brand: brand,
        date: date
      }).then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setData(data);
        this.props.setSkeleton(false);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
      });
    }
  };

  handleChange = (event) => {
    let search;
    let category;
    let brand;
    let date;

    this.props.changePage(event.target.value);
    this.props.setSkeleton(true);

    if (this.props.admin.search) {
      search = this.props.admin.search;
    }

    if (this.props.admin.filter_category) {
      category = this.props.admin.filter_category;
    }

    if (this.props.admin.filter_brand) {
      brand = this.props.admin.filter_brand;
    }

    if (this.props.admin.filter_sort) {
      date = this.props.admin.filter_sort;
    }

    getAllProducts({
      page: event.target.value,
      search: search,
      category: category,
      brand: brand,
      date
    }).then((result) => {
      const { data, from, to, last_page, per_page } = result;
      this.props.setFrom(from);
      this.props.setTo(to);
      this.props.setData(data);
      this.props.setSkeleton(false);
      this.props.setPerPage(per_page);
      this.props.setTotalPage(last_page);
    });
  };

  handleFilterBrand = async (event) => {
    let category;
    let brand;
    let date;

    this.props.setSkeleton(true);
    this.props.changePage(1);
    this.props.setSearch('');

    if (this.props.admin.filter_category) {
      category = this.props.admin.filter_category;
    }

    if (this.props.admin.filter_sort) {
      date = this.props.admin.filter_sort;
    }

    if (event.target.value === this.props.admin.filter_brand) {
      await this.props.setFilterBrand('');
      getAllProducts({ category: category, brand: brand, date }).then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setData(data);
        this.props.setSkeleton(false);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
      });
    } else {
      await this.props.setFilterBrand(event.target.value);
      brand = this.props.admin.filter_brand;
      getAllProducts({ category: category, brand: brand, date }).then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setData(data);
        this.props.setSkeleton(false);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
      });
    }
  };

  handleFilterCategory = async (event) => {
    let category;
    let brand;
    let date;

    this.props.setSkeleton(true);
    this.props.changePage(1);
    this.props.setSearch('');

    if (this.props.admin.filter_brand) {
      brand = this.props.admin.filter_brand;
    }

    if (this.props.admin.filter_sort) {
      date = this.props.admin.filter_sort;
    }

    if (event.target.value === this.props.admin.filter_category) {
      await this.props.setFilterCategory('');
      getAllProducts({ category: category, brand: brand, date }).then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setData(data);
        this.props.setSkeleton(false);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
      });
    } else {
      await this.props.setFilterCategory(event.target.value);
      category = this.props.admin.filter_category;
      getAllProducts({ category: category, brand: brand, date }).then((result) => {
        const { data, from, to, last_page, per_page } = result;
        this.props.setFrom(from);
        this.props.setTo(to);
        this.props.setData(data);
        this.props.setSkeleton(false);
        this.props.setPerPage(per_page);
        this.props.setTotalPage(last_page);
      });
    }
  };

  render() {
    return (
      <>
        <p className="m-b-4 font-weight-bold text-red">Trang hiện tại</p>
        <FormControl sx={{ width: '100%' }} size="small">
          <InputLabel id="demo-select-small">Trang</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={this.props.admin.current_page}
            label="Trang"
            onChange={this.handleChange}
            MenuProps={{ PaperProps: { sx: { maxHeight: 500 } } }}>
            {[...Array(this.props.admin.total)].map((item, index) => (
              <MenuItem key={index} value={index + 1}>
                {index + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p className="p-y-4 font-weight-bold text-red">Bộ lọc</p>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label" className="font-weight-bold">
            Thể loại
          </FormLabel>
          <RadioGroup
            value={this.props.admin.filter_category}
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group">
            <FormControlLabel
              value="Điện Thoại"
              control={<Radio color="red" onClick={this.handleFilterCategory} />}
              label="Điện thoại"
            />
            <FormControlLabel
              value="Laptop"
              control={<Radio color="red" onClick={this.handleFilterCategory} />}
              label="Laptop"
            />
            <FormControlLabel
              value="Tablet"
              control={<Radio color="red" onClick={this.handleFilterCategory} />}
              label="Tablet"
            />
            <FormControlLabel
              value="Phụ kiện"
              control={<Radio color="red" onClick={this.handleFilterCategory} />}
              label="Phụ kiện"
            />
          </RadioGroup>
          <br />
          <FormLabel id="demo-radio-buttons-group-label-2" className="font-weight-bold">
            Hãng
          </FormLabel>
          <RadioGroup
            value={this.props.admin.filter_brand}
            aria-labelledby="demo-radio-buttons-group-label-2"
            name="radio-buttons-group-2">
            {brands.map((item, idx) => (
              <FormControlLabel
                key={idx}
                value={item.value}
                control={<Radio color="red" onClick={this.handleFilterBrand} />}
                label={item.name}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <p className="p-y-4 font-weight-bold text-red">Sắp xếp</p>{' '}
        <RadioGroup
          value={this.props.admin.filter_sort}
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group">
          <FormControlLabel
            value="sort[updated_at]=asc"
            control={<Radio color="red" onClick={this.handleSortDate} />}
            label="Theo ngày chỉnh sửa: A - Z"
          />
          <FormControlLabel
            value="sort[updated_at]=desc"
            control={<Radio color="red" onClick={this.handleSortDate} />}
            label="Theo ngày chỉnh sửa: Z - A"
          />
        </RadioGroup>
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
    setFilterSort: (data) => dispatch(setFilterSort(data))
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
  setFilterSort: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductAdvanced);
