import './adminproduct.css';

import * as React from 'react';

import { Avatar, Chip } from '@mui/material';
import {
  changePage,
  setCurrentSearch,
  setData,
  setFilterBrand,
  setFilterCategory,
  setFrom,
  setPerPage,
  setSearch,
  setSkeleton,
  setTo,
  setTotalPage
} from '../../../../redux/action';

import AdminTable from '../AdminTable/AdminTable.js';
import ProductTableHeading from '../../../../assets/data/admin-product-heading.json';
import PropTypes from 'prop-types';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { getAllProducts } from '../../../../api/AdminProducts.js';
import { mapStateToProps } from '../../../../redux/useSelector.js';

class AdminProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  headCells = [...ProductTableHeading];

  componentDidMount() {
    this.getAllProductsData();
  }

  getAllProductsData = () => {
    getAllProducts().then((result) => {
      const { current_page, data, from, to, last_page, per_page } = result;
      this.props.changePage(current_page);
      this.props.setFrom(from);
      this.props.setTo(to);
      this.props.setPerPage(per_page);
      this.props.setTotalPage(last_page);
      this.props.setData(data);
      this.props.setSkeleton(false);
    });
  };

  handleChangeSearch = (e) => {
    this.props.setSearch(e.target.value);
  };

  handleDeleteSearch = () => {
    this.props.setSkeleton(true);
    this.props.setSearch('');
    this.props.setCurrentSearch('');
    this.getAllProductsData();
  };

  searchProduct = async () => {
    this.props.setSkeleton(true);
    this.props.setCurrentSearch(this.props.admin.search);
    this.props.setFilterCategory('');
    this.props.setFilterBrand('');
    getAllProducts({ search: this.props.admin.search }).then((result) => {
      const { current_page, data, from, to, last_page, per_page } = result;
      this.props.changePage(current_page);
      this.props.setFrom(from);
      this.props.setTo(to);
      this.props.setPerPage(per_page);
      this.props.setTotalPage(last_page);
      this.props.setData(data);
      this.props.setSkeleton(false);
    });
  };

  resetAll = async () => {
    this.props.setFilterCategory('');
    this.props.setFilterBrand('');
    this.handleDeleteSearch();
  };

  render() {
    return (
      <div className="admin-card-product">
        <div className="acp-header">
          <p>DANH SÁCH SẢN PHẨM</p>
          <div className="d-flex">
            <TextField
              fullWidth
              variant="filled"
              value={this.props.admin.search}
              onChange={this.handleChangeSearch}
              placeholder="Tìm kiếm"
            />
            <Avatar
              sx={{ bgcolor: 'red.main', cursor: 'pointer', marginLeft: '12px' }}
              variant="rounded"
              onClick={this.searchProduct}>
              <SearchRoundedIcon />
            </Avatar>
            <Avatar
              sx={{ bgcolor: 'red.main', cursor: 'pointer', marginLeft: '12px' }}
              variant="rounded"
              onClick={this.resetAll}>
              <RestartAltRoundedIcon />
            </Avatar>
          </div>
        </div>
        <div className="acp-body">
          {this.props.admin.current_search && (
            <>
              <p className="m-b-4 font-weight-bold">Từ khóa tìm kiếm</p>
              <Chip
                label={this.props.admin.current_search}
                sx={{ backgroundColor: 'blue.main', color: 'white.main' }}
              />
              <br />
            </>
          )}
          <AdminTable rows={this.props.admin.data} heading={this.headCells} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(setData(data)),
    changePage: (data) => dispatch(changePage(data)),
    setFrom: (data) => dispatch(setFrom(data)),
    setTo: (data) => dispatch(setTo(data)),
    setPerPage: (data) => dispatch(setPerPage(data)),
    setTotalPage: (data) => dispatch(setTotalPage(data)),
    setSkeleton: (data) => dispatch(setSkeleton(data)),
    setSearch: (data) => dispatch(setSearch(data)),
    setCurrentSearch: (data) => dispatch(setCurrentSearch(data)),
    setFilterCategory: (data) => dispatch(setFilterCategory(data)),
    setFilterBrand: (data) => dispatch(setFilterBrand(data))
  };
};

AdminProduct.propTypes = {
  setData: PropTypes.func,
  changePage: PropTypes.func,
  setFrom: PropTypes.func,
  setTo: PropTypes.func,
  setPerPage: PropTypes.func,
  setTotalPage: PropTypes.func,
  setSkeleton: PropTypes.func,
  setSearch: PropTypes.func,
  setCurrentSearch: PropTypes.func,
  setFilterCategory: PropTypes.func,
  setFilterBrand: PropTypes.func,
  admin: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProduct);
