import * as base from "../common/common.api";

const Files = {
  createFile: (data) => base.insertItem("files", data),
  updateFile: (data, params) => base.updateItem("files", data, params),
  getFiles: () => base.getItems("files"),
  getFilesByStartupper: () => base.getItems("files/startupper"),
  getUserFile: (params) => base.getItems("files", params),
  getAssignedUserFile: (params) => base.getItems("files", params),
  deleteFile: (params) => base.deleteItem("files", params),
};

export default Files;
