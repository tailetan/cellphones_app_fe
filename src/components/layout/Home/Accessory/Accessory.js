import AccessoryTagData from "../../../../assets/data/accessory-tag.json";
import BoxProduct from "../../BoxProduct/BoxProduct.js";
import BoxTitle from "../../BoxTitle/BoxTitle.js";
import CardProduct from "../../CardProduct/CardProduct.js";
import React from "react";
import axios from "axios";

class Accessory extends React.Component {
  state = {
    accessoryTag: AccessoryTagData.accessory,
    accessory: [],
  };

  componentDidMount() {
    const url = `http://localhost:8000/api/getRecommendedAccessories`;
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((result) => {
        this.setState({ accessory: result.data });
      });
  }

  render() {
    return (
      <div>
        <BoxTitle title="PHỤ KIỆN" items={this.state.accessoryTag} />
        <div className="w-full d-flex flex-wrap p-t-4">
          {this.state.accessory.map((item, index) => (
            <BoxProduct key={index}>
              <CardProduct item={item} />
            </BoxProduct>
          ))}
        </div>
      </div>
    );
  }
}

export default Accessory;
