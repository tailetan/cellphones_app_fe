import * as React from "react";

import AdminBarChart from "./AdminBarChart.js";
import AdminDashboardOverview from "../AdminDashboardOverview/AdminDashboardOverview.js";
import AdminLineChart from "./AdminLineChart.js";

export default class AdminDashboard extends React.Component {
  componentDidMount() {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "16px Quicksand";
    ctx.save();
  }

  render() {
    return (
      <div>
        <h5 className="m-b-4 font-weight-bold">Tổng quan CellphoneS</h5>
        <AdminDashboardOverview />
        <h5 className="m-b-4 m-t-4 font-weight-bold">
          Thống kế sản phẩm bán được của Cellphones
        </h5>
        <AdminBarChart />
        <h5 className="m-b-4 m-t-4 font-weight-bold">
          Thống kế hóa đơn của Cellphones
        </h5>
        <AdminLineChart />
      </div>
    );
  }
}
