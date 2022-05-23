import axios from "axios";

import authHeader from './authHeader'

export const baseUrl = "http://localhost:8080/api";
export const authbaseUrl = "http://localhost:8080";

 const config = {
    headers:  authHeader()
};

//Auth axios login call
export const login = (path, data) => {
    return axios.post(getPathauth(path), data, config);
  };

const getPathauth = (path, params = null) => {
    return authbaseUrl + "/" + path;
  };


//Other axios calls
const getPath = (path, params = null) => {
  return baseUrl + "/" + path + (params ? "?id=" + params : "");
};

export const getItems = async (path, params) => {
    return await axios
      .get(getPath(path, params), config)
      .then((response) => response.data);
  };

export const insertItem = async (path, data) => {
  console.log('test',config);
  return await axios.post(getPath(path), data, config)
  .then((response) => response.data);
};

export const updateItem = async (path, data, params) => {
  return await axios.put(getPath(path)+ "/"+params, data, config)
  .then((response) => response.data);
};

export const deleteItem = async (path, data) => {
  return await axios.delete(getPath(path)+ "/"+data, config)
  .then((response) => response.data);
};