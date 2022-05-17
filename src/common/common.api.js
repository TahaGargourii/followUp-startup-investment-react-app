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

export const insertItem = (path, data) => {
  return axios.post(getPath(path), data, config);
};

export const updateItem = (path, data, params) => {
  return axios.put(getPath(path), data, config);
};

export const deleteItem = (path, data) => {
  return axios.delete(getPath(path), data, config);
};