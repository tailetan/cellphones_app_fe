import "./adminbill.css";

import * as React from "react";

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
  setTotalPage,
} from "../../../../redux/action";

import AdminTable from "../AdminTable/AdminTable.js";
import BillsTableHeading from "../../../../assets/data/admin-bills-heading.json";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllBills } from "../../../../api/AdminBills.js";
import { mapStateToProps } from "../../../../redux/useSelector";

class AdminBills extends React.Component {
  constructor(props) {
    super(props);
  }

  // Data Heading
  headCells = [...BillsTableHeading];

  componentDidMount() {
    this.getAllBillsData();
  }

  getAllBillsData = () => {
    getAllBills().then((result) => {
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

  render() {
    return (
      <>
        <div className="admin-card-bills">
          <div className="acb-header">
            <p className="font-20px">HÓA ĐƠN</p>
          </div>
          <div className="acb-body">
            <AdminTable rows={this.props.admin.data} heading={this.headCells} />
          </div>
        </div>
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
    setPerPage: (data) => dispatch(setPerPage(data)),
    setTotalPage: (data) => dispatch(setTotalPage(data)),
    setSkeleton: (data) => dispatch(setSkeleton(data)),
    setSearch: (data) => dispatch(setSearch(data)),
    setCurrentSearch: (data) => dispatch(setCurrentSearch(data)),
    setFilterCategory: (data) => dispatch(setFilterCategory(data)),
    setFilterBrand: (data) => dispatch(setFilterBrand(data)),
  };
};

AdminBills.propTypes = {
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
  admin: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminBills);
