import * as base from "../common/common.api";

const Investors = {
  createInvestor: (data) => base.insertItem("investors", data),
  updateInvestor: (data, params) => base.updateItem("investors", data, params),
  getInvestors: () => base.getItems("investors"),
  getUserInvestor: (params) => base.getItems("investors", params),
  getAssignedUserInvestor: (params) => base.getItems("investors", params),
  deleteInvestor: (params) => base.deleteItem("investors", params),
};

export default Investors;
