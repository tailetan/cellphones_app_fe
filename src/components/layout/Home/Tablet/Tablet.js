import BoxProduct from "../../BoxProduct/BoxProduct.js";
import BoxTitle from "../../BoxTitle/BoxTitle.js";
import CardProduct from "../../CardProduct/CardProduct.js";
import React from "react";
import TablettagData from "../../../../assets/data/tablet-tag.json";
import axios from "axios";

class Tablet extends React.Component {
  state = {
    tabletTag: TablettagData.tablet,
    tablet: [],
  };

  componentDidMount() {
    const url = "https://localhost:8000/api/getRecommendedTablets";
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((result) => {
        this.setState({ tablet: result.data });
      });
  }

  render() {
    return (
      <div>
        <BoxTitle title="TABLET" items={this.state.tabletTag} />
        <div className="w-full d-flex flex-wrap p-t-4">
          {this.state.tablet.map((item, index) => (
            <BoxProduct key={index}>
              <CardProduct item={item} />
            </BoxProduct>
          ))}
        </div>
      </div>
    );
  }
}

export default Tablet;
