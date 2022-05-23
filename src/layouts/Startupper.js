import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import requireAuth from "../Helpers/isAuthenticated";

// views
import Dashboard from "views/startupper/Dashboard.jsx";
import Member from "views/startupper/Member.jsx";
import Contacts from "views/startupper/Contact";
import Teams from "views/startupper/Team";
import StartupperSidebar from "components/Sidebar/StartupperSidebar";
import HeaderStatsStartupper from "components/Headers/HeaderStatsStartupper";
import Investors from "views/startupper/Investor.jsx";
import Startup from "views/startupper/Startup.jsx";
import File from "views/startupper/File.jsx";
import Fond from "views/startupper/Fond";

export default function Startupper() {
  return (
    <>
      <StartupperSidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStatsStartupper />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route
              path="/startupper/dashboard"
              exact
              component={requireAuth(Dashboard)}
            />
            <Route
              path="/startupper/contacts"
              exact
              component={requireAuth(Contacts)}
            />
            <Route
              path="/startupper/teams"
              exact
              component={requireAuth(Teams)}
            />
            <Route
              path="/startupper/members"
              exact
              component={requireAuth(Member)}
            />
            <Redirect from="/admin" to="/admin/dashboard" />
            <Route
              from="/startupper/startup"
              component={requireAuth(Startup)}
            />
            <Route
              path="/startupper/files"
              exact
              component={requireAuth(File)}
            />
            <Route
              path="/startupper/investors"
              exact
              component={requireAuth(Investors)}
            />
            <Route from="/startupper/fond" component={requireAuth(Fond)} />

            {/*  <Route path="/startupper/AddStartup" exact component={Addstartup} /> */}
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
