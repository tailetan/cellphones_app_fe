import * as React from "react";

import NoData from "../../../../assets/images/no_data.png";
import PropTypes from "prop-types";

class AdminNoData extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex flex-column justify-center align-center">
        <img
          src={NoData}
          width={this.props.isAdmin === "false" ? "60%" : "30%"}
          height="100%"
          alt="No Data Found"
        />
        <p className="font-20 font-weight-bold">Không có dữ liệu ...</p>
      </div>
    );
  }
}

AdminNoData.propTypes = {
  isAdmin: PropTypes.any,
};

export default AdminNoData;
