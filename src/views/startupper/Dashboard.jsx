import React from "react";

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

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
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
