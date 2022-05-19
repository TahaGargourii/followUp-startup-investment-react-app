import * as base from "../common/common.api";

const Members = {
  createMember: (data) => base.insertItem("members", data),
  updateMember: (data, params) => base.updateItem("members", data, params),
  getMembers: () => base.getItems("members"),
  getUserMember: (params) => base.getItems("members", params),
  getAssignedUserMember: (params) => base.getItems("members", params),
  deleteMember: (params) => base.deleteItem("members", params),
};

export default Members;
