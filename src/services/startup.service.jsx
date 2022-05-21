import * as base from "../common/common.api";

const Startups = {
  createStartup: (data) => base.insertItem("startups", data),
  updateStartup: (data, params) => base.updateItem("startups", data, params),
  getStartups: () => base.getItems("startups"),
  getUserStartup: (params) => base.getItems("startups", params),
  getAssignedUserStartup: (params) => base.getItems("startups", params),
  deleteStartup: (params) => base.deleteItem("startups", params),
};

export default Startups;
