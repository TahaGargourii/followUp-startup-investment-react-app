import React, { useState, useEffect } from "react";

import axios from "axios";
import PropTypes from "prop-types";
import Startups from "services/startup.service.js";

import Portfolio from "services/portfolio.service.js";

const Portfolios = ({ color }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [poste, setPost] = useState("");
  const [teamId, setTeamId] = useState("");
  var PortfolioData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    poste: poste,
    teamId: teamId,
  };

  const [portfolios, setPortfolio] = useState([]);

  const [startups, setStartup] = useState([]);

  useEffect(() => {
    getAllStartupsByPortfolio();
  }, [startups]);

  const getAllStartupsByPortfolio = () => {
    Portfolio.getAllStartupsByPortfolio()
      .then((res) => {
        console.log("addStartupres" + res);
        console.log("getStartups c", res.data);
        setStartup(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  };
  return (
    <>
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

export default Portfolios;

Portfolios.defaultProps = {
  color: "light",
};

Portfolios.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
