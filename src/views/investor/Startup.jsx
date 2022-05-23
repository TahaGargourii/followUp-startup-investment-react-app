import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import Startups from "services/startup.service.js";

// METHOD DELETE UPDATE MA YEKHDMOUCH


const Startup = ({ color }, startupID) => {
  const [name, setName] = useState("");
  var StartupData = {
    name: name,
  };
  const [liststartups, setStartup] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    Startups.getStartups()
      .then((res) => {
        console.log("getStartups x", res.data);
        setStartup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addStartup = () => {
    console.log("addStartup");
    Startups.createStartup(StartupData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateStartup = (id, StartupData) => {
    console.log("updateStartup");
    Startups.updateStartup(id, StartupData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAllStartups = () => {
    console.log("deleteAllStartups");
    Startups.deleteAllStartups()
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteStartup = (id) => {
    console.log("deleteStartup");
    Startups.deleteStartup(id)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"></div>
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
                Startups
              </h3>
            </div>

            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={deleteAllStartups}
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
                  Startup Name
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
              {liststartups.length > 0 && liststartups.map((item) => (
                <tr key={item?.id}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {item?.name}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={deleteStartup(item?.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={updateStartup(item?.firstName)}
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

export default Startup;

Startup.defaultProps = {
  color: "light",
};

Startup.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
