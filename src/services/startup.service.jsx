import * as base from "../common/common.api";

const Startups = {
  createStartup: (data) => base.insertItem("post_startup", data),
  updateStartup: (data, params) => base.updateItem("put_startup", data, params),
  getStartup: () => base.getItems("get_startup"),
  getUserStartup: (params) => base.getItems("user/startup", params),
  getAssignedUserStartup: (params) =>
    base.getItems("startup/by_assigned_user", params),
  deleteStartup: (params) => base.deleteItem("delete_startup", params),
};

export default Startups;
