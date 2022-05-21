import * as base from "../common/common.api";

const Contacts = {
  createContact: (data) => base.insertItem("contacts", data),
  updateContact: (data, params) => base.updateItem("contacts", data, params),
  getContacts: () => base.getItems("contacts"),
  getUserContact: (params) => base.getItems("contacts", params),
  getAssignedUserContact: (params) => base.getItems("contacts", params),
  deleteContact: (params) => base.deleteItem("contacts", params),
};

export default Contacts;
