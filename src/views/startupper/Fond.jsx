import React, { useState, useEffect } from "react";

import axios from "axios";
import PropTypes from "prop-types";
import Fonds from "../../services/fond.service";
import Startups from "services/startup.service.js";
import Investor from "services/investor.service"; // POST FOND BIL LIST INVESTOR W  LIST STARTUPP ILY AANDOU STARTUPPER
/// DELETE W UPDATE FOND LEEEEE
const Fond = ({ color }, fondID) => {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [capTable, setCapTable] = useState("");
  const [startupId, setStartupId] = useState("");
  const [investorId, setInvestorId] = useState("");
  const [investors, setInvestor] = useState([]);
  const [choosetInvestorId, setchoosetInvestorId] = useState([]);
  var FondData = {
    amount: amount,
    type: type,
    capTable: capTable,
    startupId: startupId,
    investorId: investorId,
  };
  const [fonds, setFond] = useState([]);
  const [startups, setStartup] = useState([]);
  const getAllFondsByStartup = (choosetInvestorId) => {
    console.log(choosetInvestorId);
    Fonds.getAllFondsByStartup(choosetInvestorId)
      .then((res) => {
        console.log("getFonds", res.data);
        setFond(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    Startups.getStartups()
      .then((res) => {
        console.log("getStartups", res.data);
        setStartup(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const addFond1 = () => {
    /*  console.log("addFond");
    console.log("addFond11" + FondData);
    Fonds.createFond(FondData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      }); */
    console.log(FondData);
    axios
      .post("http://localhost:8080/api/fonds", FondData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addFond = () => {
    console.log("addStartup");
    Fonds.createFond(FondData)
      .then((res) => {
        console.log(res.data.report);
        //   getAllFonds();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateFond = (id, FondData) => {
    console.log("updateFond");
    Fonds.updateFond(id, FondData)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteAllFonds = () => {
    console.log("deleteAllFonds");
    Fonds.deleteAllFonds()
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFond = (id) => {
    console.log("deleteFond");
    Fonds.deleteFond(id)
      .then((res) => {
        console.log(res.data.report);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    Investor.getInvestors()
      .then((res) => {
        console.log("getStartups", res.data);
        setInvestor(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChangeInvestor = (event) => {
    console.log("select team");
    console.log("select team" + event.target.value);
    FondData.investorId = event.target.value;
  };

  const handleChangeStartup = (event) => {
    console.log("select team");
    console.log("select team" + event.target.value);
    FondData.startupId = event.target.value;
  };

  const handleChooseStartup = (event) => {
    console.log("select team");
    console.log("select team" + event.target.value);
    setchoosetInvestorId(event.target.value);
    getAllFondsByStartup(event.target.value);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Fond Information
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
                    Startup
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className={
                      "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    }
                    onChange={handleChangeStartup}
                  >
                    {(startups || []).map((startup) => (
                      <option value={startup?.id}>{startup?.name}</option>
                    ))}
                  </select>

                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Investor
                  </label>

                  <select
                    name="cars"
                    id="cars"
                    className={
                      "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    }
                    onChange={handleChangeInvestor}
                  >
                    {(investors || []).map((investor) => (
                      <option value={investor?.id}>
                        {investor?.user.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Amount
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Type
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Cap Table
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required
                    onChange={(e) => {
                      setCapTable(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={addFond}
            >
              Sumbit
            </button>
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
                Fonds
              </h3>
            </div>

            <select
              name="cars"
              id="cars"
              className={
                "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              }
              onChange={handleChooseStartup}
            >
              {(startups || []).map((startup) => (
                <option value={startup?.id}>{startup?.name}</option>
              ))}
            </select>
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
                  Fond Name
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
              {(fonds || []).map((fond) => (
                <tr key={fond.id}>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {fond.amount}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {fond.type}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {fond.capTable}
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

export default Fond;

Fond.defaultProps = {
  color: "light",
};

Fond.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
