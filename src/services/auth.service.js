import { resolveTypeReferenceDirective } from "typescript";
import * as base from "../common/common.api";

// const Auth = {
//   login: (data) => base.login("login", data),
//   logout: () => base.getItems("logout")
// };

const login = (data) => {
    return base.login("login", data).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
        console.log('auth.service', response.data);
      }
      console.log(response, "==>resp");
      return { ...response.data, status: response.status };
    });
};

const logout = () => {

}
const register = () => {

}
export default {
  register,
  login,
  logout,
};