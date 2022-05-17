import * as base from "../common/common.api";

const Auth = {
  login: (data) => base.login("login", data),
  logout: () => base.getItems("logout")
};

export default Auth;