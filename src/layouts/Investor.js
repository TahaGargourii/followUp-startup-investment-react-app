import React from "react";
import { Switch, Route } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";

import HeaderStatsStartupper from "components/Headers/HeaderStatsStartupper.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views
import InvestorSidebar from "components/Sidebar/InvestorSidebar";
import Dashboard from "views/investor/Dashboard.jsx";
import Contact from "views/investor/Contact.jsx";
import Startup from "views/investor/Startup.jsx";
import StartupDashboard from "views/investor/StartupDashboard.jsx";
import File from "views/investor/File.jsx";
export default function Investor() {
  return (
    <>
      <InvestorSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStatsStartupper />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/investor/dashboard" exact component={Dashboard} />
            <Route path="/investor/contacts" exact component={Contact} />
            <Route path="/investor/portfolios" exact component={Startup} />

            <Route
              path="/investor/startupDashboard"
              exact
              component={StartupDashboard}
            />

            <Route path="/investor/files" exact component={File} />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
