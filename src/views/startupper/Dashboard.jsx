import React, { useState, useEffect } from "react";

// NE9ESS DES CARD
// CARD TOTAL FUNDS W CARD TOTAL REVENUE
// PIE CHART REPATITION MTAA LFUNDS KIMA F DESIGN

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardProfile from "components/Cards/CardProfile";
import CardSettings from "components/Cards/CardSettings";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import CardStats from "components/Cards/CardStats.js";
import CardTable from "components/Cards/CardTable.js";
import HeaderStats from "components/Headers/HeaderStats";
import Tablestartup from "./Tablestartup";
import Cacs from "services/cac.service.js";
import Startups from "services/startup.service.js";
import Dropdown from "components/Dropdowns/Dropdown";

export default function Dashboard() {
  const [amount, setAmount] = useState("");
  const [month, setMonth] = useState("");
  const [startupId, setStartupId] = useState("");

  const [startups, setStartup] = useState([]);
  const [cacs, setCacs] = useState([]);
  const [choosetStartupId, setChoosetStartupId] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

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
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
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
          <br />
          <CardBarChart />
          <CardPageVisits />
          <CardProfile />
          <CardSettings />
          <CardSocialTraffic />
          <CardStats />
          <CardTable />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <Tablestartup />
        </div>

        <div className="ff">
          {/*  <Paper classname="Paper">
            <h1> Team</h1>
          </Paper> */}
        </div>
      </div>
    </>
  );
}
