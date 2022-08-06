import BoxProduct from "../../BoxProduct/BoxProduct.js";
import BoxTitle from "../../BoxTitle/BoxTitle.js";
import CardProduct from "../../CardProduct/CardProduct.js";
import LaptopTagData from "../../../../assets/data/laptop-tag.json";
import React from "react";
import axios from "axios";

class Laptop extends React.Component {
  state = {
    laptopTag: LaptopTagData.laptop,
    laptop: [],
  };

  componentDidMount() {
    const url = "http://localhost:8000/api/getRecommendedLaptops";
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((result) => {
        this.setState({ laptop: result.data });
      });
  }

  render() {
    return (
      <div>
        <BoxTitle title="LAPTOP" items={this.state.laptopTag} />
        <div className="w-full d-flex flex-wrap p-t-4">
          {this.state.laptop.map((item, index) => (
            <BoxProduct key={index}>
              <CardProduct item={item} />
            </BoxProduct>
          ))}
        </div>
      </div>
    );
  }
}

export default Laptop;
