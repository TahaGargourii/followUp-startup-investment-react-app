import * as base from "../common/common.api";

const Startupper = {
  createStartupper: (data) => base.insertItem("post_startupper", data),
  updateStartupper: (data, params) =>
    base.updateItem("put_startupper", data, params),
  getStartupper: () => base.getItems("get_startupper"),
  getUserStartupper: (params) => base.getItems("user/startupper", params),
  getAssignedUserStartupper: (params) =>
    base.getItems("startupper/by_assigned_user", params),
  deleteStartupper: (params) => base.deleteItem("delete_startupper", params),
};

export default Startupper;
