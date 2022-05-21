import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate,useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {login} from '../../redux/actions/auth'

import Auth from "../../services/auth.service";
import { clippingParents } from "@popperjs/core";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "../../redux/actions/types";

export default function Login() {
  ///  let navigate = useNavigate();
  const history = new useHistory();
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.authReducer);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var userAccount = {
    username: username,
    password: password,
  };
  const [credentials, setcredentials] = useState(false);

  const signIn = () => {
    if (!!!userAccount.password || !!!userAccount.username) {
      console.log("password or username is incorrect");
    } else {
      dispatch(
        login(userAccount, setcredentials)
      )
        .then((res) => {
          // switch (res?.data?.user?.userRole) {
          //   case 'USER':
          //     history.push('/startupper');
          //     break;
          //   case 'ADMIN':
          //     history.push('/admin');
          //     break;
          //   case 'STARTUPPER':
          //     history.push('/startupper');
          //     break;
          //   case 'INVESTOR':
          //     history.push('/investor');
          //     break;
          //   default:
          //     break;
          // }
          // window.location.reload();
          console.log('doing nothing')
        })
        .catch((e) => {
          console.log(e, "loginError");
        });
    }
  };

  if (isLoggedIn) {
    var currentUser = JSON.parse(localStorage.getItem('user'));
    console.log('islogged int ', currentUser);
    switch (currentUser?.user?.userRole) {
      case 'USER':
        return <Redirect to="/startupper" />;
      case 'ADMIN':
        return <Redirect to="/admin" />;
      case 'STARTUPPER':
        return <Redirect to="/startupper" />;
      case 'INVESTOR':
        return <Redirect to="/investor" />;
      default:
        break;
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3"></div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold"></div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Username"
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={signIn}
                      to="/auth/register"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
