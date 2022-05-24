import React, { useState, useEffect } from "react";

// METHOD DELETE UPDATE MA YEKHDMOUCH

import PropTypes from "prop-types";
import Startups from "services/startup.service.js";

const Revenue = ({ color }) => {
  const [name, setName] = useState("");
  const [Newname, setNewName] = useState("");

  const [isUpdating, setisUpdating] = useState(false);
  const [updatedStarup, setupdatedStarup] = useState();

  const [loading, setLoading] = useState(false);
  var StartupData = {
    name: name,
  };
  const [startups, setStartup] = useState([]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    getStartups();
  }, []);

  useEffect(() => {
    setupdatedStarup({ ...updatedStarup, name: Newname });
  }, [Newname]);

  const getStartups = () => {
    console.log("addStartup" + getStartups.JSON);
    setLoading(true);
    Startups.getStartups()
      .then((res) => {
        console.log("addStartupres" + res);
        console.log("getStartups c", res.data);
        setStartup(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const updateProcess = (id) => {
    console.log("updating process", id);
    setisUpdating(true);
    var item = startups.find((o) => o.id == id);
    setupdatedStarup(item);
    //updateStartup(id,{...item, name: Newname})
  };

  const addStartup = () => {
    console.log("addStartup");
    Startups.createStartup(StartupData)
      .then((res) => {
        console.log(res.data.report);
        getStartups();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Startup Information
            </h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Startup Name
                  </label>
                  {!isUpdating ? (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      required
                      onChange={(e) => {
                        setNewName(e.target.value);
                      }}
                      value={updatedStarup?.name}
                    />
                  )}
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </form>
        </div>
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
                Startups
              </h3>
            </div>

            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              //onClick={deleteAllStartups}
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
              {(startups || [] || []).map((item) => (
                <tr key={item.id}>
                  <th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.name}
                    </td>
                  </th>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"></td>
                </tr>
              ))}
            </tbody>
            {/*       <tbody>
              {startups.map((startup) => (
                <tr key={startup?.id}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {startup?.name}
                  </td>

                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      //onClick={deleteStartup(item?.id)}
                      onClick={(e) => {
                        deleteStartup(startup?.id);
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                      type="button"
                      // onClick={updateProcess()}
                      onClick={(e) => {
                        updateProcess(startup?.id);
                      }}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default Revenue;

Revenue.defaultProps = {
  color: "light",
};

Revenue.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
