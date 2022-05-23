import React, { useState, useEffect } from "react";

import axios from "axios";
import PropTypes from "prop-types";

// METHOD DELETE UPDATE MA YEKHDMOUCH
// DROP FILE FIL HTML CSS

const Files = ({ color }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [poste, setPost] = useState("");
  const [teamId, setTeamId] = useState("");
  var FileData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    poste: poste,
    teamId: teamId,
  };

  const addFile = () => {
    console.log(FileData);
    axios
      .post("http://localhost:8080/api/files", FileData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAllFiles = () => {
    console.log(FileData);
    axios
      .delete("http://localhost:8080/api/files", FileData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFile = (id) => {
    axios
      .delete("http://localhost:8080/api/files/" + { id })
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const updateFile = (id) => {
    console.log(FileData);
    axios
      .put("http://localhost:8080/api/files/" + id, FileData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [files, setFile] = useState([]);
  /*  const [startups, setStartups] = useState([]);
  const [investors, setInvestors] = useState([]);
  const [isFetching, setFetching] = useState(false); */
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/files")
      .then((res) => {
        console.log("HELLO " + Object.keys(res.data.data).length);
        console.log("hello " + res.data.data);
        setFile(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              File Information
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0"></div>
      </div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Files
              </h3>
            </div>

            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={deleteAllFiles}
            >
              Delete All
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Avatar
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Email
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {(files || []).map((file) => (
                <tr key={file.id}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                    <img
                      src={
                        require("assets/img/avatar-icon-images-4.jpg").default
                      }
                      className="h-12 w-12 bg-white rounded-full border"
                      alt="..."
                    ></img>{" "}
                    <span
                      className={
                        "ml-3 font-bold " +
                        +(color === "light"
                          ? "text-blueGray-600"
                          : "text-white")
                      }
                    ></span>
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {file.firstName}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {file.lastName}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {file.phoneNumber}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {file.email}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={deleteFile(file.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={updateFile(file.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Files;

Files.defaultProps = {
  color: "light",
};

Files.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
