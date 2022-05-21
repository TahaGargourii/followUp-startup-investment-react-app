import React from "react";

// NE9ESS DES CARD 
// CARD TOTAL FUNDS W CARD TOTAL REVENUE 
// PIE CHART REPATITION MTAA LFUNDS KIMA F DESIGN 


import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import HeaderStats from "components/Headers/HeaderStats";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
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
