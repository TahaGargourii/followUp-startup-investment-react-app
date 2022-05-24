import * as base from "../common/common.api";

const Revenues = {
  createRevenue: (data) => base.insertItem("revenues", data),
  updateRevenue: (data, params) => base.updateItem("revenues", data, params),
  getAllRevenues: (params) => base.getItems("revenues", params),
  getRevenueByIdAndStartupOrInvestor: (params) =>
    base.getItems("revenues", params),
  getAllRevenuesByStartup: (params) =>
    base.getItem("revenues/startups", params),
  getAllRevenuesByInvestor: () => base.getItems("revenues/investors"),
  getUserRevenue: (params) => base.getItems("revenues", params),
  getAssignedUserRevenue: (params) => base.getItems("revenues", params),
  deleteRevenue: (params) => base.deleteItem("revenues", params),
};

export default Revenues;
