import axios from 'axios';

export const getAllBills = async ({ paginate, page, status, sort } = {}) => {
  let queryStringArray = [];
  let url = '/orders';
  let data = {};

  if (paginate) {
    queryStringArray.push(`paginate=${paginate}`);
  }

  if (page) {
    queryStringArray.push(`page=${page}`);
  }

  if (status) {
    queryStringArray.push(`filter[status]=${status}`);
  }

  if (sort) {
    queryStringArray.push(`sort[order_amount]=${sort}`);
  }

  for (const index in queryStringArray) {
    url += index === '0' ? `?${queryStringArray[index]}` : `&${queryStringArray[index]}`;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };

  await axios
    .get(url, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log('There was an error!', error);
    });

  return data;
};

export const deleteBill = async (id) => {
  let data = {};

  let config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  };

  await axios
    .delete(`/orders/delete/${id}`, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log('There was an error!', error);
    });

  return data;
};
