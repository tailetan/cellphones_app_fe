import axios from "axios";

export const getAllBills = async ({ paginate, page, status, sort } = {}) => {
  let queryStringArray = [];
  let url = "http://localhost:8000/api/orders";
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
    url +=
      index === "0"
        ? `?${queryStringArray[index]}`
        : `&${queryStringArray[index]}`;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  await axios
    .get(url, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};

export const deleteBill = async (id) => {
  let data = {};

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  await axios
    .delete(`http://localhost:8000/api/orders/delete/${id}`, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};
