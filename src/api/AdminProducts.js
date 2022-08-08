import axios from "axios";

export const getAllProducts = async ({
  paginate,
  page,
  search,
  category,
  brand,
  sort,
  date,
} = {}) => {
  const queryStringArray = [];
  let url = "https://localhost:8000/api/products";
  let data = {};

  if (paginate) {
    queryStringArray.push(`paginate=${paginate}`);
  }

  if (page) {
    queryStringArray.push(`page=${page}`);
  }

  if (search) {
    queryStringArray.push(`search=${search}`);
  }

  if (category) {
    queryStringArray.push(`filter[category_name]=${category}`);
  }

  if (brand) {
    queryStringArray.push(`filter[brand_name]=${brand}`);
  }

  if (sort) {
    queryStringArray.push(`sort[product_price]=${sort}`);
  }

  if (date) {
    queryStringArray.push(date);
  }

  for (const index in queryStringArray) {
    url +=
      index === "0"
        ? `?${queryStringArray[index]}`
        : `&${queryStringArray[index]}`;
  }

  await axios
    .get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};

export const createProduct = async (body) => {
  let data = {};

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  await axios
    .post("https://localhost:8000/api/product/create", body, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};

export const deleteProduct = async (id) => {
  let data = {};

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  await axios
    .delete(`https://localhost:8000/api/product/delete/${id}`, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};

export const getProductById = async (id) => {
  let data = {};

  let config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  await axios
    .get(`https://localhost:8000/api/products/${id}`, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};

export const updateProduct = async (id, body) => {
  let data = {};

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  await axios
    .put(`https://localhost:8000/api/product/update/${id}`, body, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};
