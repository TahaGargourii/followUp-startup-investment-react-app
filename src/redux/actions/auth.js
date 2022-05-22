import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  
  import Auth from '../../services/auth.service'

  export const login =
  (data, setcredentials) => (dispatch) => {
    return Auth.login(data).then(
      (data) => {
        console.log(data, "datalogin");
        if (data.status === 200) {
            setcredentials(false);
            
          dispatch({
            type: LOGIN_SUCCESS,
            payload: { user: data },
          });
          return Promise.resolve();
        } else {
            setcredentials(true);
        }
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });

        return Promise.reject();
      }
    );
  };

  export const registerInvestor = (data) => (dispatch) => {
    return Auth.registerInvestor(data).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const registerStartuper = (data) => (dispatch) => {
    console.log("registerStartuper ",data);
    let user = {
      user : data
    }
    console.log("registerStartuper ",user);
    return Auth.registerStartuper(user).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };