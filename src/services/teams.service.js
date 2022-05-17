import * as base from "../common/common.api";

const Teams = {
  createTeam: (data) => base.insertItem("teams", data),
  updateTeam: (data, params) => base.updateItem("teams", data, params),
  getTeams: () => base.getItems("teams"),
  getUserTeam: (params) => base.getItems("teams", params),
  getAssignedUserTeam: (params) => base.getItems("teams", params),
  deleteTeam: (params) => base.deleteItem("teams", params),
};

export default Teams;