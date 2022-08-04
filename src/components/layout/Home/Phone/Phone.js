/* eslint-disable */

import BoxProduct from '../../BoxProduct/BoxProduct.js';
import BoxTitle from '../../BoxTitle/BoxTitle.js';
import CardProduct from '../../CardProduct/CardProduct.js';
import PhoneTagData from '../../../../assets/data/phone-tag.json';
import React from 'react';
import axios from 'axios';

class Phone extends React.Component {
  state = {
    phoneTag: PhoneTagData.phone,
    phone: []
  };

  componentDidMount() {
    const url = '/getRecommendedPhones';
    axios.get(url).then((result) => {
      this.setState({ phone: result.data });
    });
  }

  render() {
    return (
      <div>
        <BoxTitle title="ĐIỆN THOẠI NỔI BẬT NHẤT" items={this.state.phoneTag} />
        <div className="w-full d-flex flex-wrap p-t-4">
          {this.state.phone.map((item, index) => (
            <BoxProduct key={index}>
              <CardProduct item={item} />
            </BoxProduct>
          ))}
        </div>
      </div>
    );
  }
}

export default Phone;
