import * as base from "../common/common.api";

const Revenues = {
  createRevenue: (data) => base.insertItem("revenues", data),

  getAllRevenuesByStartup: (params) =>
    base.getItemsByParams("revenues/revenuesByStartup", params),
  getAllRevenuesByStartupAndMonth: (params) =>
    base.getItemsByParams("revenues/revenuesByStartupAndMonth", params),
  deleteRevenue: (params) => base.deleteItem("revenues", params),
  /*  getAllRevenuesByInvestor: () => base.getItems("revenues/investors"),
  getUserRevenue: (params) => base.getItems("revenues", params),
  getAssignedUserRevenue: (params) => base.getItems("revenues", params),
  updateRevenue: (data, params) => base.updateItem("revenues", data, params),
  getAllRevenues: (params) => base.getItems("revenues", params),
  getRevenueByIdAndStartupOrInvestor: (params) => base.getItems("revenues", params), */
};

export default Revenues;
