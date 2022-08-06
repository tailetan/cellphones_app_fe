import axios from "axios";

export const getAllUsers = async ({ paginate, page, sort, search } = {}) => {
  const queryStringArray = [];
  let url = "/users";
  let data = {};

  if (paginate) {
    queryStringArray.push(`paginate=${paginate}`);
  }

  if (page) {
    queryStringArray.push(`page=${page}`);
  }

  if (sort) {
    queryStringArray.push(`sort[first_name]=${sort}`);
  }

  if (search) {
    queryStringArray.push(`search=${search}`);
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
        Authorization: `Bearer ${localStorage.getItem("token")}`,
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

export const deleteUser = async (id) => {
  let data = {};

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };

  await axios
    .delete(`/user/delete/${id}`, config)
    .then((result) => {
      data = { ...result.data };
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });

  return data;
};
