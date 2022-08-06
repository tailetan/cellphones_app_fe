import "./admindashboardoverview.css";

import * as React from "react";

import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import CreditScoreRoundedIcon from "@mui/icons-material/CreditScoreRounded";
import { Grid } from "@mui/material";
import MoveToInboxRoundedIcon from "@mui/icons-material/MoveToInboxRounded";
import OutboxRoundedIcon from "@mui/icons-material/OutboxRounded";

export default class AdminDashboardOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={3}>
          <div className="admin-overview-card red-card p-y-8 p-x-8 d-flex align-center">
            <div className="flex-1">
              <h4 className="text-red font-weight-bold">Còn hàng</h4>
              <h5 className="font-weight-bold">100</h5>
            </div>
            <div className="icon p-x-4 p-y-4 bg-red d-flex align-center justify-center">
              <MoveToInboxRoundedIcon className="text-white" />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="admin-overview-card green-card p-y-8 p-x-8 d-flex align-center">
            <div className="flex-1">
              <h4 className="text-green font-weight-bold">Hết hàng</h4>
              <h5 className="font-weight-bold">100</h5>
            </div>
            <div className="icon p-x-4 p-y-4 bg-green d-flex align-center justify-center">
              <OutboxRoundedIcon className="text-white" />
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <div className="admin-overview-card blue-card p-y-8 p-x-8 d-flex align-center">
              <div className="flex-1">
                <h4 className="text-blue font-weight-bold">Đang xử lý</h4>
                <h5 className="font-weight-bold">100</h5>
              </div>
              <div className="icon p-x-4 p-y-4 bg-blue d-flex align-center justify-center">
                <CreditCardRoundedIcon className="text-white" />
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <div>
              <div className="admin-overview-card purple-card p-y-8 p-x-8 d-flex align-center">
                <div className="flex-1">
                  <h4 className="text-purple font-weight-bold">Đã xử lý</h4>
                  <h5 className="font-weight-bold">100</h5>
                </div>
                <div className="icon p-x-4 p-y-4 bg-purple d-flex align-center justify-center">
                  <CreditScoreRoundedIcon className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    );
  }
}
