import * as base from "../common/common.api";

const Cacs = {
  createCac: (data) => base.insertItem("cacs", data),

  getAllCacsByStartup: (params) =>
    base.getItemsByParams("cacs/cacsByStartup", params),
  getAllCacsByStartupAndMonth: (params) =>
    base.getItemsByParams("cacs/cacsByStartupAndMonth", params),
  deleteCac: (params) => base.deleteItem("cacs", params),
  /*  getAllCacsByInvestor: () => base.getItems("cacs/investors"),
  getUserCac: (params) => base.getItems("cacs", params),
  getAssignedUserCac: (params) => base.getItems("cacs", params),
  updateCac: (data, params) => base.updateItem("cacs", data, params),
  getAllCacs: (params) => base.getItems("cacs", params),
  getCacByIdAndStartupOrInvestor: (params) => base.getItems("cacs", params), */
};

export default Cacs;