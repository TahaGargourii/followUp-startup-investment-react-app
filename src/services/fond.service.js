import * as base from "../common/common.api";

const Fonds = {
  createFond: (data) => base.insertItem("fonds", data),
  updateFond: (data, params) => base.updateItem("fonds", data, params),
  getAllFonds: (params) => base.getItems("fonds", params),
  getFondByIdAndStartupOrInvestor: (params) => base.getItems("fonds", params),
  getAllFondsByStartup: (params) => base.getItem("fonds/startups", params),
  getAllFondsByInvestor: () => base.getItems("fonds/investors"),
  getUserFond: (params) => base.getItems("fonds", params),
  getAssignedUserFond: (params) => base.getItems("fonds", params),
  deleteFond: (params) => base.deleteItem("fonds", params),
};

export default Fonds;
