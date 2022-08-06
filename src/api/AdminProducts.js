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
  let url = "https://d731-42-115-169-248.ap.ngrok.io/api/products";
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
    .post(
      "https://d731-42-115-169-248.ap.ngrok.io/api/product/create",
      body,
      config
    )
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
    .delete(
      `https://d731-42-115-169-248.ap.ngrok.io/api/product/delete/${id}`,
      config
    )
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
    .get(`https://d731-42-115-169-248.ap.ngrok.io/api/products/${id}`, config)
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
    .put(
      `https://d731-42-115-169-248.ap.ngrok.io/api/product/update/${id}`,
      body,
      config
    )
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};
