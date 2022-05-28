import React, { useState, useEffect } from "react";

// METHOD DELETE UPDATE MA YEKHDMOUCH
import Dropdown from "components/Dropdowns/Dropdown";
import PropTypes from "prop-types";
import Cacs from "services/cac.service.js";
import Startups from "services/startup.service.js";
const Cac = ({ color }) => {
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [startupId, setStartupId] = useState("");

  const [startups, setStartup] = useState([]);
  const [cacs, setCacs] = useState([]);
  const [choosetStartupId, setChoosetStartupId] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [months, setMonths] = useState([
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ]);

  useEffect(() => {}, []);
  /* 
  useEffect(() => {
    setupdatedStarup({ ...updatedStarup, name: Newname });
  }, [Newname]);
 */
  const getAllCacsByStartup = (startupId) => {
    console.log(startupId);

    // console.log("addStartup" + getStartups.JSON);
    // setLoading(true);
    Cacs.getAllCacsByStartup(startupId)
      .then((res) => {
        console.log("addStartupres" + res);
        console.log("getStartups c", res.data);
        setCacs(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        //setLoading(false);
      });
  };

  /*   const updateProcess = (id) => {
    console.log("updating process", id);
    setisUpdating(true);
    var item = startups.find((o) => o.id == id);
    setupdatedStarup(item);
    //updateStartup(id,{...item, name: Newname})
  }; */

  const addCac = () => {
    var CacData = {
      amount: amount,
      month: selectedItem?.name,
      startupId: startupId,
    };
    Cacs.createCac(CacData)
      .then((res) => {
        console.log(res.data.report);
        getAllCacsByStartup(startupId);
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
  const handleChangeStartup = (event) => {
    console.log("select team");
    console.log("select team" + event.target.value);
    setStartupId(event.target.value);
    // CacData.startupId = event.target.value;
  };

  const handleChooseStartup = (event) => {
    console.log("select team");
    console.log("select team" + event.target.value);
    setChoosetStartupId(event.target.value);
    getAllCacsByStartup(event.target.value);
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
                    Month
                  </label>
                  <Dropdown
                    setSelectedItem={setSelectedItem}
                    data={months}
                    title="Select Month"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <button
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={addCac}
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
                CAC
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
                  Amount
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Month
                </th>
              </tr>
            </thead>
            <tbody>
              {(cacs || [] || []).map((item) => (
                <tr key={item.id}>
                  <th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.startup.name}
                    </td>
                  </th>
                  <th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.amount}
                    </td>
                  </th>
                  <th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.month}
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

export default Cac;

Cac.defaultProps = {
  color: "light",
};

Cac.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
